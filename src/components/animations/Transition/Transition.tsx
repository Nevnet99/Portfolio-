import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, filter: "blur(30px)" },
  enter: { opacity: 1, filter: "blur(0px)" },
};

function Transition({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{
          damping: 30,
          duration: 1,
          ease: [0.5, 0, 0.1, 1],
          restDelta: 0.001,
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default Transition;
