import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition>
            <Projects />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
        <Route path="/resume" element={
          <PageTransition>
            <Resume />
          </PageTransition>
        } />
        <Route path="/legal-notice" element={
          <PageTransition>
            <LegalNotice />
          </PageTransition>
        } />
        <Route path="/privacy-policy" element={
          <PageTransition>
            <PrivacyPolicy />
          </PageTransition>
        } />
        {/* Catch-All Route - leitet unbekannte Pfade zur Startseite weiter */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#000000',
        paper: 'rgba(0, 0, 0, 0.7)',
      },
      primary: {
        main: '#2196f3',
        light: '#64b5f6',
        dark: '#1976d2',
      },
      secondary: {
        main: '#f50057',
        light: '#ff4081',
        dark: '#c51162',
      },
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.7)',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
              transform: 'translateY(-4px)'
            }
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            textTransform: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            overflow: 'hidden',
            '&:hover': {
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
              transform: 'translateY(-4px)'
            }
          }
        }
      }
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 1000);
    }
  }, [loading]);

  const mainContentVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.5
      }
    }
  };

  const navbarVariants = {
    initial: {
      opacity: 0,
      y: -10
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.7
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Box sx={{ 
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          <AnimatePresence mode="wait">
            {loading && <LoadingScreen key="loading" />}
          </AnimatePresence>
          
          <motion.div
            variants={mainContentVariants}
            initial="initial"
            animate={!loading ? "animate" : "initial"}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              width: '100%'
            }}
          >
            <motion.div
              variants={navbarVariants}
              initial="initial"
              animate={!loading ? "animate" : "initial"}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000
              }}
            >
              <Navbar />
            </motion.div>
            
            <Box component="main" sx={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              zIndex: 1
            }}>
              <AnimatedRoutes />
            </Box>
            <Footer />
          </motion.div>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
