"use client";
import { type ReactNode } from "react";
import { Key } from "./utils";

export type BreadcrumbItemProps = {
  children: ReactNode;
  isCurrent: boolean;
  isDisabled?: boolean;
  onAction?: (key: Key) => void;
};

const BreadcrumbItem = ({
  children,
  isCurrent,
  isDisabled,
  onAction,
}: BreadcrumbItemProps) => {
  return <li>{children}</li>;
};
