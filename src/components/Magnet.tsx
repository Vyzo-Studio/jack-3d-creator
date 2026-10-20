import { useEffect, useRef } from 'react';
import type { PropsWithChildren } from 'react';
import { useReducedMotion } from 'framer-motion';

interface MagnetProps extends PropsWithChildren {
  padding?: number;
  strength?: number;
  className?: string;
}

/** Pointer attraction, including the specified area *outside* the visible element. */
export function Magnet({ children, padding = 150, strength = 3, className = '' }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = !!useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;
    let active = false;
    let frame = 0;
    let cursorX = -99999;
    let cursorY = -99999;

    function update() {
      if (!node) return;
      const rect = node.getBoundingClientRect();
      // Remove the previous magnet transform when obtaining the true element center.
      const baseX = rect.left + rect.width / 2 - (Number(node.dataset.magnetX) || 0);
      const baseY = rect.top + rect.height / 2 - (Number(node.dataset.magnetY) || 0);
      const deltaX = cursorX - baseX;
      const deltaY = cursorY - baseY;
      const inside = Math.abs(deltaX) <= rect.width / 2 + padding && Math.abs(deltaY) <= rect.height / 2 + padding;
      const x = inside ? deltaX / strength : 0;
      const y = inside ? deltaY / strength : 0;
      if (active !== inside) {
        node.style.transition = inside ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out';
        active = inside;
      }
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      node.dataset.magnetX = String(x);
      node.dataset.magnetY = String(y);
      frame = 0;
    }
    function onPointerMove(event: PointerEvent) {
      if (event.pointerType === 'touch') return;
      cursorX = event.clientX;
      cursorY = event.clientY;
      if (!frame) frame = requestAnimationFrame(update);
    }
    function reset() {
      cursorX = -99999;
      cursorY = -99999;
      if (!frame) frame = requestAnimationFrame(update);
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('blur', reset);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('blur', reset);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [padding, strength, reducedMotion]);

  return <div ref={ref} className={className} style={{ willChange: reducedMotion ? 'auto' : 'transform', transition: 'transform 0.6s ease-in-out' }}>{children}</div>;
}
