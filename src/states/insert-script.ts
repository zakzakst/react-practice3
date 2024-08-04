import { atom } from "recoil";

export type ScriptId = "test-01" | "test-02";

export type ScriptData = {
  src: string;
  isInserted: boolean;
};

// export type InsertScript = Partial<Record<ScriptId, ScriptData>>;
export type InsertScript = Record<ScriptId, ScriptData>;

const insertScript: InsertScript = {
  "test-01": {
    src: "/test-01.js",
    isInserted: false,
  },
  "test-02": {
    src: "/test-02.js",
    isInserted: false,
  },
};

export const insertScriptAtom = atom<InsertScript>({
  key: "insert-script",
  default: insertScript,
});
