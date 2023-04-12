import { Typography } from "@mui/material";
import { Box } from "@mui/system";

function AboutUsTemplate({title, children}) {
    return(
        <Box component={ 'div' } sx={{ alignItems:'center' }}>
            <Typography  variant="h3" component={ 'h2' } textAlign={"center"} color={'secondary'}>
                {title}
            </Typography>
            { children }
        </Box>
    );
}

export default AboutUsTemplate;