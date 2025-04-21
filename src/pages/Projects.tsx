import { Box, Typography, Container, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'PACEYE - AI-powered motorcycle tracking',
    description: 'AI-powered motorcycle tracking system with real-time data analysis and alerts',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Docker', 'GitHub Actions', 'i18next'],
    link: 'https://paceye.com',
  },
  {
    title: 'SPL Token',
    description: 'My own SPL Token on the Solana blockchain',
    technologies: ['Blockchain', 'Solana'],
    link: 'https://solscan.io/token/EaxUnKBSP18HMvxRyjMogXd3HYzi8JjGzJ4tdWcC2LtY',
  },
  {
    title: 'Home Automation',
    description: 'Smart home system with Raspberry Pi and various sensors',
    technologies: ['Home Assistant', 'Raspberry Pi', 'Python'],
  },
  {
    title: 'Network Infrastructure',
    description: 'Setup and management of a private network with various services',
    technologies: ['Docker', 'Ubuntu', 'Next Cloud', 'Grafana'],
  },
];

const Projects = () => {
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

  const chipVariants = {
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
      scale: 1.05,
      transition: { duration: 0.2 }
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
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
    mb: 2,
    minHeight: '64px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    justifyContent: 'center',
    lineHeight: 1.3
  };

  const chipStyle = {
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: 'rgba(255, 255, 255, 0.85)',
    transition: 'all 0.3s ease',
    py: 0.5,
    fontWeight: 500,
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.07)',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
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
          My Projects
        </Typography>
        <Typography variant="body1" paragraph>
          Here are some of my most interesting projects. Each project has its own
          challenges and solutions that have helped me grow as a developer.
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
          {projects.map((project, index) => (
            <Box 
              key={project.title} 
              sx={{ 
                flexBasis: { xs: '100%', sm: '45%', md: '30%' },
                minWidth: { xs: '100%', sm: '45%', md: '30%' },
                display: 'flex'
              }}
            >
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                custom={index}
                style={{ height: '100%', width: '100%' }}
              >
                <Card sx={cardStyle}>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      sx={cardTitleStyle}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        mb: 3,
                        minHeight: '60px'
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={tech}
                          custom={i}
                          variants={chipVariants}
                          whileHover="hover"
                        >
                          <Chip
                            label={tech}
                            size="small"
                            color="default"
                            variant="outlined"
                            sx={chipStyle}
                          />
                        </motion.div>
                      ))}
                    </Box>
                  </CardContent>
                  {project.link && (
                    <CardActions sx={{ p: 3, pt: 0 }}>
                      <Button
                        size="medium"
                        color="inherit"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        sx={{ 
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(8px)',
                          transition: 'all 0.3s ease',
                          px: 3,
                          '&:hover': {
                            background: 'rgba(255, 255, 255, 0.07)',
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                          }
                        }}
                      >
                        Learn more
                      </Button>
                    </CardActions>
                  )}
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default Projects; 