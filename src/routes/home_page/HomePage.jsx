import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import Bg1 from '../../assets/images/bg04.png';
import Bg2 from '../../assets/images/bg02.png';
import Bg3 from '../../assets/images/bg03.png';
import ProductsSercvices from "./ProductsServices";
import { useState } from "react";

import Bg01 from '../../assets/images/bg01.png';
function HomePage() {
    var items = [
        {
            name: "title #1",
            description: "Subtitle #1",
            background:  Bg1 ,
        },
        {
            name: "title #2",
            description: "Subtitle #2",
            background: Bg2 ,
        },
        {
            name: "title #3",
            description: "Subtitle #3",
            background:  Bg3 ,
        },
    ];
    return (
        <Box sx={{ bgcolor: 'primary.background'}}>

            <Carousel
            next={(next, active) => console.log(`We left ${active}, and are now at ${next}`)}
            prev={(prev, active) => console.log(`We left ${active}, and are now at ${prev}`)}
            NextIcon={<ChevronRight/>}
            PrevIcon={<ChevronLeft/>}
            indicators={ false }
            sx={{
                display: 'block',
                position: 'relative',   
                p:0,
                m:0,
            }}
            >
                {
                    items.map( (item, index) => <Item key={index} item={item} /> )
                }
            </Carousel>
            <Container maxWidth='xl'>
                <ProductsSercvices />
            </Container>
            
            <Typography variant="h4" component={ 'h2' } color={'text.primary'} sx={{ mb: 5 }}>
                    Products
                </Typography>
            <Grid container 
                sx={{
                    background: '#a532',
                }}>
                <Grid item md={6} xs={12}
                sx={{
                    background: '#2532',
                }}>
                    <Item1 />
                </Grid>
                <Grid item md={6} xs={12}
                sx={{
                    // border: 'solid blue',
                    background: '#2532',
                }}>
                    <Item1 />
                </Grid>
            </Grid>
        </Box>
    );
}


function Item1 () {
    const styles = {
    root: {
        width: '100%',
        height: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `url(${Bg01}) no-repeat center center`,
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255,0,0,0)',
    },
    text: {
        // color: 'white',
        // fontSize: '1rem',
        // fontWeight: 'bold',
        // textAlign: 'center',
        mx: 4,
        // textShadow: '2px 2px #000000',
    },
  };
    return (
        <Box sx={styles.root}>
            <Typography
            variant="h6"
            component={"h6"}
            color={ 'text.primary' }
            sx={{ m: 4, textAlign: 'justify' }}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing. Eu consequat ac felis donec et odio pellentesque diam.
            </Typography>
        </Box>
        // <Box
        // sx={{
            // display: 'contents',
            // justifyContent: 'center',
            // alignItems: 'center',
        // }}>
        //     <Typography
        //     sx={{
        //         background: `url(${Bg01}) no-repeat center`,
        //         backgroundSize: 'cover',
        //         backgroundColor: 'red',
        //         textAlign: 'center',
        //         py: 'auto',
        //         color: 'white',
        //         m: 0,
        //         p: 0,
        //         width: '100%',
        //         height: 600,
        //     }}>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing. Eu consequat ac felis donec et odio pellentesque diam.
        //     </Typography>
        // </Box>
        // <Box
        // sx={{
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //     // border: 'solid red',
        //     p: 4,
        //     textAlign: 'center',
        //     background: 'white',
        // }}
        // >
        //     <Box
        //     component={'img'}
        //     src={Bg01}
        //     alt={Bg01}
        //     sx={{
        //         width: '100%',
        //         maxWidth: 400,
        //         borderTop: {md: '2rem solid #3A3A3C22'},
        //         borderLeft: {md: '2rem solid #3A3A3C22'},
        //         borderRadius: '4px',
        //         // border: 'solid grey 3rem',
        //         objectFit: 'cover',
        //         overflow: 'hidden',
        //         mb: 3,
        //     }}
        //     />
        //     <Typography
        //     variant="h6"
        //     sx={{
        //         // border: 'solid green',
        //         flexWrap: '1',
        //         textAlign: 'start', 
        //     }}>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipiscing. Eu consequat ac felis donec et odio pellentesque diam.
        //     </Typography>
        // </Box>
    );
}

function Item(props)
{
    return (
            <Box
            sx={{
                background: `url(${props.item.background}) fixed no-repeat`,
                backgroundSize: 'cover',
                height: 700,
                objectFit: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Box
            sx={{
                maxWidth: 'xl',
                mx: 10,
                width: '100%'
            }}
            >
                <Box
                sx={{
                    width: 300,
                    p: 4,
                    borderRadius: 8,
                    background: '#8888'
                }}>
                    <Typography variant="h4" component={ 'h4' } color={'text.primary'}>{props.item.name}</Typography>
                    <Typography variant="subtitle1" component={ 'p' } color={'text.primary'}>{props.item.description}</Typography>

                    <Button className='CheckButton' variant="contained" color="secondary"
                    sx={{
                        fontWeight: '700',
                        fontSize: '1rem',
                    }}>
                        Check it out!
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default HomePage;