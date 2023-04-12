import { Box, Button, Grid, Typography } from "@mui/material";


import IronRecycling from '../../assets/images/IronRecycling.jpeg';
import AluminiumRecycling from '../../assets/images/AluminiumJunk.webp';
import CopperRecycling from '../../assets/images/CopperRecycling.jpg';
import BatteriesRecycling from '../../assets/images/BatteryRecycling.png';



const products = [
    {
        title: 'Iron Recycling',
        info: 'Iron recycling is the process of reusing iron materials to make new products, which helps to reduce waste and conserve natural resources. By recycling iron, we can reduce the environmental impact of mining and manufacturing new iron products.',
        img: IronRecycling,
        link: '',
    },
    {
        title: 'Battaries Recycling',
        info: 'Recycling batteries helps prevent toxic chemicals from polluting the environment, while also conserving valuable materials such as copper and nickel.',
        img: BatteriesRecycling,
        link: '',
    },
    {
        title: 'Copper Recycling',
        info: 'Copper recycling helps reduce waste and conserve natural resources, as copper can be reused without losing its quality. It also helps reduce greenhouse gas emissions associated with mining and production.',
        img: CopperRecycling,
        link: '',
    },
    {
        title: 'Aluminium Recycling',
        info: 'Recycling Aluminum saves energy and resources while reducing waste in landfills.',
        img: AluminiumRecycling,
        link: '',
    },
];

function Product ({product}) {
    return (
        <Box
        sx={{
            height: '40vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${product.img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundColor: 'rgba(70, 70, 70, 1)',
            backgroundBlendMode: 'multiply',
        }}>
            <Typography
            variant="h6"
            component={'h6'}
            color={'secondary'}
            fontWeight={900}
            fontSize={'1.2rem'}
            >
                { product.title }
            </Typography>
            <Typography
            variant="body1"
            component={"p"}
            color={ 'text.primary' }
            sx={{
                mx: { md: 10, xs: 5 },
                mb: 3,
                textAlign: 'justify',
            }}
            >
                { product.info }
            </Typography>
            <Button
            variant="text"
            color="primary">
                <Typography
                variant="button"
                sx={{
                    fontWeight: '600',
                    textDecoration: 'underline',
                    textTransform: 'capitalize',
                }}>
                    Learn More
                </Typography>
            </Button>
        </Box>
    );
}

function ProductsSercvices(){
    return(
        <Box component={'div'} sx={{ mt: 5, mb: 10 }}>
            <Grid container 
                sx={{
                    background: '#a532',
                }}>
                    {
                        products.map((product)=>
                            <Grid item xl={3} sm={6} xs={12}>
                                <Product product={product}/>
                            </Grid>
                        )
                    }
            </Grid>
        </Box>
    );
}

export default ProductsSercvices;   