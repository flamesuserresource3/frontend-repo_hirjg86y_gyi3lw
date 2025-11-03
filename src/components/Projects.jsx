import React from 'react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'Marketing site with Spline-driven hero and dynamic motion throughout.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Live analytics with websockets, theming, and snappy UX.',
    tags: ['Vite', 'Tailwind', 'Node'],
    link: '#',
  },
  {
    title: 'API Starter Kit',
    description: 'A robust FastAPI boilerplate with auth, testing, and docs.',
    tags: ['FastAPI', 'Python', 'MongoDB'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.12),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Selected work</h2>
          <a href="#contact" className="text-sm text-white/70 hover:text-white transition">Let’s build something →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-transparent to-white/5" />
              <div className="p-6">
                <div className="h-32 rounded-lg bg-gradient-to-br from-white/10 to-white/0 border border-white/10" />
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-white/80">{t}</span>
                  ))}
                </div>
                <div className="mt-6">
                  <a href={p.link} className="text-sm text-emerald-300 hover:text-emerald-200">View project</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
