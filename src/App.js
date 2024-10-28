import { useState } from "react";
import "./App.css";
import menuEnglish from "./data/menu-en.json";
import menuGerman from "./data/menu-de.json";
import menuFrench from "./data/menu-fr.json";
import menuSpanish from "./data/menu-es.json";

const menuData = {
  en: menuEnglish,
  de: menuGerman,
  fr: menuFrench,
  es: menuSpanish,
};

const languages = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
];

function App() {
  const [currentLang, setCurrentLang] = useState("en");

  return (
    <div className="App">
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

      <header className="restaurant-header">
        <h1>{menuData[currentLang].restaurantName}</h1>
        {menuData[currentLang].logo && (
          <img
            src={menuData[currentLang].logo}
            alt="Restaurant Logo"
            className="restaurant-logo"
          />
        )}
      </header>

      <div className="menu-container">
        {menuData[currentLang].categories.map((category) => (
          <div key={category.id} className="menu-category">
            <h2>{category.name}</h2>
            <div className="menu-items">
              {category.items.map((item) => (
                <div key={item.id} className="menu-item">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                    />
                  )}
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    <p className="item-price">
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      }).format(item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
