"use client";
import { type ReactNode } from "react";
import styles from "@/styles/components/at/button.module.scss";

type AtButtonProps = {
  children: ReactNode;
  onButtonClick?: (e: any) => void;
};

export default function AtButton({
  children,
  onButtonClick = () => {},
}: AtButtonProps) {
  return (
    <button className={styles.button} onClick={(e) => onButtonClick(e)}>
      {children}
    </button>
  );
}
