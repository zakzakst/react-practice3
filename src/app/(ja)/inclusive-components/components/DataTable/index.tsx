// 参考：https://inclusive-components.design/data-tables/
// 明示的に指定しない限り、ヘッダーがその下のセルにラベルを付けるのかどうか、それとも右のセルにラベルを付けるのかどうかが明確ではないことです。ここで、属性scopeが役立ちます。列ヘッダーの場合は を使用しscope="col"、行ヘッダーの場合は を使用しますscope="row"。
// 行ヘッダーを設定しなくても、データが意味をなさなくなるわけではありません。明瞭さとコンテキストが増すだけです。列ヘッダーと行ヘッダーの両方を使用するテーブルの場合、一部のスクリーン リーダーは、各データ セルの列ラベルと行ラベルの両方を読み上げます。
// 見出しに対するキャプションの利点は、スクリーン リーダーのユーザーがショートカットTキーを使用してテーブルに直接遭遇したときに、キャプションが読み上げられることです。幸い、 HTML5 ではキャプション内に見出しを配置できます。
// 視覚的に言えば、列と行が重なり合ってしまえば、それは実際には同じ表ではなく、表とは言えません。代わりに、利用可能なスペースに関係なく、同じ視覚的および意味的な構造へのアクセスを提供したいのです。テーブルの親要素を水平方向にスクロールさせるだけです。
// Google などの翻訳サービスでは属性が翻訳されないaria-labelため、要素のテキスト ノードを使用してラベルを付ける方が適切です。これは を使用して行うことができますaria-labelledby。
// テーブル コンテナーの内容がオーバーフローしない限り、テーブル コンテナーをフォーカス可能にする必要はありません。そうしないと、フォーカス順序にタブ ストップが追加されますが、これは何もしません。私の意見では、これは2.4.3 フォーカス順序に違反することになります。キーボード ユーザーに、実際には何もしない要素にフォーカスを与えることは、混乱を招き、邪魔になります。

"use client";
import { table as style } from "./styles.css";

const headers: string[] = ["Band", "Singer", "Inception", "Label"];
const rows: string[][] = [
  ["Napalm Death", "Barney Greenway", "1981", "Century Media"],
  ["Carcass", "Jeff Walker", "1985", "Earache"],
  ["Extreme Noise Terror", "Dean Jones", "1985", "Candlelight"],
  ["Discordance Axis", "Jon Chang", "1992", "Hydrahead"],
];

export const Table = () => {
  return (
    <table className={style.main}>
      <caption>test</caption>
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th role="columnheader" scope="col" key={i}>
              {header}
              {/* TODO: ソートボタン作成 */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, i) => (
              <th key={i} scope={i < 1 ? "row" : undefined}>
                {cell}
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
