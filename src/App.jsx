import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./layout/Main";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Main>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to={"/home"} replace />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </Main>
    </div>
  );
}

export default App;
