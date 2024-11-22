import { motion } from "framer-motion";

const STAIR_ANIMATION = {
  initial: {
    x: "0%", // Volet commence à gauche
  },
  animate: {
    x: "100%", // Volet coulisse vers la droite
  },
  exit: {
    x: "100%", // Resté hors de la vue
  },
};

export const Stairs = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Volet animé */}
      <motion.div
        variants={STAIR_ANIMATION}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 1.2, // Durée totale de l'animation
          ease: "easeInOut",
        }}
        className="absolute inset-y-0 left-0 bg-beige z-50 h-full w-full"
        style={{
          clipPath: "inset(0 0 0 0)", // Masque qui suit la largeur du volet
        }}
      />
    </div>
  );
};
