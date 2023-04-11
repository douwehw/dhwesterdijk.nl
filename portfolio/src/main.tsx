import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'react-tippy/dist/tippy.css';
import { BrowserRouter } from "react-router-dom";

// {document.body.classList.add("bg-gradient-[-45deg]")}
// {document.body.classList.add("from-black")}
// {document.body.classList.add("to-[#141c2e]")}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
