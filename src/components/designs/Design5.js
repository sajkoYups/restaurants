import { useState } from "react";
import "../../styles/Design5.css";
import FoodModal from "../FoodModal";
import AllergenIcons from "../AllergenIcons";
import LanguageSwitcher from "../LanguageSwitcher";
import {
  FaWineGlass,
  FaCoffee,
  FaHamburger,
  FaIceCream,
  FaFish,
  FaLeaf,
} from "react-icons/fa";
import { GiNoodles, GiSushis } from "react-icons/gi";

const categoryIcons = {
  starters: FaLeaf,
  mainCourses: FaHamburger,
  desserts: FaIceCream,
  drinks: FaWineGlass,
  coffee: FaCoffee,
  seafood: FaFish,
  noodles: GiNoodles,
  sushi: GiSushis,
};

function Design5({ menuData, currentLang, setCurrentLang }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const getCategoryIcon = (categoryName) => {
    const normalizedName = categoryName.toLowerCase().replace(/\s+/g, "");
    for (const [key, Icon] of Object.entries(categoryIcons)) {
      if (normalizedName.includes(key.toLowerCase())) {
        return Icon;
      }
    }
    return FaHamburger; // Default icon
  };

  return (
    <div className="design5-container">
      <header className="modern-header">
        <div className="header-content-modern">
          <h1>{menuData[currentLang].restaurantName}</h1>
          <LanguageSwitcher
            currentLang={currentLang}
            setCurrentLang={setCurrentLang}
          />
        </div>
      </header>

      <div className="modern-menu">
        {menuData[currentLang].categories.map((category) => {
          const Icon = getCategoryIcon(category.name);
          return (
            <section key={category.id} className="menu-section">
              <div className="section-header">
                <Icon className="section-icon" />
                <h2>{category.name}</h2>
              </div>

              <div className="menu-items-modern">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="menu-item-modern"
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="item-content">
                      <div className="item-main">
                        <h3>{item.name}</h3>
                        <span className="item-price">
                          {new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "EUR",
                          }).format(item.price)}
                        </span>
                      </div>
                      <p className="item-description">{item.description}</p>
                      {item.allergens && (
                        <div className="item-allergens">
                          <AllergenIcons allergens={item.allergens} />
                        </div>
                      )}
                    </div>
                    <div className="hover-indicator">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <FoodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        food={selectedItem}
        hideImages={true}
      />
    </div>
  );
}

export default Design5;
