import { contactLists } from "@/lib/contactLists";
import { AtSign } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="select-none py-14 px-10 tracking-wider ">
      <h2 className="text-4xl font-bold mb-2">Contact</h2>
      <h3 className="text-xl font-bold">
        <span className="text-sky-900">console</span>.log(&quot;Contact Me
        <span className="text-sky-900 font-extrabold"> -_-</span> !&quot;)
      </h3>
      <h3 className="flex items-center gap-2 mt-3">
        <AtSign /> keiksl2301@gmail.com
      </h3>
      <h3 className="mt-4 mb-2">Social Links</h3>
      <ul className="flex">
        {contactLists.map((c) => (
          <li key={c.name} className="mb-4">
            <Link href={c.link} target="_blank" className="flex gap-3">
              {c.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
