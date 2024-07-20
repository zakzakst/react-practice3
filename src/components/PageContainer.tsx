import React, { HTMLAttributes, ReactNode } from "react";

export type Locale = "ja" | "en";

interface PageContainerProps extends HTMLAttributes<HTMLElement> {
  "data-page-lang": Locale;
  children?: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({
  "data-page-lang": dataPageLang,
  children,
  ...props
}) => {
  return (
    <div data-page-lang={dataPageLang} {...props}>
      {children}
    </div>
  );
};

export default PageContainer;
