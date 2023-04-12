import React from 'react';
import { Typography, TextField, Button, Box, Link, Grid } from '@mui/material';
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 10}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', gap: 1, mb: 10 }}>
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
            <Typography variant="h4" color={'text.primary'} gutterBottom>
                Contact Us
            </Typography>
            <Box component="form" maxWidth={'xl'} width={'50vw'} onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} >
                        <TextField color='secondary' label="First Name" name="firstName" fullWidth required />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField label="Last Name" name="lastName" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email" name="email" type='email'fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Phone Number" name="phoneNumber" type='tel' fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Subject" name="subject" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email Body" name="emailBody" fullWidth multiline required />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" sx={{ alignSelf: 'flex-end' }}>
                    Send Email
                </Button>
            </Box>
        </Box>
    );
}

export default ContactPage;
