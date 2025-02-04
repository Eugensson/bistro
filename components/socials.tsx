import Link from "next/link";

import { socialLinks } from "@/lib/sample-data";

export const Socials = () => {
  return (
    <ul className="flex items-center gap-x-3">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <li
          key={label}
          className="size-9 flex justify-center items-center border-2 border-white/20 rounded-full  hover:text-accent hover:border-accent transition-colors duration-300 cursor-pointer"
        >
          <Link href={href} target="_blank" rel="noreferrer noopener">
            <Icon />
          </Link>
        </li>
      ))}
    </ul>
  );
};
