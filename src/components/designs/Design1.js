import { useState } from "react";
import "../../styles/Design1.css";
import FoodModal from "../FoodModal";
import AllergenIcons from "../AllergenIcons";
import LanguageSwitcher from "../LanguageSwitcher";
function Design1({ menuData, currentLang, setCurrentLang }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getImagePath = (imagePath) => {
    if (imagePath.startsWith("http")) {
      return imagePath;
    }
    return `${process.env.PUBLIC_URL}/${imagePath}`;
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="restaurant-header">
        <div className="restaurant-header-content">
          {menuData[currentLang].logo && (
            <img
              src={getImagePath(menuData[currentLang].logo)}
              alt="Restaurant Logo"
              className="restaurant-logo"
            />
          )}
          <h1>{menuData[currentLang].restaurantName}</h1>
        </div>
        <LanguageSwitcher
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
        />
      </header>

      <div className="menu-container">
        {menuData[currentLang].categories.map((category) => (
          <div key={category.id} className="menu-category">
            <h2>{category.name}</h2>
            <div className="menu-items">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="menu-item"
                  onClick={() => handleItemClick(item)}
                >
                  {item.image && (
                    <img
                      src={getImagePath(item.image)}
                      alt={item.name}
                      className="item-image"
                    />
                  )}
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="item-description">{item.description}</p>
                    <div className="item-footer">
                      <p className="item-price">
                        {new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        }).format(item.price)}
                      </p>
                      {item.allergens && (
                        <div className="item-allergens">
                          <AllergenIcons allergens={item.allergens} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <FoodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        food={selectedItem}
      />
    </>
  );
}

export default Design1;
