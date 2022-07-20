import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Announcement from "./components/announcement";

import Home from "./pages/home";

import "./assets/styles/external/bootstrap-grid.min.css";
import "./assets/styles/reset.scss";
import "./assets/styles/theme.scss";
import "./assets/styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const App: React.FC = () => {
  return (
    <div id="app-wrapper">
      <BrowserRouter>
        <Announcement />
        <Header />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
