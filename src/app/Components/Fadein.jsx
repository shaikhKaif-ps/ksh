export const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 1.4, ease: "easeInOut" },
  },
};
