import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
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

// Wrapper component to handle conditional header rendering
const AppContent = ({
  currentLang,
  setCurrentLang,
  renderCurrentDesign,
  setCurrentDesign,
  currentDesign,
}) => {
  const location = useLocation();
  const showHeader = location.pathname !== "/menu";

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

        {/* <LanguageSwitcher
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
        /> */}
      </div>

      {renderCurrentDesign()}
    </div>
  );

  return (
    <div className="App">
      {showHeader && (
        <Header currentLang={currentLang} onLanguageChange={setCurrentLang} />
      )}
      <Routes>
        <Route path="/" element={<LandingPage currentLang={currentLang} />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

function App() {
  const [currentLang, setCurrentLang] = useState("en");
  const [currentDesign, setCurrentDesign] = useState(1);

  const renderCurrentDesign = () => {
    switch (currentDesign) {
      case 1:
        return (
          <Design1
            menuData={menuData}
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
          />
        );
      case 2:
        return (
          <Design2
            menuData={menuData}
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
          />
        );
      case 3:
        return (
          <Design3
            menuData={menuData}
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
          />
        );
      default:
        return (
          <Design1
            menuData={menuData}
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
          />
        );
    }
  };

  return (
    <Router>
      <AppContent
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        currentDesign={currentDesign}
        setCurrentDesign={setCurrentDesign}
        renderCurrentDesign={renderCurrentDesign}
      />
    </Router>
  );
}

export default App;
