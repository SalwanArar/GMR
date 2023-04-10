import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import Bg1 from '../../assets/images/bg04.png';
import Bg2 from '../../assets/images/bg02.png';
import Bg3 from '../../assets/images/bg03.png';
import ProductsSercvices from "./ProductsServices";
import AboutUs from "./AboutUs";


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
            <AboutUs />
            <ProductsSercvices/>
        </Box>
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
                    background: '#8884'
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