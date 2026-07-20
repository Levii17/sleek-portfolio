import { getSpotifyTrack } from '@/lib/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
  const track = await getSpotifyTrack();

  return NextResponse.json(
    { track },
    {
      headers: {
        // Cache at the edge/CDN briefly so every hero render doesn't hit
        // Spotify's API directly. Adjust to taste.
        'Cache-Control': 'public, max-age=30, stale-while-revalidate=60',
      },
    },
  );
}
