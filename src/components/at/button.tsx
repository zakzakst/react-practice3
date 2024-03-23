import { type ReactNode } from "react";
import styles from "@/styles/components/at/button.module.scss";

type AtButtonProps = {
  children: ReactNode;
};

export default function AtButton({ children }: AtButtonProps) {
  return <button className={styles.button}>{children}</button>;
}
