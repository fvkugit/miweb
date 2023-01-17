import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
    return(
        <>
        <header>
          <div className="navbar">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/proyectos">Proyectos</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
          </div>
        </header>
      </>
    )
}
