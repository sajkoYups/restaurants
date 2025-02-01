import { useState, useEffect, useRef } from "react";
import "./LanguageSwitcher.css";

const languages = [
  {
    code: "en",
    flag: "🇬🇧",
    name: "English",
  },
  {
    code: "de",
    flag: "🇩🇪",
    name: "Deutsch",
  },
  {
    code: "fr",
    flag: "🇫🇷",
    name: "Français",
  },
  {
    code: "es",
    flag: "🇪🇸",
    name: "Español",
  },
];

const LanguageSwitcher = ({ currentLang, setCurrentLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLanguage = languages.find((lang) => lang.code === currentLang);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (langCode) => {
    setCurrentLang(langCode);
    setIsOpen(false);
  };

  return (
    <div className="lang-switcher" ref={dropdownRef}>
      <button
        className="lang-switcher-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Current language: ${currentLanguage.name}`}
      >
        <span className="flag">{currentLanguage.flag}</span>
        <span className="arrow">▼</span>
      </button>

      {isOpen && (
        <div className="lang-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option ${
                currentLang === lang.code ? "active" : ""
              }`}
              onClick={() => handleLanguageSelect(lang.code)}
              aria-label={`Switch to ${lang.name}`}
            >
              <span className="flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
