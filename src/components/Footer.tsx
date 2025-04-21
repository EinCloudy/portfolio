import { Box, Container, Typography, Link, Divider, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.15,
      textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { icon: <GitHubIcon />, url: 'https://github.com/EinCloudy', name: 'GitHub' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/', name: 'LinkedIn' },
    { icon: <InstagramIcon />, url: 'https://www.instagram.com/', name: 'Instagram' },
    { icon: <TwitterIcon />, url: 'https://twitter.com/', name: 'Twitter' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: 8,
        position: 'relative',
        backdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.15)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'rgba(255, 255, 255, 0.1)',
          opacity: 0.8
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            mb: 4
          }}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  mb: { xs: 3, md: 0 },
                  background: 'linear-gradient(90deg, #2196f3, #f50057)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Joel Obi
              </Typography>
            </motion.div>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              {socialLinks.map((social, i) => (
                <motion.div
                  key={social.name}
                  custom={i}
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <IconButton
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: 'rgba(255, 255, 255, 0.95)',
                        background: 'rgba(255, 255, 255, 0.05)'
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Box>

          <Divider sx={{ 
            my: 3, 
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            width: '100%'
          }} />

          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: 2, sm: 0 }
          }}>
            <motion.div variants={itemVariants}>
              <Typography 
                variant="body2" 
                color="rgba(255, 255, 255, 0.6)"
                align="center"
              >
                &copy; {currentYear} Joel Obi. All rights reserved.
              </Typography>
            </motion.div>

            <Box sx={{ 
              display: 'flex', 
              gap: 3,
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <motion.div variants={itemVariants}>
                <Link
                  component={RouterLink}
                  to="/legal-notice"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'rgba(255, 255, 255, 0.9)',
                      textDecoration: 'none'
                    }
                  }}
                >
                  Legal Notice
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  component={RouterLink}
                  to="/privacy-policy"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'rgba(255, 255, 255, 0.9)',
                      textDecoration: 'none'
                    }
                  }}
                >
                  Privacy Policy
                </Link>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer; 