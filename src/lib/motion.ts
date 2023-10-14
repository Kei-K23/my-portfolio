export const textVariants = {
  hiddenFromLeft: {
    x: -500,
    opacity: 0,
  },
  hiddenFromRight: {
    x: 500,
    opacity: 0,
  },
  fadeIn: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.5 },
  },
  listFadeIn: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.3 },
  }),
};

export const imgVariants = {
  hidden: {
    opacity: 0,
  },
  fadeIn: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
