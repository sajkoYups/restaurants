import { useState, useEffect } from "react";
import "../../styles/Design2.css";
import FoodModal from "../FoodModal";
import AllergenIcons from "../AllergenIcons";

function Design2({ menuData, currentLang }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Set initial active category
  useEffect(() => {
    if (menuData[currentLang].categories.length > 0) {
      setActiveCategory(menuData[currentLang].categories[0].id);
    }
  }, [currentLang, menuData]);

  return (
    <div className="design2-container">
      {/* Hamburger Menu Button (Mobile Only) */}
      <button
        className="hamburger-button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Sidebar Navigation */}
      <nav className={`sidebar ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h1>{menuData[currentLang].restaurantName}</h1>
          {menuData[currentLang].logo && (
            <img
              src={getImagePath(menuData[currentLang].logo)}
              alt="Restaurant Logo"
              className="sidebar-logo"
            />
          )}
        </div>

        <ul className="category-nav">
          {menuData[currentLang].categories.map((category) => (
            <li
              key={category.id}
              className={activeCategory === category.id ? "active" : ""}
            >
              <button
                onClick={() => {
                  setActiveCategory(category.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {menuData[currentLang].categories
          .filter((category) => category.id === activeCategory)
          .map((category) => (
            <div key={category.id} className="category-content">
              <h2>{category.name}</h2>
              <div className="menu-items-grid">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="menu-item-card"
                    onClick={() => handleItemClick(item)}
                  >
                    <img
                      src={getImagePath(item.image)}
                      alt={item.name}
                      className="item-image"
                    />
                    <div className="item-info">
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
      </main>

      <FoodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        food={selectedItem}
      />
    </div>
  );
}

export default Design2;
