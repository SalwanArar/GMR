import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Container, SwipeableDrawer } from '@mui/material/';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/images/logo-light.png';
import { Clear } from '@mui/icons-material';

const pages = ['Products', 'Pricing', 'Blog'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = () => {
        setAnchorElNav(true);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
        sx={{
            position: {
                xs: 'relative',
                md:"sticky"
            },
            // background: 'secondary',
            py: 1,
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                    component="img"
                    alt="Logo"
                    src={Logo}
                    sx={{
                    display: { xs: 'none', md: 'flex' },
                    maxHeight: 60,
                    }} />
                    <Typography
                    variant="caption"
                    noWrap
                    component="a"
                    href="/"
                    color={ 'text.primary' }
                    sx={{
                        ml: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        // color: '#3A3A3C',
                        textDecoration: 'none',
                        alignSelf: 'end',
                    }}
                    >
                        TURNING SCRAP...
                        <Typography
                        variant='caption'
                        component='span'
                        href="/"
                        sx={{
                            color: '#FCB32B',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                        }}> INTO GOLD
                        </Typography>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={ handleOpenNavMenu }
                        >
                            <MenuIcon color='secondary' sx={{ display: Boolean(anchorElNav)? 'none': ''}} />
                        </IconButton>
                        <SwipeableDrawer
                        anchor='top'
                        fullscreen
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        onOpen={handleOpenNavMenu}
                        BackdropProps={{
                          style: { backgroundColor: 'transparent'}
                        }}
                        PaperProps={{
                          style: { backgroundColor: 'transparent'}
                        }}
                        >
                            <Box
                            component='div'
                            sx={{
                                background: '#3A3A3CEE',
                                height: '100vh',
                                display: 'flex',
                                alignItems: 'top',
                                justifyContent: 'start',
                            }}>
                                <Box>
                                <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={ handleCloseNavMenu }
                                color="secondary">
                                    <Clear />
                                </IconButton>
                                </Box>
                                <Box sx={{ flexFlow: 1, alignSelf: 'center'}}>
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">
                                                {page}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Box>
                            </Box>
                        </SwipeableDrawer>
                    </Box>
                    <Box
                    component="img"
                    alt="Logo"
                    src={Logo}
                    sx={{
                    display: { xs: 'flex', md: 'none' },
                    maxHeight: 40,
                    }} />
                    <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex' },
                        justifyContent: 'end',
                    }}>
                        {pages.map((page) => (
                            <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{
                                m: 2,
                                pb: 0,
                                color: 'white',
                                display: 'block',
                                fontWeight: 600,
                                borderBottom: '2px solid',
                                borderRadius: 0,
                            }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;