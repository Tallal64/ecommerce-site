import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import RoutesConf from "./Routes";
import "./index.css";
import "./embla.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <RoutesConf />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
