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
    transition: { duration: 1, staggerChildren: 0.1 },
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

export function isMobileView() {
  const wWidth = window.innerWidth;
  if (wWidth < 1024) {
    return true;
  } else if (wWidth > 1024) {
    return false;
  }
}
