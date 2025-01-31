import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import "./App.css";
import menuEnglish from "./data/menu-en.json";
import menuGerman from "./data/menu-de.json";
import menuFrench from "./data/menu-fr.json";
import menuSpanish from "./data/menu-es.json";
import Design1 from "./components/designs/Design1";
import Design2 from "./components/designs/Design2";
import Design3 from "./components/designs/Design3";
import LanguageSwitcher from "./components/LanguageSwitcher";

const menuData = {
  en: menuEnglish,
  de: menuGerman,
  fr: menuFrench,
  es: menuSpanish,
};

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

  const MenuPage = () => (
    <div className="menu-page">
      <div className="menu-controls">
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

        <LanguageSwitcher
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
        />
      </div>

      {renderCurrentDesign()}
    </div>
  );

  return (
    <Router>
      <div className="App">
        <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
        <Routes>
          <Route path="/" element={<LandingPage currentLang={currentLang} />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
