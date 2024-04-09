// packages
import React from "react";
import { InfinitySpin } from "react-loader-spinner";

// css
import defaultStyle from "./Loader.module.css";

// color theme
import colorTheme from "@constants/colorTheme";

// react component
const Loader = (): React.ReactElement => {
  return (
    <div className={defaultStyle.loader_main}>
      <InfinitySpin
        visible={true}
        width="200"
        color={colorTheme.danger}
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
