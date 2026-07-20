'use client';

import { heroConfig, socialLinks } from '@/config/Hero';
import { spotifyConfig } from '@/config/Spotify';
import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { useUmami } from '@/hooks/use-umami';
import type { SpotifyTrack } from '@/lib/spotify';
import { cn } from '@/lib/utils';
import { Disc3, Pause, Play } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import Container from '../common/Container';
import CV from '../svgs/CV';
import Spotify from '../svgs/Spotify';

// Helper component to handle the complex button styling and layered background gradients
function SocialButton({ href, children, isMailto, onClick }) {
  const content = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden rounded-[4px] border border-black/5 bg-white/90 transition-colors duration-200 group-hover:border-black/10 group-active:duration-[50ms] dark:border-white/5 dark:bg-[#0c0c0e] group-hover:dark:border-white/10 group-hover:dark:bg-[#121214]"
      >
        <span className="absolute inset-0 rounded-[4px] bg-black/[0.02] transition duration-200 group-hover:bg-transparent group-active:bg-black/[0.04] group-active:duration-[50ms] dark:bg-transparent dark:group-hover:bg-white/[0.02] dark:group-active:bg-white/[0.04]"></span>
        <span
          className="absolute inset-0 opacity-[0.16] transition duration-200 group-active:opacity-0 group-active:duration-[50ms] dark:opacity-[0.04]"
          style={{
            background:
              'linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
          }}
        ></span>
        <span
          className="absolute inset-0 opacity-[0.04] transition duration-200 group-active:duration-[50ms] dark:opacity-[0.1]"
          style={{
            background:
              'radial-gradient(65.62% 65.62% at 50% 100%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)',
          }}
        ></span>
        <span
          className="absolute inset-0 opacity-[0.4] transition duration-200 group-active:opacity-0 group-active:duration-[50ms] dark:opacity-[0.04]"
          style={{
            background:
              'linear-gradient(99deg, rgba(255, 255, 255, 0) 27.7%, rgba(255, 255, 255, 0.12) 60.19%, rgba(255, 255, 255, 0) 86.06%)',
          }}
        ></span>
        <span
          aria-hidden="true"
          className="absolute inset-0 hidden rounded-[4px] p-px"
          style={{
            background:
              'linear-gradient(transparent 0%, rgb(255, 255, 255) 55%, transparent 80%, rgb(255, 255, 255) 95%)',
            WebkitMask:
              'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        ></span>
      </span>
      <span className="relative flex items-center gap-1.5 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
        {children}
      </span>
    </>
  );

  const baseClasses =
    'group relative block rounded-[4px] text-center text-[13px] font-medium tracking-tight transition-[transform] duration-200 active:scale-[0.99] active:duration-[50ms] text-neutral-900 dark:text-neutral-300 px-3 py-1.5 !text-[12px]';

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href}
      target={isMailto ? undefined : '_blank'}
      rel={isMailto ? undefined : 'noopener noreferrer'}
      className={baseClasses}
    >
      {content}
    </Link>
  );
}

export default function Hero() {
  const { name, title, avatar, description } = heroConfig;
  const { triggerHaptic, isMobile } = useHapticFeedback();
  const { trackEvent } = useUmami();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [track, setTrack] = useState<SpotifyTrack | null>(null);
  const [previewPlaying, setPreviewPlaying] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
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

    if (previewUrl) {
      if (previewPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play().catch(() => {});
      }
      setPreviewPlaying((prev) => !prev);
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
  };

  return (
    <Container className="mx-auto max-w-5xl">
      <div className="mt-8 flex flex-col space-y-6">
        {/* Header Block (Image, Name, Title) */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          {/* Avatar */}
          <div className="relative w-fit shrink-0 rounded-[12px] border-[1.5px] border-black/10 bg-neutral-50 p-[5px] dark:border-white/10 dark:bg-zinc-900">
            <div className="relative h-[90px] w-[90px] overflow-hidden rounded-[8px] border border-black/10 bg-white dark:border-white/20 dark:bg-zinc-950">
              <Image
                alt={`${name} Profile Picture`}
                src={avatar}
                fill
                className="translate-y-[2px] scale-[1.08] object-cover"
                sizes="90px"
              />
            </div>
          </div>

          {/* Name & Title Container */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 font-serif text-4xl leading-tight font-normal">
              <span>Hi, I’m {name}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="size-[20px] shrink-0 translate-y-[2px] text-[#1d9bf0] select-none"
                aria-label="Verified"
              >
                <path
                  fill="currentColor"
                  d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
                ></path>
              </svg>
            </div>

            <div className="mt-1 text-xl">
              <span className="font-serif font-medium">{title}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-muted-foreground/90 max-w-2xl text-base leading-7 sm:text-lg">
          <span className="whitespace-pre-wrap">{description}</span>
        </div>

        {/* Spotify */}
        {spotifyConfig.enabled && (
          <div className="max-w-md space-y-2">
            <div className="bg-muted/10 grid gap-3 rounded-3xl border border-black/10 p-4 shadow-sm dark:border-white/10">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePreview}
                  aria-label={previewPlaying ? 'Pause preview' : 'Play preview'}
                  className="bg-background/80 hover:bg-background/100 flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 text-green-600 transition dark:border-white/10"
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

        {/* Social Links */}
        <div className="mt-8 mb-4 w-full">
          <h2 className="mb-2.5 text-[14px] text-zinc-500 dark:text-zinc-400">
            Here are my{' '}
            <span className="font-medium text-zinc-800 dark:text-zinc-200">
              socials
            </span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {/* Map through your dynamic social links */}
            {socialLinks.map((link) => {
              const isMailto = link.href.startsWith('mailto:');
              return (
                <div
                  key={link.name}
                  className="inline-block"
                  data-state="closed"
                  onClick={() => {
                    trackEvent({
                      name: 'external_link_click',
                      data: {
                        url: link.href,
                        text: link.name,
                        location: 'hero_social',
                      },
                    });
                  }}
                >
                  <SocialButton href={link.href} isMailto={isMailto}>
                    <span className="flex size-3.5 items-center justify-center [&>svg]:size-full">
                      {link.icon}
                    </span>
                    {link.name}
                  </SocialButton>
                </div>
              );
            })}

            {/* Resume Button mapped to your specific Next.js page */}
            <div className="inline-block">
              <SocialButton href="/resume">
                <CV className="size-3.5" />
                Resume
              </SocialButton>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
