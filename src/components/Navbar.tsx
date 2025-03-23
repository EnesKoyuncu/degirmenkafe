import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll olayını dinle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobil menü açıldığında body scrollunu engelle
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Menüye tıklandığında menüyü kapat
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img
            src="/degirmenKafeLogo.png"
            alt="Değirmen Kafe Logo"
            className="navbar-logo-img"
          />
          <span className="navbar-logo-text">Değirmen Kafe</span>
        </div>

        {/* Mobil menü butonu */}
        <div className="navbar-menu-toggle">
          <button
            type="button"
            className="navbar-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            {isMenuOpen ? (
              <svg
                className="navbar-menu-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="navbar-menu-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop menü */}
        <div className="navbar-links">
          <a href="#anasayfa" className="navbar-link">
            Ana Sayfa
          </a>
          <a href="#hakkimizda" className="navbar-link">
            Hakkımızda
          </a>
          <a href="#menu" className="navbar-link">
            Menü
          </a>
          <a href="#galeri" className="navbar-link">
            Galeri
          </a>
          <a href="#iletisim" className="navbar-link">
            İletişim
          </a>
        </div>
      </div>

      {/* Mobil menü */}
      <div
        className={`navbar-mobile ${isMenuOpen ? "navbar-mobile-open" : ""}`}
      >
        <div className="container">
          <a
            href="#anasayfa"
            className="navbar-mobile-link"
            onClick={handleMenuClick}
          >
            Ana Sayfa
          </a>
          <a
            href="#hakkimizda"
            className="navbar-mobile-link"
            onClick={handleMenuClick}
          >
            Hakkımızda
          </a>
          <a
            href="#menu"
            className="navbar-mobile-link"
            onClick={handleMenuClick}
          >
            Menü
          </a>
          <a
            href="#galeri"
            className="navbar-mobile-link"
            onClick={handleMenuClick}
          >
            Galeri
          </a>
          <a
            href="#iletisim"
            className="navbar-mobile-link"
            onClick={handleMenuClick}
          >
            İletişim
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
