import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./embla.css";
import "./index.css";
import { store } from "./redux/store";
import RoutesConf from "./Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <RoutesConf />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
