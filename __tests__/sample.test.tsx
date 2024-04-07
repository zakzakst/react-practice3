import React, { ReactElement } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sample from "../src/components/Sample";

describe("Sample", () => {
  it("コンポーネントのレンダリングのテスト", async () => {
    render(<Sample />);
  });
});
