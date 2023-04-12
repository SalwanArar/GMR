import React from 'react';
import { Typography, TextField, Button, Box, Link, Grid, styled } from '@mui/material';
import { Email, LanguageOutlined, Phone } from '@mui/icons-material';

function ContactForm({icon, href, child}) {
    return(
        <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                { icon }
                <Typography variant="subtitle2" color="text.secondary">
                    <Link color={'secondary'} href={ href }>
                        { child }
                    </Link>
                </Typography>
        </Box>
    );
}

function CssTextField({label, name, type, multiline, rows}) {
    const CssTextField = styled(TextField)({
        '& label': {
            color: '#0F5659',
        },
        '& .MuiFilledInput-root': {
            background: '#FFF8',
            color: '#000',
        }
    });
      
    return (
        <CssTextField
        color='primary'
        variant='filled'
        label={ label }
        name={ name }
        type={ type }
        multiline={ multiline }
        rows={ rows }
        fullWidth
        required/>
        );
}

function ContactPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
            const firstName = data.get('firstName');
            const lastName = data.get('lastName');
            const email = data.get('email');
            const phoneNumber = data.get('phoneNumber');
            const subject = data.get('subject');
            const emailBody = data.get('emailBody');
        window.location.href = `mailto:info@gmr-recycling.com?subject=${subject}&body=Name: ${firstName} ${lastName}%0APhone: ${phoneNumber}%0AEmail: ${email}%0A${emailBody}`;
    };

    return (
        <Box maxWidth={'xl'}
        sx={{
            alignSelf: 'center',
            display: 'flex',
            gap: 5,
            flexDirection:"column",
            justifyContent: 'start',
            alignItems: 'start',
            // flexFlow: 'wrap',
            my: 10,
            mx: {sm: 5, xs: 2}
        }}>
            <Box>
                <Typography variant="h4" color={'text.primary'} gutterBottom>
                    Contact Us
                </Typography>
                <Box component="form" onSubmit={handleSubmit}
                sx={{
                    flexBasis: 0,
                    display: 'flex',
                    mx:{ xs: 2, md: 'auto' },
                    flexDirection: 'column',
                    gap: 2,
                    background: '#FCB32B11',
                    p: 4,
                    borderRadius: '8px'
                }}>
                    <Grid container columnSpacing={4} rowSpacing={3}>
                        <Grid item xs={12} md={6} >
                            {/* <TextField color='primary' label="First Name" name="firstName" variant='filled' fullWidth required/> */}
                            <CssTextField label="First Name" name="firstName"/>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CssTextField label="Last Name" name="lastName"/>
                        </Grid>
                        <Grid item xs={12}>
                            <CssTextField label="Email" name="email" type='email'/>
                        </Grid>
                        <Grid item xs={12}>
                            <CssTextField label="Phone Number" name="phoneNumber" type='tel'/>
                        </Grid>
                        <Grid item xs={12}>
                            <CssTextField label="Subject" name="subject"/>
                        </Grid>
                        <Grid item xs={12}>
                            <CssTextField color='secondary' label="Body" name="emailBody" fullWidth multiline required rows={ 8 }/>
                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained" sx={{ alignSelf: 'flex-end' }}>
                        Send Email
                    </Button>
                </Box>
            </Box>
            <Box width={ '25rem' } sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', gap: 1, mb: 10 }}>
                <Typography variant="h4" component={'h4'} color={'text.primary'}>
                    Contact Information:
                </Typography>
                <ContactForm
                href={"tel:+971501019947"}
                child={"+971 50 101 9947"}
                icon={
                    <Phone color={'primary'}/>
                }/>
                <ContactForm
                href={"mailto:info@gmr-recycling.com"}
                child={"info@gmr-recycling.com"}
                icon={
                    <Email color={'primary'}/>
                }/>
                <ContactForm
                href={"https://www.gmr-recycling.com/"}
                child={"www.gmr-recycling.com"}
                icon={
                    <LanguageOutlined color={'primary'}/>
                }/>
            </Box>
        </Box>
    );
}

export default ContactPage;
