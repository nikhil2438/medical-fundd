
import React from "react";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  
    <App />
  </BrowserRouter>
);
