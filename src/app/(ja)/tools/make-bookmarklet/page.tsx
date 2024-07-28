"use client";
import { useState, useCallback, useMemo } from "react";
import Button from "../_components/Button";
import copyClipBoard from "../_utils/copy-clip-board";

// 参考
// https://ytyng.github.io/bookmarklet-script-compress/

const getShrinkScript = (scriptStr: string): string => {
  let result = scriptStr + "";
  result = result.replace(/\s*\;\s*/g, ";");
  result = result.replace(/\s*\=\s*/g, "=");
  result = result.replace(/\s*\(\s*/g, "(");
  result = result.replace(/\s*\)\s*/g, ")");
  result = result.replace(/\s*\{\s*/g, "{");
  result = result.replace(/\s*\}\s*/g, "}");
  result = result.replace(/\s*\,\s*/g, ",");
  result = result.replace(/\s+/g, " ");
  result = result.replace(/^\s*/g, "");
  result = result.replace(/\s*$/g, "");
  return result;
};

const getBookmarkletScript = (scriptStr: string) => {
  const shrinkScript = getShrinkScript(scriptStr);
  const bookmarkletScript = `javascript:(function(){${encodeURIComponent(shrinkScript)}})();`;
  return bookmarkletScript;
};

export default function Page() {
  const initialScript = "alert(new Date());";
  const [name, setName] = useState("スクリプト名");
  const [baseScript, setBaseScript] = useState<string>(initialScript);

  /**
   * スクリプト名入力欄が変更された時の処理
   */
  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    []
  );

  const bookmarkletLinkEl = useMemo(() => {
    return `<Button href=${getBookmarkletScript(baseScript)}>${name}</Button>`;
  }, [baseScript, name]);

  const onClickCopy = useCallback(() => {
    copyClipBoard(getBookmarkletScript(baseScript));
  }, [baseScript]);

  const onClickTest = useCallback(() => {
    try {
      eval(baseScript);
    } catch (e) {
      alert(e);
    }
  }, [baseScript]);

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <textarea
          value={baseScript}
          onChange={(e) => setBaseScript(e.target.value)}
          rows={10}
          cols={80}
        />
        <div dangerouslySetInnerHTML={{ __html: bookmarkletLinkEl }} />
        <Button onClick={onClickCopy}>スクリプトをコピー</Button>
        <Button onClick={onClickTest}>テスト実行</Button>
      </div>
    </>
  );
}
