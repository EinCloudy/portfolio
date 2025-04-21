import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <div className="navbar-content">
          <motion.div
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="navbar-logo"
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Joel Obi</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="navbar-desktop">
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={item.path}
                  className={`navbar-link ${
                    location.pathname === item.path ? 'navbar-link-active' : ''
                  }`}
                >
                  {item.label}
                  <motion.span
                    className="navbar-link-indicator"
                    style={{
                      width: location.pathname === item.path ? '100%' : '0%',
                      opacity: location.pathname === item.path ? 1 : 0,
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: '2px',
                      background: 'linear-gradient(to right, #2196f3, #f50057)',
                      boxShadow: '0 0 8px rgba(33, 150, 243, 0.5)',
                      borderRadius: '4px'
                    }}
                    animate={{
                      width: location.pathname === item.path ? '100%' : '0%',
                      opacity: location.pathname === item.path ? 1 : 0
                    }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 350, 
                      damping: 30,
                      delay: location.pathname === item.path ? 0 : 0.1
                    }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="navbar-mobile-button-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="navbar-mobile-button"
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="navbar-mobile-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  initial={false}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    type: "tween" 
                  }}
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="navbar-mobile-menu navbar-mobile-menu-open"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeInOut" 
            }}
          >
            <motion.div className="navbar-mobile-links">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ 
                    delay: i * 0.05,
                    duration: 0.2 
                  }}
                >
                  <Link
                    to={item.path}
                    className={`navbar-mobile-link ${
                      location.pathname === item.path
                        ? 'navbar-mobile-link-active'
                        : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                className="navbar-mobile-icon-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.2 }}
              >
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 