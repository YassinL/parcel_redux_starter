import React from "react";

import ReactDOM from "react-dom";
import { App } from "./App";

//Le noeud parent
const MOUNT_NODE = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  MOUNT_NODE
);
