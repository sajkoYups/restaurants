import "../../styles/Design3.css";

function Design3({ menuData, currentLang }) {
  return (
    <div className="design3-container">
      <header className="elegant-header">
        <div className="header-content">
          <h1>{menuData[currentLang].restaurantName}</h1>
          {menuData[currentLang].logo && (
            <img
              src={menuData[currentLang].logo}
              alt="Restaurant Logo"
              className="elegant-logo"
            />
          )}
        </div>
      </header>

      <div className="elegant-menu">
        {menuData[currentLang].categories.map((category) => (
          <section key={category.id} className="menu-section">
            <div className="category-header">
              <h2>{category.name}</h2>
              <div className="decorative-line">
                <span className="line-left"></span>
                <span className="diamond"></span>
                <span className="line-right"></span>
              </div>
            </div>

            <div className="elegant-items">
              {category.items.map((item) => (
                <div key={item.id} className="elegant-item">
                  <div className="item-image-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="elegant-item-image"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="elegant-item-details">
                    <div className="item-name-price">
                      <h3>{item.name}</h3>
                      <span className="elegant-price">
                        {new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        }).format(item.price)}
                      </span>
                    </div>
                    <p className="elegant-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Design3;
