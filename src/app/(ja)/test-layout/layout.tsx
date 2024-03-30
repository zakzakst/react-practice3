"use client";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "@/constants/themes/_themes";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const date = new Date();
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = () => {
    setTheme(themes.dark);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <button onClick={() => changeTheme()}>テーマ変更</button>
        </div>
        {/* <p>{date.toTimeString()}</p> */}
        <div className="template">{children}</div>
      </ThemeProvider>
    </>
  );
}
