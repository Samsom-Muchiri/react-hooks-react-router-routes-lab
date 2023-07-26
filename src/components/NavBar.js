import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">movies</NavLink>
        </li>
        <li>
          <NavLink to="/actors">Actors</NavLink>
        </li>
        <li>
          <NavLink to="/directors">Directors</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
