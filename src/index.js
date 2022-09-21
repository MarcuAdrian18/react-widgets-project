import React from "react";
import { ReactDOM } from "react";
import App from "./App";
import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
