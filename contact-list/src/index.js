import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import store from "./store";
import { Provider } from "react-redux";

const Application = () => {
  return (
    <Provider store={store}>
       <App />
    </Provider>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>
);