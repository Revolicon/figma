import * as React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";

const root = ReactDOM.createRoot(
  document.getElementById("app") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
