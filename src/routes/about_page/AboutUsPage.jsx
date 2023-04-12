import { Box } from "@mui/material";
import ProductAndServices from "./ProductAndServices";
import CompanyValues from "./CompantValues";
import GoalsPage from "./GoalsPage";
import AboutUs from "../home_page/AboutUs";
import OurActivities from "./OurActivities";

function AboutUsPage(){
    return (
        <Box maxWidth={'md'}
        sx={{
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            gap:10,
            mx: 3,
        }}>
            <AboutUs />
            <GoalsPage />
            <CompanyValues />
            <ProductAndServices />
            <OurActivities />
        </Box>
    );
}

export default AboutUsPage;