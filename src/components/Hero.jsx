import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient overlay to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/70 bg-white/10 border border-white/10 rounded-full px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance work
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight">
            Building playful, modern web experiences.
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            I’m a full‑stack web developer focused on crafting responsive interfaces, fast backends, and delightful interactions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
              See my work
            </a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-white/20 text-white hover:border-white/40 transition">
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-white/70">
            <div>
              <p className="text-sm">Stack</p>
              <p className="text-xs">React • TypeScript • Node • FastAPI • Tailwind</p>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <div>
              <p className="text-sm">Focus</p>
              <p className="text-xs">UI engineering, performance, 3D/interactive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
