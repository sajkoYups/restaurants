import { useState } from "react";
import "./App.css";
import menuEnglish from "./data/menu-en.json";
import menuGerman from "./data/menu-de.json";
import menuFrench from "./data/menu-fr.json";
import menuSpanish from "./data/menu-es.json";
import Design1 from "./components/designs/Design1";
import Design2 from "./components/designs/Design2";
import Design3 from "./components/designs/Design3";

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

const designs = [
  { id: 1, name: "Classic" },
  { id: 2, name: "Minimal" },
  { id: 3, name: "Elegant" },
];

function App() {
  const [currentLang, setCurrentLang] = useState("en");
  const [currentDesign, setCurrentDesign] = useState(1);

  const renderCurrentDesign = () => {
    switch (currentDesign) {
      case 1:
        return <Design1 menuData={menuData} currentLang={currentLang} />;
      case 2:
        return <Design2 menuData={menuData} currentLang={currentLang} />;
      case 3:
        return <Design3 menuData={menuData} currentLang={currentLang} />;
      default:
        return <Design1 menuData={menuData} currentLang={currentLang} />;
    }
  };

  return (
    <div className="App">
      <div className="design-switcher">
        {designs.map((design) => (
          <button
            key={design.id}
            onClick={() => setCurrentDesign(design.id)}
            className={`design-btn ${
              currentDesign === design.id ? "active" : ""
            }`}
          >
            {design.name}
          </button>
        ))}
      </div>

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

      {renderCurrentDesign()}
    </div>
  );
}

export default App;
