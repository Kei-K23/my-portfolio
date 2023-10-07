"use client";

// Photos from https://citizenofnowhe.re/lines-of-the-city
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

type contentType = {
  jsx: JSX.Element;
  position: {
    pos1: string;
    pos2: string;
  };
};

type ContentsType = {
  contents: contentType[];
};

const Contents: ContentsType = {
  contents: [
    {
      jsx: <About key={1} />,
      position: {
        pos1: "left-52",
        pos2: "right-52",
      },
    },
    {
      jsx: <Experience key={2} />,
      position: {
        pos1: "right-52",
        pos2: "left-52",
      },
    },
    {
      jsx: <Project />,
      position: {
        pos1: "left-52",
        pos2: "right-52",
      },
    },
    {
      jsx: <About key={1} />,
      position: {
        pos1: "right-52",
        pos2: "left-52",
      },
    },
    {
      jsx: <About key={1} />,
      position: {
        pos1: "left-52",
        pos2: "right-52",
      },
    },
  ],
};

function Content({
  id,
  children,
  position,
}: {
  id: number;
  children: React.ReactNode;
  position: {
    pos1: string;
    pos2: string;
  };
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="tran-wrapper">
      <div className={`tran-div ${position.pos1}`} ref={ref}>
        {children}
      </div>
      <motion.h3 className={`indicator ${position.pos2}`} style={{ y }}>
        #0<span className="secondary-col ">{`${id}`}</span>
      </motion.h3>
    </section>
  );
}

export default function PageSections() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {Contents.contents.map((div, index) => (
        <Content key={index} id={index} position={div.position}>
          {div.jsx}
        </Content>
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
