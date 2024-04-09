import React from "react";
import AppProvider from "@providers/AppProvider";
import AppRoutes from "@routes/index";
import { ValidateEnv } from "@utils/envValidator";

ValidateEnv();

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
