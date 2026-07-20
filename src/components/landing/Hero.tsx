'use client';

import { heroConfig, socialLinks } from '@/config/Hero';
import { spotifyConfig } from '@/config/Spotify';
import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { useUmami } from '@/hooks/use-umami';
import type { SpotifyTrack } from '@/lib/spotify';
import { cn } from '@/lib/utils';
import { BadgeCheck, Disc3, Pause, Play } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import Container from '../common/Container';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import Spotify from '../svgs/Spotify';
import { Button } from '../ui/button';
import { CardContent } from '../ui/card';

export default function Hero() {
  const { name, title, avatar, description } = heroConfig;
  const { triggerHaptic, isMobile } = useHapticFeedback();
  const { trackEvent } = useUmami();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Live data fetched from /api/spotify. Falls back to the static config
  // values until it resolves (or if the request fails).
  const [track, setTrack] = useState<SpotifyTrack | null>(null);

  // Whether the visitor has our own preview control "on" — separate from
  // `track.isPlaying`, which reflects whether *you* are actually playing
  // something on Spotify right now.
  const [previewPlaying, setPreviewPlaying] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
    let ignore = false;

    fetch('/api/spotify')
      .then((res) => res.json())
      .then((data: { track: SpotifyTrack | null }) => {
        if (!ignore) setTrack(data.track);
      })
      .catch(() => {
        // Swallow errors — the static fallback below still renders.
      });

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

  const renderDescription = () => (
    <span className="whitespace-pre-wrap">{description}</span>
  );

  const togglePreview = () => {
    if (isMobile()) {
      triggerHaptic('selection');
    }

    trackEvent({
      name: 'button_click',
      data: {
        buttonId: 'spotify_preview',
        section: 'hero',
        action: previewPlaying ? 'pause' : 'play',
      },
    });

    // Preferred path: a real 30s preview clip we control directly.
    if (previewUrl) {
      if (previewPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play().catch(() => {});
      }
      setPreviewPlaying((prev) => !prev);
      return;
    }

    // Fallback: reveal Spotify's own embedded player so visitors can hit
    // play there. Spotify doesn't hand back preview_url for every app
    // anymore, so this is the more reliable "let people actually listen"
    // path for new API registrations.
    if (trackId) {
      setShowEmbed((prev) => !prev);
      setPreviewPlaying((prev) => !prev);
      return;
    }

    // Last resort: open the actual track page when we have one.
    if (hasTrackLink) {
      window.open(songUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Container className="mx-auto max-w-5xl">
      <CardContent className="bg-background/70 space-y-5 rounded-[2rem] border border-white/10 p-6 backdrop-blur-xl">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="group bg-background/90 relative flex h-[96px] w-[96px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 transition-all duration-300 hover:-translate-y-0.5">
            <Image
              src={avatar}
              alt="hero"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-hanken-grotesk flex flex-wrap items-center gap-3 text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl">
              <span className="inline-flex items-center gap-3">
                Hi, I&apos;m {name}
                <BadgeCheck
                  className="size-5 text-sky-500"
                  aria-label="verified"
                />
              </span>
            </h1>
            <p className="text-muted-foreground text-muted-foreground/80 mt-2 text-xs tracking-[0.2em] uppercase">
              {title}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="text-muted-foreground text-muted-foreground/90 max-w-2xl text-base leading-7 sm:text-lg">
          {renderDescription()}
        </div>

        {/* Spotify last played / now playing card */}
        {spotifyConfig.enabled && (
          <div className="space-y-2">
            <div className="bg-muted/10 grid gap-3 rounded-3xl border border-white/10 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePreview}
                  aria-label={previewPlaying ? 'Pause preview' : 'Play preview'}
                  className="bg-background/80 hover:bg-background/100 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-green-600 transition"
                >
                  {previewPlaying ? (
                    <Pause className="size-5" />
                  ) : (
                    <Play className="size-5" />
                  )}
                </button>

                <Link
                  href={hasTrackLink ? songUrl : '#'}
                  target={hasTrackLink ? '_blank' : undefined}
                  rel={hasTrackLink ? 'noopener noreferrer' : undefined}
                  className="min-w-0 flex-1"
                >
                  <div className="mb-1 flex items-center gap-2 text-xs text-green-600/90">
                    <Spotify className="size-4" />
                    <span>{isLive ? 'Now playing' : 'Last played'}</span>
                  </div>
                  <p className="text-foreground truncate text-sm font-semibold">
                    {song}
                  </p>
                  <p className="truncate text-xs text-green-600/70">
                    by {artists}
                  </p>
                </Link>

                <Disc3
                  className={cn(
                    'text-muted-foreground size-5',
                    previewPlaying && 'animate-spin',
                  )}
                  style={
                    previewPlaying ? { animationDuration: '3s' } : undefined
                  }
                />
              </div>

              {showEmbed && trackId && !previewUrl && (
                <iframe
                  key={trackId}
                  src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0&autoplay=1`}
                  width="100%"
                  height="88"
                  style={{ borderRadius: 20 }}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify player"
                />
              )}
            </div>
          </div>
        )}

        {/* Socials */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="bg-background/90 text-foreground hover:bg-background/95 border border-white/10"
              track={{
                name: 'button_click',
                data: { buttonId: 'resume', section: 'hero' },
              }}
            >
              <Link href="/resume" className="flex items-center gap-1.5">
                <CV className="size-4" />
                Resume
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="sm"
              className="bg-background/90 text-foreground hover:bg-background/95 border border-white/10"
              track={{
                name: 'button_click',
                data: { buttonId: 'get_in_touch', section: 'hero' },
              }}
            >
              <Link href="/contact" className="flex items-center gap-1.5">
                <Chat className="size-4" />
                Get in touch
              </Link>
            </Button>

            {socialLinks.map((link) => {
              const isMailto = link.href.startsWith('mailto:');
              return (
                <Button
                  key={link.name}
                  asChild
                  variant="ghost"
                  size="sm"
                  className="bg-background/90 text-foreground hover:bg-background/95 border border-white/10"
                  track={{
                    name: 'external_link_click',
                    data: {
                      url: link.href,
                      text: link.name,
                      location: 'hero_social',
                    },
                  }}
                >
                  <Link
                    href={link.href}
                    target={isMailto ? undefined : '_blank'}
                    rel={isMailto ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-1.5"
                  >
                    <span className="size-4">{link.icon}</span>
                    {link.name}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Container>
  );
}
