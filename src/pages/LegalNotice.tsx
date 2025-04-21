import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const LegalNotice = () => {
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
          Legal Notice
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Information according to § 5 TMG
          </Typography>
          <Typography variant="body1" paragraph>
            Joel Obi<br />
            Herrmannstr. 11<br />
            68259 Mannheim<br />
            Germany
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Contact
          </Typography>
          <Typography variant="body1" paragraph>
            Phone: +49 123 456789<br />
            Email: joel@obi-home.de
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Responsible for content according to § 55 Abs. 2 RStV
          </Typography>
          <Typography variant="body1" paragraph>
            Joel Obi<br />
            Herrmannstr. 11<br />
            68259 Mannheim<br />
            Germany
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Liability for Content
          </Typography>
          <Typography variant="body1" paragraph>
            As a service provider, we are responsible for our own content on these pages in accordance with general law pursuant to § 7 para. 1 TMG. According to §§ 8 to 10 TMG, however, we are not obligated as a service provider to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
          </Typography>
          <Typography variant="body1" paragraph>
            Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific infringement. Upon becoming aware of such violations, we will remove this content immediately.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Liability for Links
          </Typography>
          <Typography variant="body1" paragraph>
            Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.
          </Typography>
          <Typography variant="body1">
            However, a permanent control of the content of the linked pages is not reasonable without concrete evidence of a violation of law. If we become aware of any legal infringements, we will remove such links immediately.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default LegalNotice; 