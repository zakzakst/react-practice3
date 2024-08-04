import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { InsertScript, insertScriptsAtom } from "@/states/insert-scripts";

const useInsertScripts = () => {
  const state: InsertScript = useRecoilValue(insertScriptsAtom);
  const update: SetterOrUpdater<InsertScript> =
    useSetRecoilState(insertScriptsAtom);

  // TODO: id stringでなくて設定しているscriptsに限定したい

  /**
   * スクリプトの埋め込み状態を設定
   * @param id 追加するスクリプトのID
   * @param isInserted 設定する埋め込み状態
   */
  const setIsInsertedScript = (id: string, isInserted: boolean) => {
    // 1.対象スクリプトのisInsertedを更新したInsertScriptを取得
    // 2.1の値でupdate
  };

  /**
   * スクリプトを追加
   * @param id 追加するスクリプトのID
   */
  const insertScript = (id: string) => {
    // 1.idから対象のスクリプトのデータを取得
    // 2.埋め込みstateがtrueの場合、処理を終了
    // 3.埋め込みstateをtrueにする
    // 4.scriptタグを生成してbodyに追加する
  };

  /**
   * スクリプトの埋め込み状態を取得
   * @param id 状態を取得するスクリプトのID
   */
  const getIsInsertedScript = (id: string) => {};

  return {
    state,
    insertScript,
    getIsInsertedScript,
  };
};

export default useInsertScripts;
