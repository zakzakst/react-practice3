## 参考

- https://html.spec.whatwg.org/multipage/
- https://developer.mozilla.org/ja/docs/Learn/Accessibility/WAI-ARIA_basics
- https://developer.mozilla.org/ja/docs/Web/Accessibility/ARIA/Attributes
- https://a11y-guidelines.freee.co.jp/checks/index.html
- https://waic.jp/translations/WCAG21/Techniques/
- https://www.aaa11y.com/

## 調べてみたいこと

- アコーディオン的な「もっと見る」ボタンのアクセシビリティ実装
- 下記自分でも実装してみる
  https://waic.jp/translations/WCAG21/Techniques/aria/ARIA4
- 動的コンテンツの通知
- SVGアイコンやWEBフォントアイコンの対応
- JSとかで新しいウィンドウが開く時の通知
- 高コントラストモード
- 動的に読み込まれるコンテンツに対するローディングインジケーター
- コンテンツがスクロール可能である時のスクロール領域の情報
- 「スクロールバーが細くて操作しづらい」場合の対応方法
- 検索ボックスなどで、押されている「昇順」「降順」ボタンがaria-pressedかaria-selectedか（※読み上げツールで確認したほうが適切なの判断できる？）
- 古い情報化もだが「section要素に名前がつけられている場合のみ、…section要素が存在することを通知することを、ブラウザと支援技術のベンダーに推奨」とあった。この観点で挙動調べてみる
- 「さて、aria-hiddenを使って、スクリーンリーダーユーザーに対してコンテンツを隠すのはどんなときでしょうか？一般に、重複を取り除くときです。」の実際の例調べてみる
- legendがない場合のfieldsetの読み上げ
- formの注釈のアクセシビリティの方法（下記みたいなの）
- 検索結果ページに遷移した時にページの一番上に遷移するの不便（検索結果の位置を表示してほしい）
- タブコンテンツの切替時のフォーカスのかけ方、どうするのがいい？
- 電話番号リンクと営業時間の記載の時、電話番号を目立たせたいけどスクリーンリーダー的には営業時間の情報が先に入っていてほしい。この場合の対応方法
- 「ページトップに戻る」の遷移後のフォーカス

```
最初に<legend>が読み上げられ、続いて<input>に関連づけられたラベルが読み上げられます。続いてヒントテキスト（aria-describedby値によって<input>のid属性に関連づけられたテキスト）が読み上げられます。
```

- role tabpanel
- aria-atomicの挙動
- ユーザーが気づかないうちにダイアログから抜けだして、ページのほかの部分とのインタラクションを行わないように、ダイアログ内のフォーカス可能な最後の要素でTabキーが押されたときにはダイアログ自体にフォーカスが戻るようにします。具体的には、閉じるボタンのkeydownハンドラーを上書きします。

## https://www.disabilityinnovation.com/

### ページ先頭に「メインコンテンツへのページ内リンク」を配置（スクリーンリーダーのみ見える）

```
<a class="skip-to-content" href="#main-content">Skip to main content</a>
```

⇒実際に使うのかは分からない、スクリーンリーダーで「Ctrl + D」で移動できるため
⇒キーボードだと必要？（スクリーンリーダーに慣れていないユーザー想定）
⇒focusかかった時に文字が見えるようにする実装方法参考になるかも

### aria-expandedの使い方違う？（buttonのほうに付けるべきでは）

```
<button class="dropdown__button">What we do</button>
<ul class="dropdown__content" aria-hidden="true" aria-expanded="false">
```

### aタグへのaria-labelって実際に必要？（文脈的に伝わらないものなのか？WCAGの対応で仕方なく？）

```
<a
  class="home-content__button "
  href="https://www.disabilityinnovation.com/projects/msc-disability-design-and-innovation-at-ucl"
  aria-label="UCL based Disability, Design &amp; Innovation MSc"
>
  Find out more
</a>
```

### navigationにaria-labelをつけるのはgoodだと思う

```
<div class="container" role="navigation" aria-label="Footer links">
```

## https://www.disabilityinnovation.com/publications

### フィルターかける時にアンカーついてURL変わるのgoodだと思う

検索・絞り込みはキーボードとかスクリーンリーダーのこと考えると、実装アイデア色々知らないことありそう

## https://aeldata.com/

### ヘッダーのナビゲーションがEnter押して詳細表示したあとだとTabでリンク映る時に詳細が表示された状態になる

JSで変数とか持ってるのかな？（調べきれてない）

### ヘッダーリンクでaria-haspopup利用

### form novalidate は自身でバリデーションする場合付けたほうがいい？

```
<form method="post" enctype="multipart/form-data" target="gform_ajax_frame_1" id="gform_1" autocomplete="on" action="/#gf_1" data-formid="1" novalidate="">
```

### カルーセル詳細に見てみたい

aria-live="polite" aria-atomic="true"とかついてた

### TOPへ戻るもキーボード操作を想定すると必要度変わる？

※スクリーンリーダーだと「Shift + Ctrl + D」とかで十分ではないかと思っていた

## https://aeldata.com/resources/blog/

### 左カラムに検索フォーム来るの、キーボードだと便利に感じた

HTML要素の順序を考える時に参考にできそう

### チェックボックス絡むときのaria-labelの実装調べたい

```
<div class="facetwp-checkbox" data-value="epublishing" role="checkbox" aria-checked="false" aria-label="ePublishing(4)" tabindex="0"><span class="facetwp-display-value">ePublishing</span><span class="facetwp-counter">(4)</span></div>
```

### カードで複数個所に同一ページへのリンク要素ある時、tabindex="-1"を有効に使う

```
<a class="elementor-post__thumbnail__link" href="https://aeldata.com/guide-to-make-google-docs-accessible/" tabindex="-1">
  <div class="elementor-post__thumbnail"><img loading="lazy" decoding="async" width="300" height="200" src="https://aeldata.com/wp-content/uploads/2023/05/Guide-To-Make-Google-Docs-Accessible-300x200.jpg" class="attachment-medium size-medium wp-image-1619" alt="Guide To Make Google Docs Accessible" srcset="https://aeldata.com/wp-content/uploads/2023/05/Guide-To-Make-Google-Docs-Accessible-300x200.jpg 300w, https://aeldata.com/wp-content/uploads/2023/05/Guide-To-Make-Google-Docs-Accessible-1024x683.jpg 1024w, https://aeldata.com/wp-content/uploads/2023/05/Guide-To-Make-Google-Docs-Accessible-768x512.jpg 768w, https://aeldata.com/wp-content/uploads/2023/05/Guide-To-Make-Google-Docs-Accessible.jpg 1200w" sizes="(max-width: 300px) 100vw, 300px"></div>
</a>
```

## https://aeldata.com/accessibility-statement/

### 対応できていないことを記載しているのいいと思った

## https://www.pref.osaka.lg.jp/index.html

### ヘッダーのナビゲーション詳細開いたら「閉じる」ボタン

## https://www.hsbc.com/

### タブ移動の最初のSkipLinks

```
<div class="skip-links" data-component="SkipLinks">
```

### 検索モーダルで使ったことないariaとかあったので、見てみる

```
<div class="search-panel search-panel--active" role="dialog" aria-modal="true" aria-label="Search">
```

```
<span class="quick-results-aria sr-only--live" role="status" aria-live="polite"
```

## https://www.hsbc.com/website-accessibility

### 初めて見たaria

```
<div class="rating__step" role="group" aria-labelledby="contentRatingQuestion1" data-step="current">
```

## https://www.uca.ac.uk/study-at-uca/facilities-resources/

### ヘッダーに「Accessibility」切替ボタンがあり、色のコントラストが変更できる
