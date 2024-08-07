"use client";
import { useEffect, useState, useCallback, useMemo } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "../_components/Button";
import { Label, Input } from "../_components/Form";
import {
  Table,
  TableHead,
  TableBody,
  TableTh,
  TableTd,
} from "../_components/Table";
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
  return link;
};

export default function Page() {
  const [formInputs, setFormInputs] = useState<FormInput[]>([]);
  const [selector, setSelector] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [editSelector, setEditSelector] = useState<string>("");
  const [editValue, setEditValue] = useState<string>("");
  const [editRowNum, setEditRowNum] = useState<number | null>(null);
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
   * セレクター編集入力欄が変更された時の処理
   */
  const handleChangeEditSelector = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditSelector(e.target.value);
    },
    []
  );

  /**
   * 値編集入力欄が変更された時の処理
   */
  const handleChangeEditValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEditValue(e.target.value);
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
   * 編集ボタンクリック時の処理
   */
  const onClickEdit = useCallback(
    (targetIndex: number) => {
      const { selector, value } = formInputs[targetIndex];
      setEditSelector(selector);
      setEditValue(value);
      setEditRowNum(targetIndex);
    },
    [formInputs]
  );

  /**
   * 更新ボタンクリック時の処理
   */
  const onClickUpdate = useCallback(
    (targetIndex: number) => {
      const newFormInputs = formInputs.map((inputs, index) => {
        return targetIndex === index
          ? { selector: editSelector, value: editValue }
          : inputs;
      });
      setFormInputs(newFormInputs);
      setEditSelector("");
      setEditValue("");
      setEditRowNum(null);
    },
    [formInputs, editSelector, editValue]
  );

  /**
   * 戻るボタンクリック時の処理
   */
  const onClickReturn = useCallback(() => {
    setEditSelector("");
    setEditValue("");
    setEditRowNum(null);
  }, []);

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
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <Label>セレクタ</Label>
          <Input
            type="text"
            name="selector"
            value={selector}
            onChange={handleChangeSelector}
          />
        </div>
        <div>
          <Label>入力値</Label>
          <Input
            type="text"
            name="selector"
            value={value}
            onChange={handleChangeValue}
          />
        </div>
      </div>
      <div className="mt-3">
        <Button onClick={onClickAdd}>追加</Button>
      </div>

      {formInputs.length ? (
        <div className="mt-6">
          <Table>
            <TableHead>
              <tr>
                <TableTh>セレクタ</TableTh>
                <TableTh>入力値</TableTh>
                <TableTh>操作</TableTh>
              </tr>
            </TableHead>
            <TableBody>
              {formInputs.map((formInput, index) => (
                <tr key={index}>
                  {editRowNum === index ? (
                    <>
                      {/* TODO: 編集状態実装 */}
                      <TableTd>
                        <Input
                          type="text"
                          name="editSelector"
                          value={editSelector}
                          onChange={handleChangeEditSelector}
                        />
                      </TableTd>
                      <TableTd>
                        <Input
                          type="text"
                          name="editValue"
                          value={editValue}
                          onChange={handleChangeEditValue}
                        />
                      </TableTd>
                      <TableTd>
                        <div className="flex items-center gap-2">
                          <Button onClick={() => onClickUpdate(index)}>
                            更新
                          </Button>
                          <Button onClick={() => onClickReturn()}>戻る</Button>
                        </div>
                      </TableTd>
                    </>
                  ) : (
                    <>
                      <TableTd>{formInput.selector}</TableTd>
                      <TableTd>{formInput.value}</TableTd>
                      <TableTd>
                        <div className="flex items-center gap-2">
                          <Button onClick={() => onClickDelete(index)}>
                            削除
                          </Button>
                          <Button onClick={() => onClickEdit(index)}>
                            編集
                          </Button>
                        </div>
                      </TableTd>
                    </>
                  )}
                </tr>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="mt-6">
          <p>フォーム入力するデータを登録してください</p>
        </div>
      )}

      <div className="mt-5 flex items-center gap-6">
        <Button isAnchor={true} href={formSetBookmarklet}>
          フォーム設定ブックマークレット
        </Button>
        {/* <a href={formGetBookmarklet}>フォーム取得ブックマークレット</a> */}
        <Button onClick={onClickGetUrl}>共有URLをコピー</Button>
      </div>
    </>
  );
}
