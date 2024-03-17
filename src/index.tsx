import React from "react";
import ReactDOM from "react-dom/client";
import CacUseEffect from "./chaiaurcode/CacUseEffect";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { CacPasswordGenerator } from "./chaiaurcode/CacPasswordGenerator";
import CacCurrency from "./chaiaurcode/customHook/CacCurrency";
import { CacMyRouterApp } from "./chaiaurcode/RouterExample/CacMyRouterApp";
import { MyReduxApp } from "./reactRedux/MyReduxApp";
import { Main } from "./reactRedux/Main";
import { MyContextApp } from "./chaiaurcode/Context/MyContextApp";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <CacMyRouterApp/>     */}
   <MyContextApp/>
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
