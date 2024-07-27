"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";

type FormInput = {
  selector: string;
  value: string;
};

const getFormGetBookmarklet = () => {
  // TODO: スクリプト作成
  return "hoge";
};

const getFormSetBookmarklet = (formInputs: FormInput[]) => {
  // TODO: スクリプト作成
  return JSON.stringify(formInputs);
};

/**
 * 文字列をクリップボードにコピー
 * @param str コピーする文字列
 */
const copyClipBoard = async (str: string) => {
  try {
    await navigator.clipboard.writeText(str);
    alert("クリップボードにコピーしました");
  } catch (err) {
    alert("クリップボードへのコピーに失敗しました");
  }
};

export default function Page() {
  const [formInputs, setFormInputs] = useState<FormInput[]>([]);
  const [selector, setSelector] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * 入力値クリア
   */
  const clearInput = useCallback(() => {
    setSelector("");
    setValue("");
  }, []);

  /**
   * セレクター入力欄が変更された時の処理
   */
  const handleChangeSelector = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelector(e.target.value);
    },
    []
  );

  /**
   * 値入力欄が変更された時の処理
   */
  const handleChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );

  /**
   * 追加ボタンクリック時の処理
   */
  const onClickAdd = useCallback(() => {
    if (!selector || !value) {
      // selectorかvalueどちらかが空の場合、アラート出して処理を止める
      alert("値を入力してください");
      return;
    }
    setFormInputs([
      ...formInputs,
      {
        selector,
        value,
      },
    ]);
    clearInput();
  }, [formInputs, selector, value, clearInput]);

  /**
   * 削除ボタンクリック時の処理
   */
  const onClickDelete = useCallback(
    (targetIndex: number) => {
      const newFormInputs = formInputs.filter((_, index) => {
        return index !== targetIndex;
      });
      setFormInputs(newFormInputs);
    },
    [formInputs]
  );

  /**
   * 初期値設定パラメータ付きのURLを取得する
   */
  const onClickGetUrl = useCallback(() => {
    // URLパラメータ作成用の配列を作成
    const formInputsArr = formInputs.map((formInput) => {
      return [formInput.selector, formInput.value];
    });
    // リンクを作成
    const params = new URLSearchParams(formInputsArr).toString();
    const uri = new URL(window.location.href);
    const url = `${uri.origin}${pathname}?${params}`;
    // リンクをクリップボードにコピー
    copyClipBoard(url);
  }, [formInputs, pathname]);

  const formGetBookmarklet = useMemo(() => {
    return getFormGetBookmarklet();
  }, []);

  const formSetBookmarklet = useMemo(() => {
    return getFormSetBookmarklet(formInputs);
  }, [formInputs]);

  /**
   * 初期化
   */
  const init = useCallback(() => {
    // URLパラメータから初期値を設定
    let initialFormInputs: FormInput[] = [];
    if (searchParams) {
      searchParams.forEach((value, selector) => {
        initialFormInputs.push({
          selector,
          value,
        });
      });
    }
    setFormInputs(initialFormInputs);
  }, [searchParams]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <>
      <div>
        <input
          type="text"
          name="selector"
          value={selector}
          onChange={handleChangeSelector}
        />
        <input
          type="text"
          name="selector"
          value={value}
          onChange={handleChangeValue}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <ul>
        {formInputs.map((formInput, index) => (
          <li key={index}>
            <span>
              {formInput.selector}, {formInput.value}
            </span>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </li>
        ))}
      </ul>
      <div>
        <a href={formSetBookmarklet}>フォーム設定ブックマークレット</a>
        <a href={formGetBookmarklet}>フォーム取得ブックマークレット</a>
        <button onClick={onClickGetUrl}>共有URLをコピー</button>
      </div>
    </>
  );
}
