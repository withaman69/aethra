import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/common/ErrorBoundary";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <Provider store={store}>
    <ErrorBoundary>
  <App />
</ErrorBoundary>
  </Provider>
);