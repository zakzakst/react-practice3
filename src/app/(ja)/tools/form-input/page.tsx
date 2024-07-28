"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "../_components/Button";
import { Input } from "../_components/Form";
import copyClipBoard from "../_utils/copy-clip-board";

type FormInput = {
  selector: string;
  value: string;
};

// const getFormGetBookmarklet = () => {
//   // TODO: スクリプト作成
//   return "hoge";
// };

const getFormSetBookmarklet = (formInputs: FormInput[]) => {
  // NOTE: 元のスクリプト
  // const arr = JSON.stringify(formInputs);
  // arr.forEach((input) => {
  //   const targetEl = document.querySelector(input.selector);
  //   if (targetEl?.type === 'checkbox') {
  //     targetEl.checked = true;
  //   } else if (targetEl?.tagName === 'TEXTAREA') {
  //     targetEl.value = input.value;
  //   } else {
  //     targetEl?.setAttribute('value', input.value);
  //   }
  // });
  const link = `javascript:(function(){const%20arr%3D${encodeURIComponent(JSON.stringify(formInputs))}%3Barr.forEach((input)%3D%3E%7Bconst%20targetEl%3Ddocument.querySelector(input.selector)%3Bif(targetEl%3F.type%3D%3D%3D'checkbox')%7BtargetEl.checked%3Dtrue%3B%7Delse%20if(targetEl%3F.tagName%3D%3D%3D'TEXTAREA')%7BtargetEl.value%3Dinput.value%3B%7Delse%7BtargetEl%3F.setAttribute('value'%2Cinput.value)%3B%7D%7D)%3B})();`;
  return `<a href="${link}">フォーム設定ブックマークレット</a>`;
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

  // const formGetBookmarklet = useMemo(() => {
  //   return getFormGetBookmarklet();
  // }, []);

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
        <Input
          type="text"
          name="selector"
          value={selector}
          onChange={handleChangeSelector}
        />
        <Input
          type="text"
          name="selector"
          value={value}
          onChange={handleChangeValue}
        />
        <Button onClick={onClickAdd}>追加</Button>
      </div>
      <ul>
        {formInputs.map((formInput, index) => (
          // TODO: 編集モードも作る（編集可能パラメータも付ける？）
          <li key={index}>
            <span>
              {formInput.selector}, {formInput.value}
            </span>
            <Button onClick={() => onClickDelete(index)}>削除</Button>
          </li>
        ))}
      </ul>
      <div>
        <div dangerouslySetInnerHTML={{ __html: formSetBookmarklet }} />
        {/* <a href={formGetBookmarklet}>フォーム取得ブックマークレット</a> */}
        <Button onClick={onClickGetUrl}>共有URLをコピー</Button>
      </div>
    </>
  );
}
