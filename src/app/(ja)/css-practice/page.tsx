import {
  section,
  anyHover,
  transform,
  rgb,
  lineHeightTrim,
  fillBg,
  textarea,
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

      <section className={section}>
        <h2>■ </h2>
        <div></div>
      </section>
    </>
  );
}
