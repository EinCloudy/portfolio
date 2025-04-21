import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Hi, I'm Joel Obi 👋
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Full-Stack Developer & Technology Enthusiast
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="body1" paragraph sx={{ maxWidth: '600px', mx: 'auto' }}>
            Welcome to my digital world! I am a passionate developer
            specializing in full-stack development. With my experience in
            various technologies and my attention to detail, I create modern
            and efficient solutions.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              size="large"
            >
              My Projects
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              size="large"
            >
              Contact
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home; 