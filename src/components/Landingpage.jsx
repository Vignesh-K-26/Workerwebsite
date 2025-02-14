import React, { useState, useEffect } from "react";
import "./Landing.css";
import image1 from "./pages/pics/image1.jpeg";
import image2 from "./pages/pics/image2.jpeg";
import image3 from "./pages/pics/image3.jpeg";
import image4 from "./pages/pics/image4.jpeg";

import carpenter from "./pages/pics/carpenter.jpg";
import plumber from "./pages/pics/plumber.jpg";
import painter from "./pages/pics/painter.jpg";
import electrician from "./pages/pics/electrician.jpeg";
import cleaner from "./pages/pics/cleaner.jpeg";

import pic from "./pages/pics/pic.jpg";
import picss from "./pages/pics/picss.jpeg";
import picsss from "./pages/pics/picsss.jpg";

function LandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const images = [image1, image2, image3, image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const openModal = (message) => {
    setModalMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero Section with Image Slider */}
      <section className="hero-banner">
        <div className="hero-image">
          <img src={images[currentIndex]} alt="Slide" className="hero-img" />
        </div>
      </section>
      
      {/* Card Section with Images */}
      <div className="card-section">
        <div className="card">
        <img src={carpenter} alt="Carpenter" className="card-img" />
          <p>Carpenters are skilled craftsmen who work with wood to build, repair, or install structures such as furniture, doors, and cabinets.</p>
        </div>

        <div className="card">
          <img src={plumber} alt="Carpenter" className="card-img" />
          <p>Plumber</p>
        </div>
        
        <div className="card">
        <img src={painter} alt="Carpenter" className="card-img" />
          <p>Painter</p>
        </div>

        <div className="card">
          <img src={electrician} alt="Carpenter" className="card-img" />
          <p>Electrician</p>
        </div>

        <div className="card">
          <img src={cleaner} alt="Carpenter" className="card-img" />
          <p>Cleaner</p>
        </div>
      </div>

      {/* New Card Section */}
      <div className="testimonial-section">
        <h2>Read what our customers love about us</h2>
        <p>
          Over 200 companies from diverse sectors consult us to enhance the user experience of their products and services.
        </p>
        <p>
          We have helped companies increase their customer base and generate multifold revenue with our service.
        </p>
        <button>Read our success stories</button>
        <div className="testimonial-cards">
          <div className="testimonial-card">
          <img src={pic} alt="pic" className="testimonial-img" />            
          <div className="testimonial-content">
              <span className="quote-icon">“</span>
              <p>We had a great time collaborating with the Filament team. They have my high recommendation!</p>
              <h4>- Marnus Stephen</h4>
            </div>
          </div>
          <div className="testimonial-card">
          <img src={picss} alt="picss" className="testimonial-img" />            
          <div className="testimonial-content">
              <span className="quote-icon">“</span>
              <p>The team drastically improved our product's user experience & increased our business outreach.</p>
              <h4>- Andrew Jettpace</h4>
            </div>
          </div>
          <div className="testimonial-card">
          <img src={picsss} alt="picsss" className="testimonial-img" />            
          <div className="testimonial-content">
              <span className="quote-icon">“</span>
              <p>I absolutely loved working with the Filament team. Complete experts at what they do!</p>
              <h4>- Stacy Stone</h4>
            </div>
          </div>
        </div>
      </div>

      <section className="faq-py-10">
        <h2 className="faq-title">FAQ</h2>
        <div className="faq-container">
          <button onClick={() => openModal("We offer various services.")} className="faq-btn">
            <span className="faq-icon">+</span> What services do you provide?
          </button>
          <button onClick={() => openModal("You can book services through our website.")} className="faq-btn">
            <span className="faq-icon">+</span> How can I book a service?
          </button>
          <button onClick={() => openModal("Our workers are verified and skilled professionals.")} className="faq-btn">
            <span className="faq-icon">+</span> Are your workers verified?
          </button>
          <button onClick={() => openModal("You can contact us at support@example.com.")} className="faq-btn">
            <span className="faq-icon">+</span> How can I contact support?
          </button>
        </div>
      </section>

      <footer className="animated-footer">
  <div className="footer-container">
    <div className="footer-section about">
    <h3 onClick={() => scrollToSection("about")}>About</h3>      
    <p>
        We offer top-notch professional services in various sectors like plumbing, carpentry, electrical work, and cleaning.
      </p>
    </div>

    <div className="footer-section contact">
    <h3 onClick={() => scrollToSection("contact")}>Contact</h3>     
     <p>Email: support@example.com</p>
      <p>Phone: +1234567890</p>
    </div>

    <div className="footer-section address">
    <h3 onClick={() => scrollToSection("services")}>Services</h3>     
     <p>123 Service St, Suite 101</p>
      <p>City, Country</p>
    </div>
  </div>

</footer>      
    </div>
  );
}
    

export default LandingPage;
