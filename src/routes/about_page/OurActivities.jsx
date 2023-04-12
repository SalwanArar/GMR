import { Box, Typography } from "@mui/material";
import AboutUsTemplate from "./AboutUsTamplate";

function OurActivities(){
    return (
        <AboutUsTemplate title={"OUR ACTIVITIES"}>
            <Typography
                width={'100%'}
                variant="subtitle1"
                component={"p"}
                color={"text.primary"}
                align="justify">
                <Typography variant="subtitle1" component={'span'} fontWeight={900} color={'primary'}>{'GMR '}</Typography>
                is distinguished by the use of advanced technology for recycling in modern ways, as this technology reduces the emissions resulting from recycling operations.
                <Box component={'br'}/>
                <Typography variant="subtitle1" component={'span'} fontWeight={900} color={'primary'}>{'GMR '}</Typography>
                is developing hydrometallurgical methods for recovering minerals using renewable energies.
            </Typography>
        </AboutUsTemplate>
    );
}

export default OurActivities;