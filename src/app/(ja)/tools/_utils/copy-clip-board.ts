/**
 * 文字列をクリップボードにコピー
 * @param str コピーする文字列
 */
const copyClipBoard = async (str: string) => {
  try {
    await navigator.clipboard.writeText(str);
    alert("クリップボードにコピーしました");
  } catch (e) {
    console.error(e);
    alert("クリップボードへのコピーに失敗しました");
  }
};

export default copyClipBoard;
