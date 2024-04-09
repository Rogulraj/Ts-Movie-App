import React from "react";
import { InfinitySpin } from "react-loader-spinner";

import defaultStyle from "./Loader.module.css";
import colorTheme from "@constants/colorTheme";

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
