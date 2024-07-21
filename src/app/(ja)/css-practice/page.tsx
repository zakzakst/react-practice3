import {
  section,
  anyHover,
  transform,
  rgb,
  lineHeightTrim,
  fillBg,
  textarea,
  grid,
  grid2,
  grid2Item,
} from "./styles.css";

export default function Page() {
  return (
    <>
      {/* https://www.tak-dcxi.com/article/disable-hover-on-mobile-and-hover-implementation-example */}
      <section className={section}>
        <h2>■ any-hover</h2>
        <div>
          <button type="button" className={anyHover}>
            BUTTON
          </button>
        </div>
      </section>

      {/* https://www.tak-dcxi.com/article/are-you-still-using-the-transform-property */}
      <section className={section}>
        <h2>■ transform（translate, rotate, scale）</h2>
        <div>
          <p className={transform}>TEXT</p>
        </div>
      </section>

      {/* https://www.tak-dcxi.com/article/rgba-function-is-legacy-syntax */}
      <section className={section}>
        <h2>■ rgb</h2>
        <div>
          <p className={rgb}>RGB</p>
        </div>
      </section>

      {/* https://www.tak-dcxi.com/article/use-line-height-trim-as-css-variable/ */}
      <section className={section}>
        <h2>■ ハーフ・レディングを打ち消す</h2>
        <div>
          <p className={lineHeightTrim}>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
      </section>

      {/* https://codepen.io/tak-dcxi/pen/oNRdjyv */}
      <section className={section}>
        <h2>■ 単色背景を親要素の幅を超えて画面いっぱいに表示</h2>
        <div className={fillBg}>
          <p>
            テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
          </p>
        </div>
      </section>

      {/* https://codepen.io/tak-dcxi/pen/oNRbbeR */}
      <section className={section}>
        <h2>■ field-sizing: content</h2>
        <div>
          <textarea className={textarea} rows={5} cols={30}></textarea>
        </div>
      </section>

      {/* https://www.tak-dcxi.com/article/summary-of-css-techniques-posted-on-x-in-june-2024#gridのアイテムに-minmax-関数を使用する際は-min-関数を絡めておく */}
      <section className={section}>
        <h2>
          ■ gridのアイテムに minmax() 関数を使用する際は min() 関数を絡めておく
        </h2>
        <div className={grid}>
          {/* 単にArray(5)だと挙動しなかったので、参考ページをメモ https://jsnotice.com/posts/2020-07-09/ */}
          {[...Array(5)].map((_, i) => (
            <div key={i}>
              テキストが入ります。テキストが入ります。
              テキストが入ります。テキストが入ります。
              テキストが入ります。テキストが入ります。
              テキストが入ります。テキストが入ります。
              テキストが入ります。テキストが入ります。
            </div>
          ))}
          {/* {Array(5)
            .fill("")
            .map((_, i) => (
              <div key={i}>
                テキストが入ります。
              </div>
            ))} */}
        </div>
      </section>

      {/* https://www.tak-dcxi.com/article/summary-of-css-techniques-posted-on-x-in-june-2024#一次元の横並びでも-grid-を使ったほうが適している場合もある */}
      <section className={section}>
        <h2>■ 一次元の横並びでも-grid-を使ったほうが適している場合もある</h2>
        <ul className={grid2}>
          {Array(5)
            .fill({
              date: "2024.mm.dd",
              category: "CATEGORY",
              title:
                "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。",
            })
            .map((el, i) => (
              <li key={i} className={grid2Item}>
                <p>{el.date}</p>
                <p>{el.category}</p>
                <p>{el.title}</p>
              </li>
            ))}
          <li></li>
        </ul>
      </section>

      {/* <section className={section}>
        <h2>■ </h2>
        <div></div>
      </section> */}
    </>
  );
}
