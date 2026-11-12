import { motion, type MotionValue } from 'framer-motion';
import { sectionWrapperClass, type SectionProps } from './types';

interface WelcomeSectionProps extends SectionProps {
  handleScrollPointerMove: (e: React.PointerEvent<HTMLDivElement>) => void;
  handleScrollPointerLeave: () => void;
  arrowState: { scale: number; rotate: number };
  scrollSpringX: MotionValue<number>;
  scrollSpringY: MotionValue<number>;
}

// 1. Welcome 區塊
export const WelcomeSection = ({ isHorizontal, t, handleScrollPointerMove, handleScrollPointerLeave, arrowState, scrollSpringX, scrollSpringY }: WelcomeSectionProps) => (
  <div className={sectionWrapperClass(isHorizontal)}>
    <section className="relative z-1 min-h-screen lg:min-h-0 lg:h-screen w-full flex flex-col justify-center p-6 pt-20 pb-45 md:p-12 md:pt-12 lg:p-[clamp(2rem,5vh,6rem)] lg:pt-[clamp(2rem,5vh,6rem)] overflow-hidden snap-center">
      <div className="content-container">
        <div className="hero-title">
          {t.welcome.title}
        </div>
        <div className="text-[24px] lg:text-[clamp(20px,4vh,38px)] font-bold leading-(--lh-sm) text-white/80 max-w-300"
          dangerouslySetInnerHTML={{ __html: t.welcome.desc }}
        />
      </div>

      {/* Scroll 浮動圖示 (支援橫向轉向) */}
      <motion.div
        onPointerMove={handleScrollPointerMove}
        onPointerLeave={handleScrollPointerLeave}
        animate={{ scale: arrowState.scale, rotate: arrowState.rotate }}
        transition={{ rotate: { duration: 0.4 }, scale: { duration: 0.2 } }}
        style={{ x: scrollSpringX, y: scrollSpringY }}
        className="absolute right-7.5 bottom-30 min-[744px]:right-16.25 min-[744px]:bottom-15 w-full max-w-25 min-[744px]:max-w-40 aspect-square bg-[url('/assets/scroll_arrow.png')] bg-cover bg-center bg-no-repeat text-[0px] before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[url('/assets/scroll.png')] before:bg-cover before:bg-center before:bg-no-repeat before:animate-[spin_8s_linear_infinite] cursor-pointer"
      >
        SCROLL DOWN
      </motion.div>
    </section>
  </div>
);
