import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Garantir que o arquivo seja tratado como um módulo
export {};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
