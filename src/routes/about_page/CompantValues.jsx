import { Typography } from "@mui/material";
import AboutUsTemplate from "./AboutUsTamplate";
import { styled } from "@mui/system";



const StyledTypography = styled(Typography)(({ theme }) => ({
    position: 'relative',
    '&::before': {
      content: "open-quote",
      position: 'absolute',
      fontSize: '1.5rem',
      top: -5,
      left: -15,
      color: theme.palette.text.secondary,
    },
    '&::after': {
      content: "close-quote",
      position: 'absolute',
      fontSize: '1.5em',
      bottom: -5,
      right: -5,
      color: theme.palette.text.secondary,
    },
}));
  
function Quote({ children }) {
return (
    <StyledTypography variant="subtitle1" align="center" component={ 'p' } fontStyle={'italic'} sx={{ my: 2 }}>
        { children }
    </StyledTypography>
);
}

function CompanyValues() {
    return(
        <AboutUsTemplate title={ "COMPANY VALUES" }>
            <Quote>
            The greatest reward for what we do is the joy of achieving goals, a sense of passion, harmony, and trustworthy partnerships.
            </Quote>
            <Typography variant="body1" component={ 'p' } align="center">
            And no matter what life brings us, we want to make it something wonderful We, GMR, this is our general position and the most important thing that can be said about us.
            </Typography>
            <Quote>
            We at
            <Typography component={"span"} color={"primary"} fontWeight={700}>{" GMR "}</Typography>
            believe in the importance of investing in the recycling sectors for several reasons, the most important of which is to preserve non-renewable natural resources and to secure a sustainable future free of emissions and pollution. And through development in the field of recycling using renewable energies, we guarantee a stable economic return and achieve the highest profits.
            </Quote>
        </AboutUsTemplate>
    );
}

export default CompanyValues;