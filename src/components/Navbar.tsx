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
  <Link key={1} href={"/"} target="_blank" title="Github">
    {SVG.Github(30, 30)}
  </Link>,
  <Link key={2} href={"/"} target="_blank" title="Facebook">
    {SVG.Facebook(30, 30)}
  </Link>,
  <Link key={3} href={"/"} target="_blank" title="x-twitter">
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
          <Link href={"/"} className="primary-col text-2xl font-extrabold">
            Kei-K
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
