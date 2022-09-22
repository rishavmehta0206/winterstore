import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppReducer from "./context/AppReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppReducer>
        <App />
      </AppReducer>
    </BrowserRouter>
  </React.StrictMode>
);
