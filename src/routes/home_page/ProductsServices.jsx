import { Box, Grid, Paper, Typography } from "@mui/material";
import Bg01 from '../../assets/images/bg01.png';
import './AboutUs.css';
import { useEffect, useState } from "react";

function ProductsSercvices(){
    const [skew, setSkew] = useState(20);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setSkew((prevSkew) => -prevSkew);
        // generate random skew value between -20 and 20
        // var newSkew = 0;
        // const newSkew = Math.floor(Math.random() * 41) - 20;
        // if(skew === 20){
        //     setSkew(-20);
        // } else {
        //     setSkew(20);
        // }
        // setSkew(newSkew);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, []);
    return(
        <Box sx={{ mt: 8 }}>
            <Box
            sx={{
                mx: { md:'auto', xs: 4 },
                display: { md:'flex' },
                maxWidth: 'md',
                justifyContent: 'space-between',
                alignItems: 'end',
                gap: 10,
                textAlign: { xs: 'center' },
            }}>
                <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'self-start',
                }}>
                    <Box sx={{ position: 'relative', m: 2 }}>
      <Box
        sx={{
          background: 'white',
          height: '2.5rem',
          width: '10rem',
          transform: `skew(${skew}deg)`,
          WebkitTransform: `skew(${skew}deg)`,
          MozTransform: `skew(${skew}deg)`,
          OTransform: `skew(${skew}deg)`,
          transition: 'transform 3s ease-in-out',
        }}
      />
      <Typography
        variant="subtitle1"
        color="primary"
        fontWeight={700}
        sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        About Us
      </Typography>
    </Box>
                    <Typography
                    variant="body1"
                    color={'text.primary'}
                    sx={{
                        mb: 2 ,
                        textAlign: { xs: 'left' }
                    }}>
                        The idea began in 2017 to work on finding 
                        solutions to preserve natural resources, protect the 
                        environment from pollution and greenhouse gases, 
                        and reduce global warming, in order to be among 
                        the contributors to maintaining a clean, pollution-free and sustainable environment.
                        Based on this principle, we have established the 
                        <Typography
                        variant="body1"
                        component={'span'}
                        color='primary'
                        fontWeight='700'>
                            {' GMR '}
                        </Typography>Company to embody this idea on the ground.
                    </Typography>
                </Box>
                    <Box
                component={ 'img' }
                src={ Bg01 }
                sx={{
                    width: '100%'
                }}
                />
            </Box>
            <Typography variant="h4" component={ 'h2' } sx={{ mb: 5 }}>
                Products and Services
            </Typography>
            <Grid container 
                sx={{
                    background: '#a532',
                }}>
                <Grid item md={6} xs={12}
                sx={{
                    background: '#2532',
                }}>
                    <Item />
                </Grid>
                <Grid item md={6} xs={12}
                sx={{
                    // border: 'solid blue',
                    background: '#2532',
                }}>
                    <Item />
                </Grid>
            </Grid>
        </Box>
    );
}

function Item () {
    return (
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // border: 'solid red',
            p: 4,
            textAlign: 'center',
            background: 'white',
        }}
        >
            <Box
            component={'img'}
            src={Bg01}
            alt={Bg01}
            sx={{
                width: '100%',
                maxWidth: 400,
                borderTop: {md: '2rem solid #3A3A3C22'},
                borderLeft: {md: '2rem solid #3A3A3C22'},
                borderRadius: '4px',
                // border: 'solid grey 3rem',
                objectFit: 'cover',
                overflow: 'hidden',
                mb: 3,
            }}
            />
            <Typography
            variant="h6"
            sx={{
                // border: 'solid green',
                flexWrap: '1',
                textAlign: 'start', 
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing. Eu consequat ac felis donec et odio pellentesque diam.
            </Typography>
        </Box>
    );
}

export default ProductsSercvices;   