import * as React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";

// Router Pages
import Welcome from "./pages/Welcome";
import App from "./pages/App";
import Icons from "./pages/Icons";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";

let isSingedIn = true;

const root = ReactDOM.createRoot(
  document.getElementById("app") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      {!isSingedIn && (
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      )}
      {isSingedIn && (
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Icons />} />
            <Route path="/categories" element={<Categories />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      )}
    </Router>
  </React.StrictMode>
);
