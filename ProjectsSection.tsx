import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FadeIn } from '../components/FadeIn';
import { RemoteImage } from '../components/RemoteImage';
import { projects } from '../data/assets';
import type { Project } from '../data/assets';
import { ArrowUpRight } from 'lucide-react';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const targetScale = 1 - (projects.length - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const name = project.name;
  return (
    <motion.article
      ref={ref}
      style={{ scale: reduceMotion ? 1 : scale, top: `calc(6rem + ${index * 28}px)` }}
      className="relative mb-8 overflow-hidden rounded-[40px] border-2 border-mist bg-ink p-4 text-mist shadow-[0_15px_55px_#0000007d] sm:mb-10 sm:rounded-[50px] sm:p-6 md:sticky md:mb-14 md:min-h-[70vh] md:rounded-[60px] md:p-8"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 md:mb-8">
        <div className="flex min-w-0 items-end gap-4 sm:gap-8">
          <span className="shrink-0 text-[clamp(3.5rem,9vw,140px)] font-black leading-[0.8] tracking-tight">{project.id}</span>
          <div className="min-w-0 pb-1">
            <span className="block text-xs font-light uppercase tracking-[0.3em] text-mist/60 sm:text-sm">{project.category}</span>
            <h3 className="max-w-[530px] text-[clamp(1.1rem,3vw,2.8rem)] font-semibold uppercase leading-tight tracking-tight">{name}</h3>
          </div>
        </div>
        {project.url ? (
          <a className="project-link inline-flex items-center gap-2 rounded-full border-2 border-mist px-6 py-2.5 text-xs font-medium uppercase tracking-widest transition-colors hover:bg-mist/10 sm:px-10 sm:py-3.5 sm:text-base" href={project.url} target="_blank" rel="noopener noreferrer">Live Project <ArrowUpRight size={18} aria-hidden="true" /></a>
        ) : (
          <span className="project-link inline-flex items-center rounded-full border-2 border-mist px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-mist/65 sm:px-10 sm:py-3.5 sm:text-base" title="Project link not provided">Live Project</span>
        )}
      </div>
      <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-3 sm:gap-4">
        <div className="grid grid-rows-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-3 sm:gap-4">
          {project.images.slice(0, 2).map((img, pos) => (
            <div key={img} className={`project-image min-h-0 overflow-hidden rounded-[22px] bg-[#202027] sm:rounded-[40px] md:rounded-[50px] ${pos === 0 ? 'h-[clamp(130px,16vw,230px)]' : 'h-[clamp(160px,22vw,340px)]'}`}>
              <RemoteImage src={img} alt={`${name} artwork ${pos + 1}`} fallbackLabel={name} className="h-full w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <div className="project-image min-h-full overflow-hidden rounded-[22px] bg-[#202027] sm:rounded-[40px] md:rounded-[50px]">
          <RemoteImage src={project.images[2]} alt={`${name} project visual`} fallbackLabel={name} className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-ink px-5 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pb-32 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-40 md:pt-32">
      <FadeIn as="h2" className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-24 md:mb-32">Project</FadeIn>
      <div className="mx-auto max-w-[1530px]">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>
    </section>
  );
}
