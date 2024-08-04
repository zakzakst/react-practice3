import { atom } from "recoil";

export type ScriptId = "test-01" | "test-02";

export type ScriptData = {
  path: string;
  isInserted: boolean;
};

export type InsertScript = Partial<Record<ScriptId, ScriptData>>;

const insertScript: InsertScript = {
  "test-01": {
    path: "/test-01.js",
    isInserted: false,
  },
  // "test-02": {
  //   path: "/test-02.js",
  //   isInserted: false,
  // },
};

export const insertScriptsAtom = atom<InsertScript>({
  key: "insert-scripts",
  default: insertScript,
});
