/*
 * Spotify Web API helper (server-side only).
 *
 * Uses a long-lived refresh token for YOUR OWN Spotify account to fetch
 * what you're currently playing, falling back to your most recently played
 * track. This is not a per-visitor OAuth flow — it's your account's
 * listening activity, shown to everyone who visits the site.
 *
 * Required env vars (see README / .env.example):
 *   SPOTIFY_CLIENT_ID
 *   SPOTIFY_CLIENT_SECRET
 *   SPOTIFY_REFRESH_TOKEN
 *
 * Never import this file from a client component — it's only safe to use
 * inside Route Handlers / Server Components, since it reads secret env vars.
 */

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_NOW_PLAYING_URL =
  'https://api.spotify.com/v1/me/player/currently-playing';
const SPOTIFY_RECENTLY_PLAYED_URL =
  'https://api.spotify.com/v1/me/player/recently-played?limit=1';

interface SpotifyArtist {
  name: string;
}

interface SpotifyAlbumImage {
  url: string;
}

interface SpotifyTrackItem {
  id: string;
  name: string;
  preview_url: string | null;
  external_urls: { spotify: string };
  artists: SpotifyArtist[];
  album: { images: SpotifyAlbumImage[] };
}

interface SpotifyCurrentlyPlayingResponse {
  is_playing: boolean;
  item: SpotifyTrackItem | null;
}

interface SpotifyRecentlyPlayedResponse {
  items: { track: SpotifyTrackItem }[];
}

export interface SpotifyTrack {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumArt: string | null;
  songUrl: string;
  trackId: string | null;
  previewUrl: string | null;
}

async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Spotify credentials are not configured');
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to refresh Spotify token: ${response.status}`);
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

function mapTrack(track: SpotifyTrackItem, isPlaying: boolean): SpotifyTrack {
  return {
    isPlaying,
    title: track.name,
    artist: track.artists.map((artist) => artist.name).join(', '),
    albumArt: track.album?.images?.[0]?.url ?? null,
    songUrl: track.external_urls?.spotify ?? '',
    trackId: track.id ?? null,
    previewUrl: track.preview_url ?? null,
  };
}

/**
 * Returns the track currently playing on your Spotify account, or your
 * most recently played track if nothing is playing right now. Returns
 * `null` if credentials are missing or every request fails.
 */
export async function getSpotifyTrack(): Promise<SpotifyTrack | null> {
  try {
    const accessToken = await getAccessToken();
    const authHeader = { Authorization: `Bearer ${accessToken}` };

    const nowPlayingRes = await fetch(SPOTIFY_NOW_PLAYING_URL, {
      headers: authHeader,
      cache: 'no-store',
    });

    if (nowPlayingRes.status === 200) {
      const data =
        (await nowPlayingRes.json()) as SpotifyCurrentlyPlayingResponse;
      if (data?.item) {
        return mapTrack(data.item, Boolean(data.is_playing));
      }
    }

    const recentRes = await fetch(SPOTIFY_RECENTLY_PLAYED_URL, {
      headers: authHeader,
      cache: 'no-store',
    });

    if (!recentRes.ok) {
      return null;
    }

    const recentData =
      (await recentRes.json()) as SpotifyRecentlyPlayedResponse;
    const track = recentData?.items?.[0]?.track;

    return track ? mapTrack(track, false) : null;
  } catch (error) {
    console.error('Spotify API error:', error);
    return null;
  }
}
