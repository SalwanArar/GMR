import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <Typography variant="h1" sx={{ fontWeight: 700 }}>404</Typography>
      <Typography variant="h4" sx={{ fontWeight: 700 }}>Page Not Found</Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: '500px', my: 2 }}>
        We're sorry, the page you requested could not be found. Please check the URL and try again.
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
