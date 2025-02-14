import React, { useState } from "react";
import logo from './pages/pics/hplogo.png';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the menu if open
  };

  return (
    <nav>
      {/* Logo */}
      <Link to="/" className="title">
        <img src={logo} className="logo-img" alt="Helper Service Logo" />
      </Link>

      {/* Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>

      {/* Navigation Links */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#about" onClick={() => scrollToSection("about")}>About</a>
        </li>
        <li>
          <a href="#services" onClick={() => scrollToSection("services")}>Services</a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>
        </li>
      </ul>

      {/* Login/Signup Icon */}
      <div className="auth-icon">
        <Link to="/login">
          <FiUser className="icon" />
        </Link>
      </div>
    </nav>
  );
};
