import { Box, Container, Typography } from "@mui/material";

function ProductAndServices() {
    return (
        <Box>
            <Typography variant="h3" component={ 'h2' } color={'text.primary'} sx={{ mb: 2, mt: 10, textAlign: 'center' }}>
                Products
            </Typography>
            <Container maxWidth={"md"} sx={{ mb: 5 }}>
                <Typography
                width={'100%'}
                variant="subtitle1"
                component={"p"}
                color={"text.primary"}
                align="justify">
                    <Typography variant="subtitle1" component={'span'} fontWeight={900} color={'secondary'}>{'GMR '}</Typography>
                    produces high purity metal ingots and processed plastic granules as raw materials to be sent to manufacturers
                    <Box component={'br'}/>
                    <Typography variant="subtitle1" component={'span'} fontWeight={900} color={'secondary'}>{'GMR '}</Typography>
                    provides waste recycling services to local and international clients
                </Typography>
            </Container>
        </Box>
    );
}

export default ProductAndServices;