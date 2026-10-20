import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { RemoteImage } from '../components/RemoteImage';
import { ContactButton } from '../components/ContactButton';
import { heroPortrait } from '../data/assets';
import { site } from '../data/site';

const navItems = [
  { text: 'About', href: '#about' },
  { text: 'Price', href: '#services' },
  { text: 'Projects', href: '#projects' },
  { text: 'Contact', href: '#contact' },
];

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[620px] h-[100svh] max-h-[1100px] flex-col overflow-x-clip bg-ink" aria-label="Introduction">
      <FadeIn as="nav" x={0} y={-20} delay={0} className="relative z-30 flex w-full items-center justify-between gap-3 px-6 pt-6 sm:gap-5 md:px-10 md:pt-8" >
        {navItems.map(({text,href}) => (
          <a key={href} href={href} className="text-xs font-medium uppercase tracking-wider text-mist transition-opacity duration-200 hover:opacity-70 focus-visible:opacity-70 sm:text-sm md:text-lg lg:text-[1.4rem]">{text}</a>
        ))}
      </FadeIn>

      <FadeIn as="h1" delay={0.15} y={40} className="hero-heading pointer-events-none relative z-0 mt-6 w-full select-none overflow-hidden whitespace-nowrap px-[1.25vw] text-center text-[14.5vw] font-black uppercase leading-none tracking-[-0.052em] sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]">
        {site.headline}
      </FadeIn>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center sm:items-end" aria-hidden="true">
        <FadeIn delay={0.6} y={30} className="pointer-events-auto relative aspect-[4/5] w-[280px] shrink-0 sm:w-[360px] md:w-[440px] lg:w-[520px]">
          <Magnet className="h-full" padding={150} strength={3}>
            <RemoteImage
              src={heroPortrait}
              alt="3D portrait of Jack"
              fallbackLabel="3D Creator"
              className="hero-portrait h-full w-full object-contain object-bottom"
              decoding="async"
              fetchPriority="high"
            />
          </Magnet>
        </FadeIn>
      </div>

      <div className="pointer-events-none relative z-20 mt-auto flex w-full items-end justify-between gap-4 px-5 pb-7 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20} className="pointer-events-auto max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p className="text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-mist">{site.description}</p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="pointer-events-auto shrink-0">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
