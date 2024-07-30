"use client";
import { useState, useCallback, useMemo } from "react";
import { Button } from "../_components/Button";
import { Label, Input, Textarea } from "../_components/Form";
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
  const [name, setName] = useState("日付表示");
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

  /**
   * スクリプト欄が変更された時の処理
   */
  const handleChangeScript = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setBaseScript(e.target.value);
    },
    []
  );

  const bookmarkletLink = useMemo(() => {
    return getBookmarkletScript(baseScript);
  }, [baseScript]);

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
          <Label>ブックマークレット名</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="mt-5">
          <Label>スクリプト</Label>
          <Textarea
            value={baseScript}
            onChange={handleChangeScript}
            rows={10}
            cols={80}
          />
        </div>
        <div className="mt-5 flex items-center gap-x-3">
          <Button isAnchor={true} href={bookmarkletLink}>
            {name}
          </Button>
          <Button onClick={onClickCopy}>スクリプトをコピー</Button>
          <Button onClick={onClickTest}>テスト実行</Button>
        </div>
      </div>
    </>
  );
}
