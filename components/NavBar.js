import React from "react";
import { FaBeer } from 'react-icons/fc';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="navbar-toggler-right">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="container">
        <div className="collapse navbar-collapse flex-column " id="navbar">
          <ul className="navbar-nav nav justify-content-between w-100 bg-transparent">
            <li className="nav-item active">
              <div className="hstack gap-3">
                <a className=" nav-link" href="#">
                  Femme
                </a>
                <a className="nav-link " href="#">
                  Homme
                </a>
                <a className="nav-link" href="#">
                  Enfant
                </a>
              </div>
            </li>
            <li className="nav-item">
              <h1 className="d-none d-md-block">AL VETRINA </h1>
            </li>
            <li className="nav-item active">
            <div className="hstack gap-3">
                <a className=" nav-link" href="#">
                <FaBeer />
                </a>
                <a className="nav-link " href="#">
                <FaBeer />
                </a>
                <a className="nav-link" href="#">
                <FaBeer />
                </a>
              </div>

            </li>
          </ul>

          <ul className="navbar-nav  w-100 justify-content-between">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Nouveautés
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                vêtements
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Chaussures
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Baskets
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Sacs
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Accessoires
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Montres
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Promotions
              </a>
            </li>
            <li>
              <div className="input-group rounded ">
                <input
                  type="search"
                  className="form-control rounded d-none d-md-block"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
