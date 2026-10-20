import { ArrowUpRight } from 'lucide-react';
import { site } from '../data/site';

export function ContactFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/15 bg-ink px-5 pb-8 pt-20 text-mist sm:px-8 md:px-10 md:pt-28">
      <div className="mx-auto max-w-[1530px]">
        <div className="mb-16 flex flex-wrap items-start justify-between gap-8 sm:mb-24">
          <div>
            <p className="mb-4 text-sm font-light uppercase tracking-[0.2em] text-mist/60">Let's create something</p>
            <h2 className="hero-heading text-[clamp(3.6rem,10vw,9rem)] font-black uppercase leading-[0.85] tracking-tight">Get in touch.</h2>
          </div>
          {site.email ? (
            <a href={`mailto:${site.email}`} className="contact-button inline-flex items-center gap-3 rounded-full px-9 py-4 text-sm font-medium uppercase tracking-widest">Send an email <ArrowUpRight size={19} /></a>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs font-light uppercase tracking-widest text-mist/60 sm:text-sm">
          <a href="#home" className="transition-colors hover:text-white">Jack — 3D Creator</a>
          <span>© {new Date().getFullYear()} — All rights reserved</span>
          <a href="#home" className="transition-colors hover:text-white">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
