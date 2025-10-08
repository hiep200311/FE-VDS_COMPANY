import {
  motion,
  useAnimation,
  type Variants,
  type MotionProps,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

interface FadeOnVisibilityProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

const FadeOnVisibility: React.FC<FadeOnVisibilityProps> = ({
  children,
  className = "",
  ...rest
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeVariants}
      initial="hidden"
      animate={controls}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default FadeOnVisibility;
