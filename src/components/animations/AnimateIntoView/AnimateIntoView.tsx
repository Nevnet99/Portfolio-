import { motion, MotionProps, MotionStyle, useInView } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface Props extends MotionProps {
  readonly amount?: "some" | "all" | number;
  readonly children?: ReactNode;
  readonly className?: string;
  readonly delay?: number;
  readonly inViewVariant?: Record<string, unknown>;
  readonly margin?: string;
  readonly notInViewVariant?: Record<string, unknown>;
  readonly once?: boolean;
  readonly style?: MotionStyle;
}

const AnimateIntoView: FC<Props> = ({
  amount,
  children,
  className,
  delay,
  inViewVariant,
  margin,
  notInViewVariant,
  once,
  style,
  ...animationProps
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount, margin, once });

  return (
    <motion.div
      animate={isInView ? "inView" : "notInView"}
      className={className}
      initial="notInView"
      ref={ref}
      style={style}
      transition={{
        damping: 30,
        delay,
        duration: 1.6,
        ease: [0.5, 0, 0.1, 1],
        restDelta: 0.001,
        stiffness: 100,
      }}
      variants={{
        inView: {
          opacity: 1,
          ...inViewVariant,
        },
        notInView: {
          opacity: 0,
          ...notInViewVariant,
        },
      }}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
};

AnimateIntoView.defaultProps = {
  amount: "some",
  children: undefined,
  className: "",
  delay: 0,
  inViewVariant: {},
  notInViewVariant: {},
  margin: undefined,
  style: undefined,
  once: true,
};

export default AnimateIntoView;
