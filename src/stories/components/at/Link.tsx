import React, { ElementType } from "react";

// type LinkProps = {
//   current?: boolean;
//   href?: string;
//   label: string;
//   onClick?: () => void;
// };

interface LinkProps {
  current?: boolean;
  href?: string;
  label: string;
  onClick?: () => void;
}

export const Link: React.FunctionComponent<LinkProps> = ({
  current = false,
  href = "",
  label = "",
  onClick = () => {},
  ...props
}: LinkProps) => {
  const ElementType: ElementType = href ? "a" : "span";

  return (
    <ElementType
      href={href || undefined}
      target={href ? "_blank" : undefined}
      aria-current={current ? "page" : undefined}
      onClick={onClick}
      {...props}
    >
      {label}
    </ElementType>
  );
};
