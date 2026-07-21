/*
 * Spotify "Last Played" Card Configuration
 *
 * `song`, `artists`, and `url` below are fallback values only — shown
 * while the live data from `/api/spotify` is loading on first render, or
 * if that request fails entirely (missing credentials, rate limit, etc).
 * The real track metadata comes from `src/lib/spotify.ts`, which talks to
 * Spotify's Web API using a refresh token for your account. See the
 * comment at the top of that file for setup steps.
 *
 * `previewUrl` is different: it's used as the actual playback source
 * whenever Spotify doesn't hand back a real `preview_url` for the
 * current/most recent track. As of Spotify's Nov 27 2024 API changes,
 * that's most apps, most of the time — `preview_url` is null-by-default
 * regardless of whether the connected account has Premium, so this isn't
 * a "until I upgrade" gap, it's the normal state. Point this at a short
 * clip of your own in `public/audio/` (see the README there) and the play
 * button will use it any time the live preview is unavailable. Leave it
 * as '' to fall back to the embedded Spotify player instead (requires the
 * visitor to have Spotify open/logged in for full playback).
 */

export const spotifyConfig = {
  enabled: true,

  // Track details shown in the card
  song: 'Want It All',
  artists: 'Areece',

  // Where the disc icon / card should link out to (optional).
  // Leave empty to avoid redirecting to the generic Spotify home page.
  url: '',

  // Local (or remote) audio clip played when no real Spotify preview is
  // available. e.g. '/audio/fallback-track.mp3' once you've added a file
  // to public/audio/. Leave as '' to disable real playback.
  previewUrl: '/audio/want-it-all.mp3',
};
