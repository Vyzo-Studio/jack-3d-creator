import { useEffect, useRef } from 'react';
import { marqueeImages } from '../data/assets';
import { RemoteImage } from '../components/RemoteImage';

function TileRow({ images, row }: { images: string[]; row: number }) {
  return (
    <div className="marquee-track" data-direction={row} aria-hidden="true">
      {Array.from({ length: 3 }, (_, iteration) => images.map((src, index) => (
        <div className="marquee-tile rounded-2xl" key={`${iteration}-${index}`}>
          <RemoteImage src={src} alt="" fallbackLabel={`Visual ${String(index + 1).padStart(2, '0')}`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
        </div>
      )))}
    </div>
  );
}

export function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const tracks = Array.from(section.querySelectorAll<HTMLElement>('.marquee-track'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    function refresh() {
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = prefersReducedMotion.matches ? 200 : (window.scrollY - sectionTop + window.innerHeight) * .3;
      const shift = offset - 200;
      tracks.forEach((track, i) => {
        track.style.transform = `translate3d(calc(-33.333333% ${i === 0 ? '+' : '-'} ${shift}px), 0, 0)`;
      });
      frame = 0;
    }
    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(refresh);
    }
    refresh();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    prefersReducedMotion.addEventListener('change', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      prefersReducedMotion.removeEventListener('change', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} id="work-preview" className="overflow-hidden bg-ink pb-10 pt-24 sm:pt-32 md:pt-40" aria-label="A selection of visual work">
      <div className="space-y-3">
        <TileRow images={marqueeImages.slice(0, 11)} row={1} />
        <TileRow images={marqueeImages.slice(11)} row={2} />
      </div>
    </section>
  );
}
