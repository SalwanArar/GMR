import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Container } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import Bg1 from '../../assets/images/bg04.png';
import Bg2 from '../../assets/images/bg02.png';
import Bg3 from '../../assets/images/bg03.png';
import ProductsSercvices from "./ProductsServices";

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
        </Box>
    );
}



function Item(props)
{
    return (
        // <Box
        // sx={{position: "relative"}}>
            <Box
            // component={ 'img' }
            // src={props.item.background}
            sx={{
                background: `url(${props.item.background}) fixed no-repeat`,
                backgroundSize: 'cover',
                // width: '100%',
                height: 700,
                objectFit: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // position: 'relative',
            }}>
            <Box
            sx={{
                // position: 'absolute',
                maxWidth: 'xl',
                mx: 10,
                // position: "absolute",
                // top: '50%',
                // left: '25%',
                width: '100%'
            }}
            >
                <Box
                sx={{
                    // border: 'solid   ',
                    width: 300,
                    // m: 4,
                    p: 4,
                    borderRadius: 8,
                    background: '#8884'
                }}>
                    <h2>{props.item.name}</h2>
                    <p>{props.item.description}</p>

                    <Button className='CheckButton' variant="contained" color="secondary"
                    sx={{
                        // background: 'red',
                        // color: '#168085',
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