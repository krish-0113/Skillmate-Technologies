/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleNavClick = (section) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    }
  };

  return (
    <nav className={`nav-container ${sticky ? 'dark-nav' : 'light-nav'}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="hero" smooth={true} offset={0} duration={500} className="btn">
              Home
            </ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => handleNavClick('hero')}>Home</RouterLink>
          )}
        </li>
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="program" smooth={true} offset={-280} duration={500} className="btn">
              Services
            </ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => handleNavClick('program')}>Services</RouterLink>
          )}
        </li>
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="about" smooth={true} offset={-150} duration={500} className="btn">
              About us
            </ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => handleNavClick('about')}>About us</RouterLink>
          )}
        </li>
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="campus" smooth={true} offset={-220} duration={500} className="btn">
              Campus
            </ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => handleNavClick('campus')}>Campus</RouterLink>
          )}
        </li>
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="contact" smooth={true} offset={-300} duration={500} className="btn">
              Contact us
            </ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => handleNavClick('contact')}>Contact us</RouterLink>
          )}
        </li>
        <li>
          {location.pathname === '/' ? (
            <ScrollLink to="testimonials" smooth={true} offset={-300} duration={500} className="btn">
              Testimonials
            </ScrollLink>
          ) : (
            <RouterLink to="/" onClick={() => handleNavClick('testimonials')}>Testimonials</RouterLink>
          )}
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <button onClick={handleLogout} className="btn2 btn btn-danger">Logout</button>
            </li>
            <li className="btn-login">
              <RouterLink to="/courses" className="btn2 btn btn-success">
                My Courses
              </RouterLink>
            </li>
          </>
        ) : (
          <>
            <li className="btn-login">
              <RouterLink to="/login" className="btn2 btn btn-success">
                Sign in
              </RouterLink>
            </li>
            <li className="btn-login">
              <RouterLink to="/enroll" className="btn2 btn btn-success">
                Enroll Now
              </RouterLink>
            </li>
          </>
        )}
      </ul>
      <img src={menu} className="menu" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
