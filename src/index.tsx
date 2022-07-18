import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";

import "./assets/styles/reset.scss";
import "./assets/styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const App: React.FC = () => {
  return (
    <div id="app-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
