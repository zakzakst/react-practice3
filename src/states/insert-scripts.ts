import { atom } from "recoil";

export type InsertScript = {
  id: string;
  path: string;
  isInserted: boolean;
};

// TODO: as constとか使って設定するスクリプトを固定できないか？
const insertScripts: InsertScript[] = [
  {
    id: "test-01",
    path: "/test-01.js",
    isInserted: false,
  },
  {
    id: "test-02",
    path: "/test-02.js",
    isInserted: false,
  },
];

export const insertScriptsAtom = atom<InsertScript[]>({
  key: "insert-scripts",
  default: insertScripts,
});
