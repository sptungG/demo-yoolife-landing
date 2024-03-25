import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

type TCounterProps = {
  from?: number;
  value: number;
  direction?: 'up' | 'down';
  overflow?: number;
  className?: string;
};

const Counter = ({
  from = 0,
  value,
  overflow,
  direction = 'up',
  className,
}: TCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? value : from);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value);
    } else {
      motionValue.set(from);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          if (typeof overflow === 'number' && latest > overflow) {
            ref.current.textContent =
              Intl.NumberFormat('de-DE').format(overflow) + '+';
          } else {
            ref.current.textContent = Intl.NumberFormat('de-DE').format(
              latest.toFixed(0),
            );
          }
        }
      }),
    [springValue],
  );

  return <div className={className} ref={ref} />;
};

export default Counter;
