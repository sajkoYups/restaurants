import "../../styles/Design1.css";

function Design1({ menuData, currentLang }) {
  return (
    <>
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
    </>
  );
}

export default Design1;
