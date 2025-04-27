import { Box, Typography, Container, Paper, Chip, Theme } from '@mui/material';
import { motion } from 'framer-motion';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import VideocamIcon from '@mui/icons-material/Videocam';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const About = () => {
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C++', 'PHP']
    },
    {
      name: "Web Technologies",
      skills: ['HTML5', 'CSS3', 'React', 'Node.js',  "i18next", "Next.js", "Tailwind CSS"]
    },
    {
      name: "Databases",
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'InfluxDB', 'Redis']
    },
    {
      name: "Platforms & Hardware",
      skills: ['Docker', 'Arduino', 'Raspberry Pi']
    }
  ];

  const techCategories = [
    {
      name: "Operating Systems",
      techs: ['macOS', 'Ubuntu', 'Fedora', 'Debian', 'Windows 11']
    },
    {
      name: "Development Environments",
      techs: ['IntelliJ IDEA', 'PyCharm', 'VS Code', 'WebStorm', 'Xcode', 'Android Studio', 'Cursor']
    },
    {
      name: "Tools & Services",
      techs: ['GitHub', 'Notion', 'Trello', 'Cloudflare', 'Grafana', 'Jira']
    }
  ];

  const hobbies = [
    {
      name: "Motorcycling",
      description: "My main hobby is riding motorcycles. I love exploring new routes and riding in the mountains.",
      icon: <TwoWheelerIcon sx={{ fontSize: 40 }} />,
      primary: true
    },
    {
      name: "Drone Flying",
      description: "I enjoy flying drones and capturing aerial photography and videos of landscapes.",
      icon: <AirplanemodeActiveIcon sx={{ fontSize: 40 }} />
    },
    {
      name: "Video Editing",
      description: "I edit videos using DaVinci Resolve and other software to create high-quality content.",
      icon: <VideocamIcon sx={{ fontSize: 40 }} />
    },
    {
      name: "Content Creation",
      description: "I create digital content for social media platforms and enjoy the creative process.",
      icon: <YouTubeIcon sx={{ fontSize: 40 }} />
    },
    {
      name: "Mobile Development",
      description: "I develop mobile applications and enjoy creating user-friendly experiences.",
      icon: <SmartphoneIcon sx={{ fontSize: 40 }} />
    }
  ];

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
    width: '100%',
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

  const hobbyCardStyle = {
    ...cardStyle,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    '&::before': {
      ...cardStyle['&::before'],
      background: (theme: Theme) => theme.palette.primary.main,
      opacity: 0
    },
    '&:hover::before': {
      opacity: 0.6,
      height: '6px'
    }
  };

  const hobbyIconStyle = {
    mb: 2,
    p: 2,
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.03)',
    color: 'rgba(255, 255, 255, 0.7)',
    transition: 'all 0.3s ease'
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
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Hello! I'm Joel Obi, a 20-year-old developer with a passion for technology and programming.
          I've been working with Java since 2018, web development and Python since 2019, and I also have
          experience with Swift, C# and C++ (Arduino).
        </Typography>
        <Typography variant="body1" paragraph>
          My goal is to continuously expand my knowledge and discover new technologies.
          Besides programming, I'm interested in motorcycling, various sports,
          home automation, and network infrastructure.
        </Typography>
      </motion.div>

      {/* Hobbies Section Header */}
      <Box sx={{ mt: 8, mb: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography 
            variant="h3" 
            component="h2"
            sx={sectionHeaderStyle}
          >
            Hobbies
          </Typography>
        </motion.div>
      </Box>

      {/* Hobbies Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hobbies-container"
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 3, 
            mt: 2,
            justifyContent: 'center'
          }}
        >
          {hobbies.map((hobby, index) => (
            <Box 
              key={hobby.name} 
              sx={{ 
                flexBasis: { xs: '100%', sm: '45%', md: '28%', lg: hobby.primary ? '38%' : '28%' },
                minWidth: { xs: '100%', sm: '45%', md: '28%', lg: hobby.primary ? '38%' : '28%' },
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
                  sx={{
                    ...hobbyCardStyle,
                    p: 3,
                    '&::before': {
                      ...hobbyCardStyle['&::before'],
                      background: hobby.primary ? 'linear-gradient(90deg, #2196f3, #f50057)' : 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  <Box sx={hobbyIconStyle}>
                    {hobby.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 1.5
                    }}
                  >
                    {hobby.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.6,
                      fontSize: '0.9rem'
                    }}
                  >
                    {hobby.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Box>
      </motion.div>

      {/* Skills Section Header */}
      <Box sx={{ mt: 8, mb: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Typography 
            variant="h3" 
            component="h2"
            sx={sectionHeaderStyle}
          >
            Skills
          </Typography>
        </motion.div>
      </Box>

      {/* Skills Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="skills-container"
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4, 
            mt: 2,
            justifyContent: 'center'
          }}
        >
          {skillCategories.map((category, index) => (
            <Box 
              key={category.name} 
              sx={{ 
                flexBasis: { xs: '100%', sm: '45%', md: '45%', lg: '22%' },
                minWidth: { xs: '100%', sm: '45%', md: '45%', lg: '22%' },
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
                  sx={{
                    ...cardStyle,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <Typography 
                    variant="h5" 
                    component="h3"
                    sx={cardTitleStyle}
                  >
                    {category.name}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 1,
                    flexGrow: 1,
                    justifyContent: 'center'
                  }}>
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        custom={i}
                        variants={chipVariants}
                        whileHover="hover"
                      >
                        <Chip
                          label={skill}
                          color="default"
                          variant="outlined"
                          sx={chipStyle}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Box>
      </motion.div>

      {/* Technologies Section Header */}
      <Box sx={{ mt: 8, mb: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Typography 
            variant="h3" 
            component="h2"
            sx={sectionHeaderStyle}
          >
            Technologies & Tools
          </Typography>
        </motion.div>
      </Box>

      {/* Technologies Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="tech-container"
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4, 
            mt: 2,
            justifyContent: 'center'
          }}
        >
          {techCategories.map((category, index) => (
            <Box 
              key={category.name} 
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
                <Paper 
                  elevation={0}
                  sx={{
                    ...cardStyle,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    '&::before': {
                      ...cardStyle['&::before'],
                      background: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  <Typography 
                    variant="h5"
                    component="h3"
                    sx={cardTitleStyle}
                  >
                    {category.name}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 1,
                    flexGrow: 1,
                    justifyContent: 'center'
                  }}>
                    {category.techs.map((tech, i) => (
                      <motion.div
                        key={tech}
                        custom={i}
                        variants={chipVariants}
                        whileHover="hover"
                      >
                        <Chip
                          label={tech}
                          color="default"
                          variant="outlined"
                          sx={chipStyle}
                        />
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

export default About; 