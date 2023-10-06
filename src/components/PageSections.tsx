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

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="tran-wrapper">
      {/* <div ref={ref}>
        <img src={`/${id}.jpg`} alt="A London skyscraper" />
      </div> */}
      <div className="tran-div" ref={ref}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet a
          recusandae iste, maiores quos sit est rerum sint ipsum itaque
          doloribus blanditiis, ad quis quod modi provident mollitia, rem autem.
          Odit, quam non dolorum nisi culpa dignissimos eum eligendi minima fuga
          iure. Eligendi magni quasi odit fugiat! Voluptate, saepe laboriosam.
        </p>
      </div>
      <motion.h3 className="indicator" style={{ y }}>{`#00${id}`}</motion.h3>
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
      {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image} id={image} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
