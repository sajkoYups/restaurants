import React from "react";
import "./FoodModal.css";

const FoodModal = ({ isOpen, onClose, food }) => {
  if (!isOpen || !food) return null;

  const {
    title,
    description,
    image,
    detailedDescription,
    calories,
    protein,
    carbs,
    fat,
    allergens,
    ingredients,
  } = food;

  const getImagePath = (imagePath) => {
    if (imagePath.startsWith("http")) {
      return imagePath;
    }
    return `${process.env.PUBLIC_URL}/${imagePath}`;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="modal-header">
          {image && (
            <div className="modal-image-container">
              <img
                src={getImagePath(image)}
                alt={title}
                className="modal-image"
              />
            </div>
          )}
          <h2 className="modal-title">{title}</h2>
        </div>

        <div className="modal-body">
          <p className="modal-description">{description}</p>

          {detailedDescription && (
            <p className="modal-detailed-description">{detailedDescription}</p>
          )}

          {(calories || protein || carbs || fat) && (
            <div className="modal-nutrition">
              <h3>Nutrition Information</h3>
              <div className="nutrition-grid">
                {calories && (
                  <div className="nutrition-item">
                    <span className="nutrition-label">Calories</span>
                    <span className="nutrition-value">{calories}</span>
                  </div>
                )}
                {protein && (
                  <div className="nutrition-item">
                    <span className="nutrition-label">Protein</span>
                    <span className="nutrition-value">{protein}g</span>
                  </div>
                )}
                {carbs && (
                  <div className="nutrition-item">
                    <span className="nutrition-label">Carbs</span>
                    <span className="nutrition-value">{carbs}g</span>
                  </div>
                )}
                {fat && (
                  <div className="nutrition-item">
                    <span className="nutrition-label">Fat</span>
                    <span className="nutrition-value">{fat}g</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {allergens && allergens.length > 0 && (
            <div className="modal-allergens">
              <h3>Allergens</h3>
              <p>{allergens.join(", ")}</p>
            </div>
          )}

          {ingredients && ingredients.length > 0 && (
            <div className="modal-ingredients">
              <h3>Ingredients</h3>
              <p>{ingredients.join(", ")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodModal;
