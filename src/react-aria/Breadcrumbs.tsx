"use client";
import { type ReactNode } from "react";

export type BreadcrumbItemProps = {
  children: ReactNode;
  current: boolean;
  disabled?: boolean;
  to?: string;
  onAction: (key: string | number) => void;
};

export type BreadcrumbsProps = {
  className?: string;
  disabled?: boolean;
  items: BreadcrumbItemProps[];
};

const BreadcrumbItem = ({
  children,
  current,
  disabled,
  to,
  onAction,
}: BreadcrumbItemProps) => {
  const Tag = to ? "a" : "span";
  return (
    <Tag href={to || undefined} aria-current={current || undefined}>
      {children}
    </Tag>
  );
};
