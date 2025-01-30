import React from "react";
import "./AllergenIcons.css";

const allergenIcons = {
  Gluten: "🌾",
  Dairy: "🥛",
  Eggs: "🥚",
  Fish: "🐟",
  Shellfish: "🦐",
  "Tree Nuts": "🥜",
  Peanuts: "🥜",
  Soy: "🫘",
  Sesame: "✨",
  Mustard: "🟡",
  Celery: "🌿",
  Sulphites: "🧂",
  Lupin: "🌸",
  Molluscs: "🐚",
};

const AllergenIcons = ({ allergens, className = "" }) => {
  if (!allergens || allergens.length === 0) return null;

  return (
    <div className={`allergen-icons ${className}`} title="Allergens">
      {allergens.map((allergen, index) => (
        <span
          key={index}
          className="allergen-icon"
          title={allergen}
          role="img"
          aria-label={allergen}
        >
          {allergenIcons[allergen] || "⚠️"}
        </span>
      ))}
    </div>
  );
};

export default AllergenIcons;
