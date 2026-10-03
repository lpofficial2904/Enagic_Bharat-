export const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

export const pageTransition = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ...spring, duration: 0.7, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { ...spring, duration: 0.55, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.14,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...spring, duration: 0.7, ease: "easeOut" },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...spring, duration: 0.7, ease: "easeOut" },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...spring, duration: 0.75, ease: "easeOut" },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...spring, duration: 0.75, ease: "easeOut" },
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...spring, duration: 0.6, ease: "easeOut" },
  },
};

export const cardHover = {
  whileHover: {
    scale: 1.03,
    boxShadow: "0px 24px 68px rgba(0, 0, 0, 0.16)",
  },
  transition: {
    duration: 0.25,
    ease: "easeOut",
  },
};

export const buttonHover = {
  whileHover: {
    scale: 1.04,
    boxShadow: "0px 0px 24px rgba(255, 255, 255, 0.12)",
  },
  transition: {
    duration: 0.22,
    ease: "easeOut",
  },
};

export const floating = {
  animate: {
    y: [0, -8, 0],
    x: [0, 8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
