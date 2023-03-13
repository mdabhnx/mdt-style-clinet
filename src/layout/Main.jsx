import React from "react";
import Logo from "../components/Logo/Logo";
import Nav from "../components/Nav/Nav";
import Toolbar from "../components/Toolbar/Toolbar";
import "./main.scss";

function Main({ children }) {
  return (
    <div className="container">
      <Toolbar />
      <Logo />
      <Nav />

      {children}
    </div>
  );
}

export default Main;
