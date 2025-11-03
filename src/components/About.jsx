import React from 'react';

export default function About() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">About me</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I’m a developer who loves blending design and engineering to build experiences that feel fast, thoughtful, and fun. Over the years I’ve worked across the stack—from polished frontends to scalable APIs—always with attention to detail and accessibility.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              When I’m not coding, I explore creative coding, motion, and 3D on the web. I care about maintainable code, clear communication, and shipping work that delights.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                <p className="text-white/60">Experience</p>
                <p className="mt-1 font-semibold">5+ years</p>
              </div>
              <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                <p className="text-white/60">Specialty</p>
                <p className="mt-1 font-semibold">Frontend & DX</p>
              </div>
              <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                <p className="text-white/60">Freelance</p>
                <p className="mt-1 font-semibold">Open to work</p>
              </div>
              <div className="rounded-lg border border-white/10 p-4 bg-white/5">
                <p className="text-white/60">Location</p>
                <p className="mt-1 font-semibold">Remote-first</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js',
              'FastAPI', 'Python', 'Tailwind', 'Framer Motion',
            ].map((skill) => (
              <div key={skill} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
