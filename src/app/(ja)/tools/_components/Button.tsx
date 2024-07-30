import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  isAnchor?: boolean;
  href?: string;
  onClick?: () => void;
};

export function Button({
  children,
  isAnchor = false,
  href = "",
  ...props
}: ButtonProps) {
  return isAnchor ? (
    <a
      className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      href={href}
      {...props}
    >
      {children}
    </a>
  ) : (
    <button
      className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      {...props}
    >
      {children}
    </button>
  );
}
