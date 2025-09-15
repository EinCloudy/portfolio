import { Box, Typography, Container, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import VideocamIcon from '@mui/icons-material/Videocam';
import ComputerIcon from '@mui/icons-material/Computer';
import StorageIcon from '@mui/icons-material/Storage';
import BusinessIcon from '@mui/icons-material/Business';
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';

import { Interests } from '@mui/icons-material';

const Resume = () => {
  const containerRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const languagesRef = useRef(null);
  const hobbiesRef = useRef(null);

  useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const sectionHeaderStyle = {
    background: 'linear-gradient(90deg, #2196f3, #f50057)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    fontWeight: 'bold',
    mb: 4
  };

  const sectionStyle = {
    mb: 2.5,
    minHeight: '35vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const cardStyle = {
    p: 4,
    height: '100%',
    backdropFilter: 'blur(16px)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
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

  const timelineItemStyle = {
    position: 'relative',
    pb: 4,
    pl: 3,
    borderLeft: '2px solid rgba(255, 255, 255, 0.1)',
    '&:last-child': {
      pb: 0
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '-9px',
      top: '0',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    }
  };

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
    })
  };

  const scrollVariants = {
    hidden: { 
      opacity: 0,
      y: 100,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} ref={containerRef}>
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
          Resume
        </Typography>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Personal Information */}
        <Box sx={sectionStyle}>
          <motion.div 
            variants={itemVariants} 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Paper elevation={0} sx={cardStyle}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                Personal Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Name:</strong> Joel Obi
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Email:</strong> joel@obi-home.de
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Nationality:</strong> German
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Driver's License:</strong> Class B, Class A2
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Box>

        {/* Education */}
        <Box sx={sectionStyle} ref={educationRef}>
          <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Paper elevation={0} sx={cardStyle}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <SchoolIcon sx={{ mr: 1 }} />
                  Education
                </Box>
              </Typography>
              <Box>
                <Box sx={timelineItemStyle}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Computer Science Studies, Mannheim University of Applied Sciences
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Since September 2022
                  </Typography>
                </Box>

                <Box sx={timelineItemStyle}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Vocational College for Information and Communication Technology Assistant with University Entrance Qualification
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Werner-Siemens-Schule, September 2020 - July 2022
                  </Typography>
                </Box>

                <Box sx={timelineItemStyle}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Secondary School Certificate
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Feudenheim Realschule, September 2014 - July 2020
                  </Typography>
                </Box>

                <Box sx={timelineItemStyle}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Primary School
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Wallstadt-Grundschule, September 2010 - July 2014
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Box>

        {/* Practical Experience */}
        <Box sx={sectionStyle} ref={experienceRef}>
          <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Paper elevation={0} sx={cardStyle}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <WorkIcon sx={{ mr: 1 }} />
                  Professional Experience
                </Box>
              </Typography>
              <Box>
                <Box sx={timelineItemStyle}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    SAP SE, Walldorf
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Since September 2023
                  </Typography>
                  <Typography variant="body1">
                    Vocational Training as Application Developer (Fachinformatiker für Anwendungsentwicklung)
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      • Focus on enterprise software development
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      • Training in SAP technologies and software architecture
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      • Working on real-world business applications
                    </Typography>
                  </Box>
                </Box>

                <Box sx={timelineItemStyle}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Mercedes Benz, Mannheim
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    November 2018
                  </Typography>
                  <Typography variant="body1">
                    Internship as Manufacturing Mechanic
                  </Typography>
                </Box>

                <Box sx={timelineItemStyle}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Internationaler Bund, Mannheim
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    February 2018
                  </Typography>
                  <Typography variant="body1">
                    Internship in commercial administration and other areas
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>
        </Box>

        {/* Skills */}
        <Box sx={sectionStyle} ref={skillsRef}>
          <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Paper elevation={0} sx={cardStyle}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CodeIcon sx={{ mr: 1 }} />
                  IT Skills
                </Box>
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Programming Languages: JavaScript, TypeScript, Java, Python, C++, PHP" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Web Technologies: HTML5, CSS3, React, Node.js, i18next, Next.js, Tailwind CSS" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessIcon />
                  </ListItemIcon>
                  <ListItemText primary="SAP Technologies: UI5 Web Components, Cloud Foundry, Business Technology Platform" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <StorageIcon />
                  </ListItemIcon>
                  <ListItemText primary="Databases: MySQL, MongoDB, PostgreSQL, InfluxDB, MariaDB" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ComputerIcon />
                  </ListItemIcon>
                  <ListItemText primary="Platforms & Hardware: Docker, Arduino, Raspberry Pi, PC systems" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ComputerIcon />
                  </ListItemIcon>
                  <ListItemText primary="Operating Systems: macOS, Ubuntu, Fedora, Debian, Windows 11" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ComputerIcon />
                  </ListItemIcon>
                  <ListItemText primary="Development Environments: IntelliJ IDEA, PyCharm, VS Code, WebStorm, Xcode, Android Studio, Cursor" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ComputerIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tools & Services: GitHub, Notion, Trello, Cloudflare, Grafana, Jira" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ComputerIcon />
                  </ListItemIcon>
                  <ListItemText primary="Application Software: MS Word, MS Excel, MS PowerPoint" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <VideocamIcon />
                  </ListItemIcon>
                  <ListItemText primary="Video Editing: DaVinci Resolve" />
                </ListItem>
              </List>
            </Paper>
          </motion.div>
        </Box>

        {/* Languages */}
        <Box sx={sectionStyle} ref={languagesRef}>
          <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Paper elevation={0} sx={cardStyle}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LanguageIcon sx={{ mr: 1 }} />
                  Languages
                </Box>
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LanguageIcon />
                  </ListItemIcon>
                  <ListItemText primary="German (Native)" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LanguageIcon />
                  </ListItemIcon>
                  <ListItemText primary="English (Good proficiency)" />
                </ListItem>
              </List>
            </Paper>
          </motion.div>
        </Box>

        {/* Interests */}
        <Box sx={sectionStyle} ref={hobbiesRef}>
          <motion.div 
            variants={scrollVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Paper elevation={0} sx={cardStyle}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Interests sx={{ mr: 1 }} />
                  Hobbies & Interests
                </Box>
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <TwoWheelerIcon />
                  </ListItemIcon>
                  <ListItemText primary="Motorcycling" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ComputerIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Hardware & Software" 
                    secondary="Setup and installation of a private home network with servers and smart home integration"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <VideocamIcon />
                  </ListItemIcon>
                  <ListItemText primary="Video Production" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DirectionsBikeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cycling" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ScubaDivingIcon />
                  </ListItemIcon>
                  <ListItemText primary="Scuba Diving" />
                </ListItem>
              </List>
            </Paper>
          </motion.div>
        </Box>

        <Box sx={{ textAlign: 'right', mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Updated: May 2024
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Resume; 