import { Box, Typography } from "@mui/material";
import AboutUsTemplate from "./AboutUsTamplate";

function ProductAndServices() {
    return (
        <AboutUsTemplate title={"PRODUCTS & SERVICES"}>
            <Typography
                width={'100%'}
                variant="subtitle1"
                component={"p"}
                color={"text.primary"}
                align="justify">
                    <Typography variant="subtitle1" component={'span'} fontWeight={900} color={'primary'}>{'GMR '}</Typography>
                    produces high purity metal ingots and processed plastic granules as raw materials to be sent to manufacturers
                    <Box component={'br'}/>
                    <Typography variant="subtitle1" component={'span'} fontWeight={900} color={'primary'}>{'GMR '}</Typography>
                    provides waste recycling services to local and international clients
                </Typography>
        </AboutUsTemplate>
    );
}

export default ProductAndServices;