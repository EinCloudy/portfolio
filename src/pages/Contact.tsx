import { Box, Typography, Container, Button, Link, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import CoffeeIcon from '@mui/icons-material/Coffee';
import WebIcon from '@mui/icons-material/Web';

const contactItems = [
  {
    category: "Direct Communication",
    items: [
      {
        icon: <EmailIcon />,
        text: "cloudlesstv@magic4d.net",
        link: "mailto:cloudlesstv@magic4d.net"
      },
      {
        icon: <ChatIcon />,
        text: "@eincloudy",
        link: "https://discord.com/users/eincloudy"
      }
    ]
  },
  {
    category: "Social Media & Platforms",
    items: [
      {
        icon: <GitHubIcon />,
        text: "GitHub",
        link: "https://github.com/EinCloudy"
      },
      {
        icon: <WebIcon />,
        text: "Social Media Profiles",
        link: "https://1cloudy.de"
      }
    ]
  },
  {
    category: "Support & Projects",
    items: [
      {
        icon: <CoffeeIcon />,
        text: "Support Me",
        link: "https://www.buymeacoffee.com/joelobi",
        primary: true
      }
    ]
  }
];

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.21, 0.5, 0.23, 0.95],
        delay: i * 0.1
      }
    }),
    hover: {
      opacity: 1,
      filter: "brightness(1.1)",
      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.25)",
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + (i * 0.06),
        duration: 0.35,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.2
      }
    }
  };

  const sectionHeaderStyle = {
    background: 'linear-gradient(90deg, #2196f3, #f50057)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    fontWeight: 'bold',
    mb: 4
  };

  const cardStyle = {
    p: 4,
    height: '100%',
    backdropFilter: 'blur(16px)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.21, 0.5, 0.23, 0.9)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'rgba(255, 255, 255, 0.1)',
      opacity: 0.8,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      backdropFilter: 'blur(20px)',
      backgroundColor: 'rgba(20, 20, 20, 0.7)',
      border: '1px solid rgba(255, 255, 255, 0.15)'
    },
    '&:hover::before': {
      opacity: 1,
      height: '6px',
      background: 'rgba(255, 255, 255, 0.2)'
    }
  };

  const cardTitleStyle = {
    fontWeight: 'bold',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    pb: 1,
    mb: 3,
    minHeight: '64px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    justifyContent: 'center',
    lineHeight: 1.3
  };

  const buttonStyle = {
    p: 1.5,
    borderRadius: '10px',
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: 'rgba(255, 255, 255, 0.85)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontWeight: 500,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.07)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'rgba(255, 255, 255, 0.95)',
    fontWeight: 600,
    '&:hover': {
      ...buttonStyle['&:hover'],
      backgroundColor: 'rgba(255, 255, 255, 0.15)'
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={sectionHeaderStyle}
        >
          Contact
        </Typography>
        <Typography variant="body1" paragraph>
          I welcome any kind of contact! Whether it's about a project,
          a collaboration, or just a friendly conversation.
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4, 
            mt: 4,
            justifyContent: 'center'
          }}
        >
          {contactItems.map((category, index) => (
            <Box 
              key={category.category} 
              sx={{ 
                flexBasis: { 
                  xs: '100%', 
                  md: category.category === "Direct Communication" ? '100%' : '45%'
                },
                minWidth: { 
                  xs: '100%', 
                  md: category.category === "Direct Communication" ? '100%' : '45%'
                },
                display: 'flex'
              }}
            >
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                custom={index}
                style={{ height: '100%', width: '100%' }}
              >
                <Paper 
                  elevation={0}
                  sx={cardStyle}
                >
                  <Typography 
                    variant="h5" 
                    component="h2" 
                    sx={cardTitleStyle}
                  >
                    {category.category}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {category.items.map((item, i) => (
                      <motion.div 
                        key={item.text} 
                        variants={buttonVariants}
                        custom={i}
                        whileHover="hover"
                      >
                        <Button
                          fullWidth
                          startIcon={item.icon}
                          component={Link}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="text"
                          sx={'primary' in item ? primaryButtonStyle : buttonStyle}
                        >
                          {item.text}
                        </Button>
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact; 