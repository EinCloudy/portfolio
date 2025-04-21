import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sectionHeaderStyle = {
    background: 'linear-gradient(90deg, #2196f3, #f50057)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
    fontWeight: 'bold',
    mb: 4
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
          Privacy Policy
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            1. Privacy at a Glance
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
            General Information
          </Typography>
          <Typography variant="body1" paragraph>
            The following notes provide a simple overview of what happens to your personal data 
            when you visit this website. Personal data is any data that can be used to identify you 
            personally. For detailed information on the subject of data protection, please refer 
            to our privacy policy listed below this text.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 2 }}>
            Data Collection on This Website
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Who is responsible for data collection on this website?</strong><br />
            The data processing on this website is carried out by the website operator. You can find their 
            contact details in the Legal Notice of this website.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>How do we collect your data?</strong><br />
            Your data is collected when you provide it to us. This could be data that you enter in a contact form, 
            for example.
          </Typography>
          <Typography variant="body1" paragraph>
            Other data is collected automatically or with your consent by our IT systems when you visit the website. 
            This is primarily technical data (e.g., internet browser, operating system, or time of page view). 
            This data is collected automatically as soon as you enter this website.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            2. Hosting and Content Delivery Networks (CDN)
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
            External Hosting
          </Typography>
          <Typography variant="body1" paragraph>
            This website is hosted by an external service provider (host provider). The personal data 
            collected on this website is stored on the servers of the host. This may include IP addresses, 
            contact requests, meta and communication data, contract data, contact details, names, website 
            access, and other data generated via a website.
          </Typography>
          <Typography variant="body1">
            The host is used for the purpose of fulfilling contracts with our potential and existing 
            customers (Art. 6 para. 1 lit. b GDPR) and in the interest of a secure, fast, and efficient 
            provision of our online services by a professional provider (Art. 6 para. 1 lit. f GDPR).
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            3. General Information and Mandatory Information
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
            Data Protection
          </Typography>
          <Typography variant="body1" paragraph>
            The operators of these pages take the protection of your personal data very seriously. 
            We treat your personal data confidentially and in accordance with the statutory data 
            protection regulations and this privacy policy.
          </Typography>
          <Typography variant="body1" paragraph>
            When you use this website, various personal data is collected. Personal data is data that 
            can be used to identify you personally. This privacy policy explains what information we 
            collect and what we use it for. It also explains how and for what purpose this happens.
          </Typography>
          <Typography variant="body1">
            Please note that data transmission over the Internet (e.g., when communicating via email) 
            may have security vulnerabilities. Complete protection of data against access by third 
            parties is not possible.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default PrivacyPolicy; 