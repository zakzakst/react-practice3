// 参考
// https://zenn.dev/sho_ts/articles/ff3082b1e3db5f
// https://aeldata.com/

// TODO:
// 前後にアイコン追加
// フォーカス時のスタイル
// classNamesでcolorに指定があったときだけvariantsつけるようにできる？

import { ComponentPropsWithoutRef, ElementType } from "react";
import classNames from "classnames";
import { Color } from "./models";
import { button, variants } from "./styles.css";

type TagName = "a" | "button";

type Props<T extends TagName> = {
  tag?: T;
  color?: Color;
} & ComponentPropsWithoutRef<T>;

// type Props<T extends TagName> = {
//   tag?: T;
// } & Omit<ComponentPropsWithoutRef<T>, "tag">;

const Button = <T extends TagName>({
  tag,
  color = "default",
  className,
  children,
  ...props
}: Props<T>) => {
  const Tag = tag || ("button" as ElementType);
  return (
    <Tag className={classNames(button, className, variants[color])} {...props}>
      {children}
    </Tag>
    // <Tag
    //   className={classNames(button, className, `--color-${color}`)}
    //   {...props}
    // >
    //   {children}
    // </Tag>
  );
};

export default Button;
