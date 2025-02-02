import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { IoMdRibbon } from "react-icons/io";
import "./EcoFriendly.css";

const EcoFriendly = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ecoInfo = {
    title: "Eco-Friendly Certified Restaurant",
    description:
      "We are proud to be certified as an eco-friendly establishment, committed to sustainable practices and environmental responsibility.",
    practices: [
      {
        title: "Sustainable Sourcing",
        description:
          "We source our ingredients from local, organic farms and sustainable suppliers, reducing our carbon footprint and supporting local communities.",
      },
      {
        title: "Waste Reduction",
        description:
          "Our restaurant implements comprehensive recycling and composting programs, minimizing waste and promoting circular economy practices.",
      },
      {
        title: "Energy Efficiency",
        description:
          "We use energy-efficient appliances and renewable energy sources where possible, reducing our environmental impact.",
      },
      {
        title: "Water Conservation",
        description:
          "Our facilities are equipped with water-saving devices and we follow strict water conservation practices.",
      },
      {
        title: "Eco-Friendly Packaging",
        description:
          "All our takeaway containers and packaging materials are biodegradable or recyclable.",
      },
    ],
  };

  return (
    <>
      <button
        className="eco-friendly-button"
        onClick={() => setIsModalOpen(true)}
        aria-label="View Eco-Friendly Certificate"
      >
        <FaLeaf className="eco-leaf" />
        <IoMdRibbon className="eco-ribbon" />
      </button>

      {isModalOpen && (
        <div
          className="eco-modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="eco-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="eco-modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            <div className="eco-modal-header">
              <div className="eco-icon-container">
                <FaLeaf className="eco-leaf-large" />
                <IoMdRibbon className="eco-ribbon-large" />
              </div>
              <h2>{ecoInfo.title}</h2>
            </div>

            <p className="eco-description">{ecoInfo.description}</p>

            <div className="eco-practices">
              {ecoInfo.practices.map((practice, index) => (
                <div key={index} className="eco-practice">
                  <h3>
                    <FaLeaf className="practice-icon" />
                    {practice.title}
                  </h3>
                  <p>{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EcoFriendly;
