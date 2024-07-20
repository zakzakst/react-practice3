import { container, child } from "./styles.css";

export default function Page() {
  return (
    <>
      <p className={container}>
        vanilla-extract <span className={child}>child</span>
      </p>
      <p className={child}>child</p>
    </>
  );
}
