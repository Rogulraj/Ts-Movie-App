// packages
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

// redux
import reduxStore from "@redux/store";

// css
import defaultStyle from "./index.module.css";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@components/Loader/Loader";
import { InfinitySpin } from "react-loader-spinner";

// types
type AppProviderProps = {
  children: React.ReactNode;
};

// react component
const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<Loader />}>
      <ErrorBoundary
        FallbackComponent={() => (
          <div className={defaultStyle.error_boundary_card}>
            <h2 className={defaultStyle.error_text}>Something went wrong!</h2>
          </div>
        )}>
        <HelmetProvider>
          <Provider store={reduxStore}>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            {children}
          </Provider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default AppProvider;
