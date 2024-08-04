import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import {
  ScriptId,
  InsertScript,
  insertScriptAtom,
} from "@/states/insert-script";

const useInsertScript = () => {
  const state: InsertScript = useRecoilValue(insertScriptAtom);

  const update: SetterOrUpdater<InsertScript> =
    useSetRecoilState(insertScriptAtom);

  /**
   * スクリプトの埋め込み状態を設定
   * @param id 追加するスクリプトのID
   * @param isInserted 設定する埋め込み状態
   */
  const setIsInsertedScript = (id: ScriptId, isInserted: boolean) => {
    // 1.対象スクリプトのisInsertedを更新したInsertScriptを取得
    const newInsertScript = {
      ...state,
      [id]: {
        ...state[id],
        isInserted,
      },
    };
    // 2.1の値でupdate
    update(newInsertScript);
  };

  /**
   * スクリプトを追加
   * @param id 追加するスクリプトのID
   */
  const insertScript = (id: ScriptId) => {
    // 1.idから対象のスクリプトのデータを取得
    const data = state[id];
    // 2.埋め込みstateがtrueの場合、処理を終了
    if (data.isInserted) return;
    // 3.埋め込みstateをtrueにする
    setIsInsertedScript(id, true);
    // 4.scriptタグを生成してbodyに追加する
    if (!document.getElementById(id)) {
      const script = document.createElement("script");
      script.src = data.src;
      script.id = id;
      document.body.appendChild(script);
    }
  };

  /**
   * スクリプトの埋め込み状態を取得
   * @param id 状態を取得するスクリプトのID
   */
  const getIsInsertedScript = (id: ScriptId) => {
    console.log("get", state[id].isInserted);
    return state[id].isInserted;
  };

  return {
    state,
    insertScript,
    getIsInsertedScript,
  };
};

export default useInsertScript;
