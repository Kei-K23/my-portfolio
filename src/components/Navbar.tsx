"use client";
import SVG from "@/lib/SVG";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  listVisible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.3 },
  }),
  listHidden: { opacity: 0, scale: 0.5 },
};

const socialMedia = [
  <Link
    key={1}
    href={"https://github.com/Kei-K23"}
    target="_blank"
    title="Github"
  >
    {SVG.Github(30, 30)}
  </Link>,
  <Link
    key={2}
    href={
      "https://www.facebook.com/profile.php?id=100048899383372&mibextid=ZbWKwL"
    }
    target="_blank"
    title="Facebook"
  >
    {SVG.Facebook(30, 30)}
  </Link>,
  <Link
    key={3}
    href={"https://x.com/Kei_Katherin?s=09"}
    target="_blank"
    title="x-twitter"
  >
    {SVG.X_twitter(30, 30)}
  </Link>,
];

const Navbar = () => {
  return (
    <header className="nav-padding absolute w-full nav-bg">
      <nav className="flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
        >
          <Link
            href={"/"}
            className="primary-col text-2xl font-extrabold flex justify-center items-center gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              fill="green"
              width={30}
              height={30}
            >
              <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
            </svg>
            <span>Kei-K</span>
          </Link>
        </motion.div>
        <motion.ul
          variants={variants}
          initial="listHidden"
          animate="listVisible"
          className="flex justify-center items-center gap-4"
        >
          {socialMedia.map((link, index) => (
            <motion.li key={index} variants={variants} custom={index}>
              {link}
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Navbar;
