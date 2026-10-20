import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface CharacterProps {
  character: string;
  index: number;
  length: number;
  progress: MotionValue<number>;
  reducedMotion: boolean;
}

function Character({ character, index, length, progress, reducedMotion }: CharacterProps) {
  const start = index / length;
  const end = Math.min(1, start + 1 / Math.max(10, length * 0.33));
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span className="relative inline-block whitespace-pre" aria-hidden="true">
      <span className="invisible">{character}</span>
      <motion.span
        className="absolute inset-0"
        style={{ opacity: reducedMotion ? 1 : opacity }}
      >
        {character}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = !!useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });
  return (
    <p
      ref={ref}
      aria-label={text}
      className="mx-auto max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-mist"
    >
      {Array.from(text).map((character, index) => (
        <Character
          key={index}
          character={character}
          index={index}
          length={text.length}
          progress={scrollYProgress}
          reducedMotion={reduceMotion}
        />
      ))}
    </p>
  );
}
