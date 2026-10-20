import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties, PropsWithChildren } from 'react';
import { useMemo } from 'react';

type AllowedTag = 'div' | 'nav' | 'h1' | 'h2' | 'p' | 'span';
interface FadeInProps extends PropsWithChildren {
  as?: AllowedTag;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}

export function FadeIn({
  as = 'div', delay = 0, duration = 0.7, x = 0, y = 30, children, className, style,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  // motion.create gives headings, paragraphs and nav elements their proper HTML semantics.
  const MotionElement = useMemo(() => motion.create(as), [as]);
  return (
    <MotionElement
      className={className}
      style={style}
      initial={reduceMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay: reduceMotion ? 0 : delay, duration: reduceMotion ? 0 : duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionElement>
  );
}
