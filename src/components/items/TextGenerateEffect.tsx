import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { cn } from 'src/common/utils';

type TTextGenerateEffectProps = {
  words: string;
  className?: string;
  classNameWrapper?: string;
};

const TextGenerateEffect = ({
  words,
  className,
  classNameWrapper,
}: TTextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
      },
      {
        duration: 0.5,
        delay: stagger(0.05),
      },
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn('opacity-0', className)}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return <div className={classNameWrapper}>{renderWords()}</div>;
};

export default TextGenerateEffect;
