//packages
import React, { CSSProperties } from "react";

//css
import defaultStyle from "./MaxWidthLayout.module.css";

//types
interface MaxWidthLayoutPropsType {
  children: React.ReactElement;

  //default value = 1200px
  maxWidth?: CSSProperties["maxWidth"];
}

//React Element
const MaxWidthLayout = ({ children, maxWidth }: MaxWidthLayoutPropsType) => {
  return (
    <div className={defaultStyle.main_layout}>
      <div className={defaultStyle.sub_layout} style={{ maxHeight: maxWidth }}>
        {children}
      </div>
    </div>
  );
};

export default MaxWidthLayout;
