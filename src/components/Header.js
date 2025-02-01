import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ currentLang, onLanguageChange }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo" onClick={() => navigate("/")}>
          <span className="logo-text">Speisekarte QR</span>
        </div>

        <nav className="main-nav">
          <button className="nav-link" onClick={() => navigate("/")}>
            {currentLang === "en" ? "Home" : "Startseite"}
          </button>
          <button className="nav-link" onClick={() => navigate("/menu")}>
            {currentLang === "en" ? "Menu Demo" : "Menü Demo"}
          </button>
        </nav>

        {isLandingPage && (
          <div className="language-selector">
            <button
              className={`lang-btn ${currentLang === "en" ? "active" : ""}`}
              onClick={() => onLanguageChange("en")}
            >
              EN
            </button>
            <button
              className={`lang-btn ${currentLang === "de" ? "active" : ""}`}
              onClick={() => onLanguageChange("de")}
            >
              DE
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
