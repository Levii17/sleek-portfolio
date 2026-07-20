/*
 * Spotify "Last Played" Card Configuration
 *
 * These are fallback values only — shown while the live data from
 * `/api/spotify` is loading on first render, or if that request fails for
 * any reason (missing credentials, rate limit, etc). The real track comes
 * from `src/lib/spotify.ts`, which talks to Spotify's Web API using a
 * refresh token for your account. See the comment at the top of that file
 * for setup steps.
 */

export const spotifyConfig = {
  enabled: true,

  // Track details shown in the card
  song: 'Creep',
  artists: 'Radiohead',

  // Where the disc icon / card should link out to (optional).
  // Leave empty to avoid redirecting to the generic Spotify home page.
  url: '',

  // Optional short audio preview. Leave as '' to disable real playback.
  previewUrl: '',
};
