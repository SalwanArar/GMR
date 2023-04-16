import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function AboutUsTemplate({title, children}) {
    return(
        <Box component={ 'div' } sx={{ alignItems:'center', mx: 3 }}>
            <Typography  variant="h4" component={ 'h2' } textAlign={"center"} color={'secondary'}>
                {title}
            </Typography>
            { children }
        </Box>
    );
}

export default AboutUsTemplate;