// 参考：https://inclusive-components.design/cards/
import { items } from "./styles.css";

const Item = () => {
  return (
    <li>
      <a href="#">card</a>
    </li>
  );
};

export const Items = () => {
  return (
    <ul className={items}>
      <Item />
    </ul>
  );
};
