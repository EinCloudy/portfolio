import { Box, Typography } from '@mui/material';
import { motion, Variants } from 'framer-motion';

const LoadingScreen = () => {
  const containerVariants: Variants = {
    initial: { 
      opacity: 1
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96],
        when: "beforeChildren"
      }
    }
  };

  const textVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      filter: 'blur(10px)',
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const loaderVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const dotVariants: Variants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: (i: number) => ({
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        ease: "easeInOut",
        delay: i * 0.2,
      }
    }),
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: '#000000'
      }}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, #111 0%, #000 100%)',
            zIndex: 0
          },
          '&::after': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(33, 150, 243, 0.03), transparent 70%)',
            zIndex: 1
          }
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={textVariants}
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3rem'
          }}
        >
          <Typography
            variant="h2"
            component={motion.div}
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem' },
              background: 'linear-gradient(45deg, #2196f3, #f50057)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
              textShadow: '0 0 30px rgba(33, 150, 243, 0.2)'
            }}
          >
            Joel Obi
          </Typography>
          <motion.div
            variants={loaderVariants}
            style={{
              display: 'flex',
              gap: '1.5rem',
              padding: '1.5rem',
              borderRadius: '40px',
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
            }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                custom={i}
                variants={dotVariants}
                style={{
                  width: '15px',
                  height: '15px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #2196f3, #f50057)',
                  boxShadow: '0 0 20px rgba(33, 150, 243, 0.3)',
                  filter: 'brightness(1.2)'
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default LoadingScreen; 