import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

function Nav() {
  return (
    <div className="nav_container">
      <ul>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"#"}>View All</Link>
        </li>
        {/* <li>
          <Link to={"#"}>Shop By Category</Link>
        </li> */}
        <li>
          <Link to={"#"}>New Arrivals</Link>
        </li>
        <li>
          <Link to={"#"}>About</Link>
        </li>
        <li>
          <Link to={"#"}>Size Guide</Link>
        </li>
        <li>
          <Link to={"#"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
