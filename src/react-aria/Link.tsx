"use client";
import {
  type ReactNode,
  type HTMLAttributeAnchorTarget,
  type CSSProperties,
} from "react";
import { PressEvent, HoverEvent, ReferrerPolicy } from "./utils";

export type LinkRenderProps = {
  isCurrent: boolean;
  isHovered: boolean;
  isPressed: boolean;
  isFocused: boolean;
  isFocusVisible: boolean;
  isDisabled: boolean;
};

export type LinkProps = {
  href: string;
  target: HTMLAttributeAnchorTarget;
  isDisabled: boolean;
  onPress: (e: PressEvent) => void;
  onPressStart: (e: PressEvent) => void;
  onPressEnd: (e: PressEvent) => void;
  onPressChange: (isPressed: boolean) => void;
  onPressUp: (e: PressEvent) => void;
  autoFocus: boolean;
  onFocus: (e: FocusEvent) => void;
  onBlur: (e: FocusEvent) => void;
  onFocusChange: (isFocused: boolean) => void;
  onKeyDown: (e: KeyboardEvent) => void;
  onKeyUp: (e: KeyboardEvent) => void;
  rel: string;
  download: string | boolean;
  ping: string;
  referrerPolicy: ReferrerPolicy;
  onHoverStart: (e: HoverEvent) => void;
  onHoverEnd: (e: HoverEvent) => void;
  onHoverChange: (isHovering: boolean) => void;
  children: ReactNode | ((values: LinkRenderProps) => ReactNode);
  className: string | ((values: LinkRenderProps) => string);
  style: CSSProperties | ((values: LinkRenderProps) => CSSProperties);
};

export const Link = (props: LinkProps) => {};
