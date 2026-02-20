import { Link, useLocation } from 'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1199);
  const isHome = location.pathname === '/';
  const isBlog = location.pathname === '/blog';

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const closeMenu = () => {
    if (isMobile) setIsMobileNavActive(false);
  };

  useEffect(() => {
    setIsMobileNavActive(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1199);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 1020,
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
    padding: '20px 0',
    transition: 'all 0.5s',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    width: '100%',
    padding: '0 20px',
    flexWrap: 'wrap',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto',
  };

  const navmenuStyle = {
    display: isMobile ? (isMobileNavActive ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    listStyle: 'none',
    backgroundColor: isMobile ? '#fff' : 'transparent',
    position: isMobile ? 'fixed' : 'static',
    top: isMobile ? '50%' : 'auto',
    left: isMobile ? '50%' : 'auto',
    transform: isMobile ? 'translate(-50%, -50%)' : 'none',
    width: isMobile ? '80%' : 'auto',
    borderRadius: isMobile ? '12px' : '0',
    boxShadow: isMobile ? '0 8px 30px rgba(0, 0, 0, 0.1)' : 'none',
    padding: isMobile ? '40px 20px' : '0',
    zIndex: 9999,
    justifyContent: 'center',
    gap: isMobile ? '20px' : '0',
    transition: 'all 0.3s ease-in-out',
  };

  const navItemStyle = {
    padding: '10px 15px',
    color: '#333',
    fontWeight: 500,
    fontSize: '15px',
    textDecoration: 'none',
    transition: '0.3s',
  };

  // ✅ Updated Active Link Theme
  const activeLinkStyle = {
    color: '#48A111',
    borderBottom: '2px solid #48A111',
  };

  // ✅ Updated Button Theme
  const btnStyle = {
    color: '#fff',
    backgroundColor: '#25671E',
    fontSize: '14px',
    padding: '8px 26px',
    borderRadius: '50px',
    textDecoration: 'none',
    transition: '0.3s',
    whiteSpace: 'nowrap',
    marginTop: '-12px',
  };

  const toggleIconStyle = {
    fontSize: '28px',
    cursor: 'pointer',
    marginLeft: '20px',
    color: '#25671E',
    display: 'block',
  };

  const logoImgStyle = {
    height: 'auto',
    width: 'clamp(180px, 25vw, 255px)',
    marginRight: '10px',
    maxWidth: '100%',
  };

  const mobileOverlayStyle = {
    display: isMobile && isMobileNavActive ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 9998,
  };

  const closeBtnStyle = {
    position: 'absolute',
    top: '20px',
    right: '30px',
    fontSize: '32px',
    color: '#25671E',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle} onClick={closeMenu}>
          <img src={logo} alt="WeMovers Logo" style={logoImgStyle} />
        </Link>

        {isMobile && (
          <i
            className={`bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}
            style={toggleIconStyle}
            onClick={toggleMobileNav}
          ></i>
        )}

        {isMobile && isMobileNavActive && (
          <div style={mobileOverlayStyle} onClick={closeMenu}></div>
        )}

        <ul style={navmenuStyle}>
          {isMobile && (
            <span style={closeBtnStyle} onClick={toggleMobileNav}>
              &times;
            </span>
          )}
          <li>
            <Link
              to="/"
              style={isHome ? { ...navItemStyle, ...activeLinkStyle } : navItemStyle}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <HashLink smooth to="/#about" style={navItemStyle} onClick={closeMenu}>
              About Us
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#mission" style={navItemStyle} onClick={closeMenu}>
              Mission
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" style={navItemStyle} onClick={closeMenu}>
              Contact Us
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#services" style={navItemStyle} onClick={closeMenu}>
              Services
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#faqs" style={navItemStyle} onClick={closeMenu}>
              Faqs
            </HashLink>
          </li>
          <li>
            <Link
              to="/blog"
              style={isBlog ? { ...navItemStyle, ...activeLinkStyle } : navItemStyle}
              onClick={closeMenu}
            >
              Blog
            </Link>
          </li>
          {isMobile && (
            <li>
              <a href="https://www.wemovers.ae/contact" style={btnStyle} onClick={closeMenu}>
                Free Quote
              </a>
            </li>
          )}
        </ul>

        {!isMobile && (
          <a href="https://www.wemovers.ae/contact" style={btnStyle}>
            Free Quote
          </a>
        )}
      </div>
    </header>
  );
};

export default Navbar;