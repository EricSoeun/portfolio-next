import { motion } from "framer-motion";

const STAIR_ANIMATION = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};
export const Stairs = () => {
  // CALCULATE REVERSE INDEX
  const reverseIndex = (index: number) => {
    const totalStairs = 3;

    return totalStairs - index - 1;
  };

  return (
    <>
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          variants={STAIR_ANIMATION}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};
