"use client";
import classNames from "classnames";
import { usePathname } from "next/navigation";

type NavBarLink = {
  href: string;
  text: string;
};

export default function Navbar() {
  const pathname = usePathname();

  const links: NavBarLink[] = [
    {
      href: "/tools/form-input",
      text: "フォーム入力ブックマークレット",
    },
    {
      href: "/tools/make-bookmarklet",
      text: "ブックマークレット作成",
    },
  ];

  const linkClassName = {
    default:
      "border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6",
    current:
      "text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6",
  };

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className={classNames(
              pathname === link.href
                ? linkClassName.current
                : linkClassName.default
            )}
          >
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
