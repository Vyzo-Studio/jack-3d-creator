import { FadeIn } from '../components/FadeIn';
import { services } from '../data/site';

export function ServicesSection() {
  return (
    <section id="services" className="relative z-0 rounded-t-[40px] bg-white px-5 py-20 text-ink sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn as="h2" className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">Services</FadeIn>
      <div className="mx-auto max-w-5xl border-t border-black/15">
        {services.map((service, index) => (
          <FadeIn key={service.number} delay={index * 0.1} className="grid grid-cols-[85px_minmax(0,1fr)] gap-4 border-b border-black/15 py-8 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-8 sm:py-10 md:grid-cols-[210px_minmax(0,1fr)] md:gap-12 md:py-12">
            <span className="text-[clamp(3rem,10vw,140px)] font-black leading-[0.9] tracking-tight" aria-hidden="true">{service.number}</span>
            <div className="pt-0.5 sm:pt-2 md:pt-4">
              <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight tracking-wide">{service.name}</h3>
              <p className="mt-3 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed text-black/60 sm:mt-5">{service.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
