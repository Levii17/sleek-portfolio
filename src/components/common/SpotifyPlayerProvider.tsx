'use client';

import { spotifyConfig } from '@/config/Spotify';
import type { SpotifyTrack } from '@/lib/spotify';
import * as React from 'react';

interface SpotifyPlayerContextValue {
  song: string;
  artists: string;
  previewUrl: string;
  trackId: string | null;
  songUrl: string;
  hasTrackLink: boolean;
  isLive: boolean;
  previewPlaying: boolean;
  togglePreview: () => void;
}

const SpotifyPlayerContext =
  React.createContext<SpotifyPlayerContextValue | null>(null);

export function useSpotifyPlayer() {
  const ctx = React.useContext(SpotifyPlayerContext);
  if (!ctx) {
    throw new Error(
      'useSpotifyPlayer must be used within a SpotifyPlayerProvider',
    );
  }
  return ctx;
}

/**
 * Owns Spotify track state and the actual playing element (an <audio> tag,
 * or a Spotify embed <iframe> as a fallback). This lives in the root layout
 * — outside of `{children}` — so that when the person navigates between
 * pages, this provider (and the element that's actually making sound)
 * never unmounts. Only the page-specific UI (the "Now playing" card in
 * Hero) comes and goes; playback itself keeps running in the background.
 *
 * The playing element is visually hidden (off-screen, not `display: none`)
 * rather than removed, since some players — the Spotify embed in
 * particular — pause themselves when their container isn't rendered.
 */
export function SpotifyPlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const [track, setTrack] = React.useState<SpotifyTrack | null>(null);
  const [previewPlaying, setPreviewPlaying] = React.useState(false);
  const [showEmbed, setShowEmbed] = React.useState(false);

  React.useEffect(() => {
    let ignore = false;

    fetch('/api/spotify')
      .then((res) => res.json())
      .then((data: { track: SpotifyTrack | null }) => {
        if (!ignore) setTrack(data.track);
      })
      .catch(() => {});

    return () => {
      ignore = true;
    };
  }, []);

  const song = track?.title ?? spotifyConfig.song;
  const artists = track?.artist ?? spotifyConfig.artists;
  const previewUrl = track?.previewUrl ?? spotifyConfig.previewUrl;
  const trackId = track?.trackId ?? null;
  const songUrl = track?.songUrl || spotifyConfig.url || '';
  const hasTrackLink =
    Boolean(songUrl) &&
    songUrl !== 'https://open.spotify.com/' &&
    songUrl !== 'https://open.spotify.com';
  const isLive = track?.isPlaying ?? false;

  const togglePreview = React.useCallback(() => {
    // Don't toggle previewPlaying manually here — the audio element's
    // onPlay/onPause/onEnded handlers below keep it in sync with what's
    // actually happening, so a failed/interrupted play() doesn't leave
    // the UI showing "playing" when nothing is audible.
    if (previewUrl) {
      if (previewPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play().catch(() => setPreviewPlaying(false));
      }
      return;
    }

    if (trackId) {
      setShowEmbed((prev) => !prev);
      setPreviewPlaying((prev) => !prev);
      return;
    }

    if (hasTrackLink) {
      window.open(songUrl, '_blank', 'noopener,noreferrer');
    }
  }, [previewUrl, previewPlaying, trackId, hasTrackLink, songUrl]);

  const value = React.useMemo<SpotifyPlayerContextValue>(
    () => ({
      song,
      artists,
      previewUrl,
      trackId,
      songUrl,
      hasTrackLink,
      isLive,
      previewPlaying,
      togglePreview,
    }),
    [
      song,
      artists,
      previewUrl,
      trackId,
      songUrl,
      hasTrackLink,
      isLive,
      previewPlaying,
      togglePreview,
    ],
  );

  return (
    <SpotifyPlayerContext.Provider value={value}>
      {children}

      {previewUrl && (
        <audio
          key={previewUrl}
          ref={audioRef}
          src={previewUrl}
          preload="none"
          className="absolute h-px w-px overflow-hidden opacity-0"
          aria-hidden="true"
          onPlay={() => setPreviewPlaying(true)}
          onPause={() => setPreviewPlaying(false)}
          onEnded={() => setPreviewPlaying(false)}
          onError={() => setPreviewPlaying(false)}
        />
      )}

      {showEmbed && trackId && !previewUrl && (
        <iframe
          key={trackId}
          src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0&autoplay=1`}
          className="absolute h-px w-px overflow-hidden opacity-0"
          aria-hidden="true"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Spotify player"
        />
      )}
    </SpotifyPlayerContext.Provider>
  );
}
