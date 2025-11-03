import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
  }

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
        <p className="mt-3 text-white/80">
          Have a project in mind or want to collaborate? Send a quick note and I’ll reply within 1–2 business days.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-white/70">Name</label>
              <input id="name" required className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" placeholder="Jane Doe" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-white/70">Email</label>
              <input id="email" type="email" required className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" placeholder="jane@email.com" />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-white/70">Message</label>
            <textarea id="message" rows={5} required className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" placeholder="Tell me about your project..." />
          </div>
          <div className="flex items-center justify-between gap-4">
            <button type="submit" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
              Send message
            </button>
            {status && <p className="text-sm text-emerald-300">{status}</p>}
          </div>
        </form>

        <div className="mt-10 text-sm text-white/70 flex flex-wrap items-center gap-4">
          <a href="mailto:youremail@example.com" className="hover:text-white">youremail@example.com</a>
          <span className="h-4 w-px bg-white/20" />
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <span className="h-4 w-px bg-white/20" />
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
