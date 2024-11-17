import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import "./styles/main.scss";

const container = document.getElementById("root");

hydrateRoot(container, <App />);
