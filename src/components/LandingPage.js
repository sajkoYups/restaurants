import React from "react";
import { useNavigate } from "react-router-dom";
import landingContent from "../data/landing-content.json";
import "./LandingPage.css";
import { FaEdit, FaLanguage, FaChartBar, FaPalette } from "react-icons/fa";

const iconMap = {
  edit: FaEdit,
  language: FaLanguage,
  chart: FaChartBar,
  design: FaPalette,
};

const LandingPage = ({ currentLang = "en" }) => {
  const navigate = useNavigate();
  const content = landingContent[currentLang];

  const handleViewMenu = () => {
    navigate("/menu");
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>{content.hero.title}</h1>
          <p className="subtitle">{content.hero.subtitle}</p>
          <p className="description">{content.hero.description}</p>
          <button className="cta-button" onClick={handleViewMenu}>
            {content.hero.cta}
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-grid">
          {content.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <Icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {content.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>{content.callToAction.title}</h2>
        <p>{content.callToAction.description}</p>
        <div className="cta-buttons">
          <button className="primary-button">
            {content.callToAction.primaryButton}
          </button>
          <button className="secondary-button" onClick={handleViewMenu}>
            {content.callToAction.secondaryButton}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">{content.footer.copyright}</p>
          <div className="footer-links">
            {Object.entries(content.footer.links).map(([key, value]) => (
              <a key={key} href={`/${key}`}>
                {value}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
