import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const categories = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid px-4" >

        <NavLink className="navbar-brand fw-bold fs-3" to="/">
          KhabarSetu
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-lg-3">
            {categories.map((category) => (
              <li key={category}>
                <NavLink className="nav-link text-capitalize" to={`/${category}`}>
                  {category}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );

}

export default Navbar;