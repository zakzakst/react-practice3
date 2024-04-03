"use client";
import {
  ReactNode,
  // HTMLAttributeAnchorTarget,
  CSSProperties,
  ElementType,
} from "react";
import {
  // PressEvent,
  // HoverEvent,
  HTMLAttributeAnchorTarget, // reactのを上手く使えなかったので自分で直接記述
  ReferrerPolicy,
} from "./utils";

// export type LinkRenderProps = {
//   isCurrent: boolean;
//   isHovered: boolean;
//   isPressed: boolean;
//   isFocused: boolean;
//   isFocusVisible: boolean;
//   isDisabled: boolean;
// };

export type LinkProps = {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  isDisabled?: boolean;
  // onPress: (e: PressEvent) => void;
  // onPressStart: (e: PressEvent) => void;
  // onPressEnd: (e: PressEvent) => void;
  // onPressChange: (isPressed: boolean) => void;
  // onPressUp: (e: PressEvent) => void;
  autoFocus?: boolean;
  // onFocus: (e: FocusEvent) => void;
  // onBlur: (e: FocusEvent) => void;
  // onFocusChange: (isFocused: boolean) => void;
  // onKeyDown: (e: KeyboardEvent) => void;
  // onKeyUp: (e: KeyboardEvent) => void;
  rel?: string;
  download?: string | boolean;
  ping?: string;
  referrerPolicy?: ReferrerPolicy;
  // onHoverStart: (e: HoverEvent) => void;
  // onHoverEnd: (e: HoverEvent) => void;
  // onHoverChange: (isHovering: boolean) => void;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Link: React.FunctionComponent<LinkProps> = ({
  href,
  target,
  isDisabled,
  autoFocus,
  rel,
  download,
  ping,
  referrerPolicy,
  children,
  style,
}) => {
  const ElementType: ElementType = href ? "a" : "span";

  return (
    <ElementType
      href={href || undefined}
      target={href && target ? target : undefined}
      data-disabled={isDisabled || undefined}
    >
      {children}
    </ElementType>
  );
};

export default Link;
