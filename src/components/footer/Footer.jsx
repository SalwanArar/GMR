import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box
        component='footer'
        sx={{
            width: 'auto',
            background: '#212121',
            color: '#fff',
            py: 4,
            pr: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Grid container rowSpacing= {{xs: 1}} maxWidth='xl'>
                <Grid item xs={12} sm={6}>
                    <Typography
                    variant='body2'
                    align='start'
                    sx={{
                        color: '#bcbcbc',
                        textAlign: { xs: 'center', sm: 'start' }
                    }}>
                        © 2023 CinoTrends. All rights reserved.
                    </Typography>
                </Grid>
                <Grid
                item
                xs={12}
                sm={6}
                sx={{
                    display: 'flex',
                    justifyContent: { xs:'center', sm:'flex-end' },
                    alignItems: 'center',
                }}>
                    <FacebookIcon xs={{
                        marginLeft: 2,
                        color: '#fff',
                        cursor: 'pointer',
                        '&:hover': {
                            color: '#bcbcbc',
                        },
                    }}/>
                    <LinkedInIcon sx={{
                        marginLeft: 2,
                        color: '#fff',
                        cursor: 'pointer',
                        '&:hover': {
                            color: '#bcbcbc',
                        },
                    }}/>
                    <InstagramIcon
                    sx={{
                        marginLeft: 2,
                        color: '#fff',
                        cursor: 'pointer',
                        '&:hover': {
                            color: '#bcbcbc',
                        },
                    }}/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
