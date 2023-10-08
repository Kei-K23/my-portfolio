import Link from "next/link";

const Navbar = () => {
  return (
    <header className="page-padding absolute w-full nav-bg">
      <nav className="flex justify-between items-center">
        <Link href={"/"} className="primary-col text-2xl font-extrabold">
          Kei-K
        </Link>
        <ul className="flex justify-between items-center gap-6">
          <li>
            <Link href={"#about"} className="font-bold underline">
              0.<span className="secondary-col">About</span>
            </Link>
          </li>
          <li>
            <Link href={"#experience"} className="font-bold underline">
              1.<span className="secondary-col">Experience</span>
            </Link>
          </li>
          <li>
            <Link href={"#projects"} className="font-bold underline">
              2.<span className="secondary-col">Projects</span>
            </Link>
          </li>
          <li>
            <Link href={"#contact"} className="font-bold underline">
              3.<span className="secondary-col">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
