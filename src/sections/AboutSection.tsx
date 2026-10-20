import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { RemoteImage } from '../components/RemoteImage';
import { decorImages } from '../data/assets';
import { site } from '../data/site';

const decorations = [
  { src: decorImages.moon, label: '3D moon', pos: 'top-[4%] left-[1%] sm:left-[2%] md:left-[4%]', size: 'w-[120px] sm:w-[160px] md:w-[210px]', delay: 0.1, x: -80 },
  { src: decorImages.object, label: 'Abstract 3D sculpture', pos: 'bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]', size: 'w-[100px] sm:w-[140px] md:w-[180px]', delay: 0.25, x: -80 },
  { src: decorImages.lego, label: '3D building block', pos: 'top-[4%] right-[1%] sm:right-[2%] md:right-[4%]', size: 'w-[120px] sm:w-[160px] md:w-[210px]', delay: 0.15, x: 80 },
  { src: decorImages.group, label: '3D design shapes', pos: 'bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]', size: 'w-[130px] sm:w-[170px] md:w-[220px]', delay: 0.3, x: 80 },
];

export function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-5 py-28 sm:px-8 md:px-10 md:py-32">
      {decorations.map(({ src, label, pos, size, delay, x }) => (
        <FadeIn key={label} delay={delay} x={x} y={0} duration={0.9} className={`pointer-events-none absolute z-0 aspect-square ${pos} ${size}`}>
          <RemoteImage src={src} alt="" fallbackLabel="" className="h-full w-full object-contain" loading="lazy" />
        </FadeIn>
      ))}
      <div className="relative z-10 flex w-full flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn as="h2" delay={0} y={40} className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">About me</FadeIn>
        <AnimatedText text={site.about} />
        <div className="pt-6 sm:pt-8 md:pt-12"><ContactButton /></div>
      </div>
    </section>
  );
}
