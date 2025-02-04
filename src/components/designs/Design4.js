import { useState } from "react";
import "../../styles/Design4.css";
import FoodModal from "../FoodModal";
import AllergenIcons from "../AllergenIcons";
import LanguageSwitcher from "../LanguageSwitcher";
import EcoFriendly from "../EcoFriendly";
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

function Design4({ menuData, currentLang, setCurrentLang }) {
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
    <div className="design4-container">
      <header className="newspaper-header">
        <div className="header-content-newspaper">
          <h1 className="restaurant-title">
            {menuData[currentLang].restaurantName}
          </h1>
          <div className="header-controls">
            <EcoFriendly />
            <LanguageSwitcher
              currentLang={currentLang}
              setCurrentLang={setCurrentLang}
            />
          </div>
        </div>
        <div className="decorative-border"></div>
      </header>

      <div className="newspaper-menu">
        <div className="menu-columns">
          {menuData[currentLang].categories.map((category, index) => {
            const Icon = getCategoryIcon(category.name);
            return (
              <div key={category.id} className="menu-category-newspaper">
                <div className="category-header-newspaper">
                  <Icon className="category-icon" />
                  <h2>{category.name}</h2>
                  <div className="header-line"></div>
                </div>
                <div className="menu-items-newspaper">
                  {category.items.map((item) => (
                    <div
                      key={item.id}
                      className="menu-item-newspaper"
                      onClick={() => handleItemClick(item)}
                    >
                      <div className="item-header">
                        <h3>{item.name}</h3>
                        <div className="price-line"></div>
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
                  ))}
                </div>
              </div>
            );
          })}
        </div>
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

export default Design4;
