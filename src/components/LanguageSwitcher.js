import { useState, useEffect } from "react";
import "./LanguageSwitcher.css";

const languages = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
];

const LanguageSwitcher = ({ currentLang, setCurrentLang }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCurrentLanguageName = () => {
    return (
      languages.find((lang) => lang.code === currentLang)?.name ||
      "Select Language"
    );
  };

  if (isMobile) {
    return (
      <div className="language-switcher-mobile">
        <button
          className="dropdown-button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {getCurrentLanguageName()} ▼
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setCurrentLang(lang.code);
                  setIsDropdownOpen(false);
                }}
                className={`lang-btn ${
                  currentLang === lang.code ? "active" : ""
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setCurrentLang(lang.code)}
          className={`lang-btn ${currentLang === lang.code ? "active" : ""}`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
