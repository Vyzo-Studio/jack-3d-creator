import { ArrowUpRight } from 'lucide-react';

export function ContactButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`contact-button relative z-30 inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
    >
      Contact Me <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.75} />
    </a>
  );
}
