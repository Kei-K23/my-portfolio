"use client";
import SVG from "@/lib/SVG";
import { imgVariants, isMobileView } from "@/lib/motion";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = {
  name: string;
  webURL: string;
  githubURL: string;
  languageUsage: Array<string>;
  description: string;
  img: string;
};

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const ProjectSlide = ({
  name,
  description,
  githubURL,
  img,
  languageUsage,
  webURL,
}: Props) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  useEffect(() => {
    function handelResize() {
      setIsMobile(isMobileView() as boolean);
    }
    window.addEventListener("resize", handelResize);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  const isY = isMobile ? {} : { y };

  return (
    <div className="tran-wrapper min-h-screen">
      <div
        className="div-padding flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-12"
        ref={ref}
      >
        <motion.div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="w-full lg:w-[45%] relative shadow-lg shadow-neutral-700"
        >
          <div
            className={`${
              isHover ? "flex" : "hidden"
            } absolute w-full h-full justify-center items-center layer-bg`}
          >
            <Link
              href={webURL}
              target="_blank"
              className="flex justify-center items-center gap-4 transition-colors py-2 px-4 bg-green-700 rounded-3xl border-2 border-green-700 hover:text-green-700 hover:bg-transparent"
            >
              {SVG.Web(20, 20)} <span> Live view</span>
            </Link>
          </div>

          <Image
            src={img}
            alt={name}
            width={100}
            height={100}
            className="w-full h-[250px] sm:h-[350px] md:h-[400px]"
          />
        </motion.div>
        <motion.div className="w-full lg:w-[40%]" style={isY}>
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-4xl font-bold mb-2 text-green-700">
              {name}
            </h2>
            <div className="flex items-center gap-6">
              <Link href={webURL} target="_blank" title="view live website">
                {SVG.Web(30, 30, "green")}
              </Link>
              <Link
                href={githubURL}
                target="_blank"
                title="view the source code"
              >
                {SVG.Github(30, 30, "green")}
              </Link>
            </div>
          </div>
          <p className="text-lg lg:text-2xl mt-6">{description}</p>
          <ul className="mt-5 flex items-center gap-4 flex-wrap">
            {languageUsage.map((l) => (
              <li
                key={l}
                className="transition-colors py-2 px-4 bg-green-700 rounded-3xl border-2 border-green-700 hover:text-green-700 hover:bg-transparent"
              >
                {l}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSlide;
