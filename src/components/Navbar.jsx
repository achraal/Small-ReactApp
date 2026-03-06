// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        {/* Utilisation de Link au lieu de <a> */}
        <Link className="navbar-brand" to="/">
          <i className="bi bi-shop"></i> MyApp
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="bi bi-house"></i> Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calculator">
                <i className="bi bi-calculator"></i> Calculatrice
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sum">
                <i className="bi bi-plus-circle"></i> Somme
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                <i className="bi bi-people"></i> Utilisateurs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FormPage">
                <i className="bi bi-card-list"></i> Formulaire
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crud">
                <i className="bi bi-card-list"></i> Crud
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}