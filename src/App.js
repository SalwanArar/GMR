
import Header from './components/header/Header';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from "react-router-dom";  
import HomePage from './routes/home_page/HomePage';
import Footer from './components/footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import AboutUsPage from './routes/about_page/AboutUsPage';
import NotFoundPage from './routes/ErrorPageNotFound';
import ContactPage from './routes/contact_page/ContactPage';
import { Box } from '@mui/material';


const theme = createTheme({
    typography: {
        // fontFamily: 'Lora, serif',
        // fontFamily: 'Alkatra, cursive',
        fontFamily: 'Montserrat Alternates, sans-serif',
    },
    palette: {
        primary: {
            main: '#0F5659',
            background: '#3A3A3C',
        },
        secondary: {
            main: '#FCB32B',
        },
        background: {
            default: '#fff',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#3A3A3C',
                    color: 'white',
                },
            },
        },
    },
});

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={ <Root /> } errorElement={ <NotFoundPage /> }>
                <Route index path='/' element={ <HomePage /> }/>
                <Route path='/about' element={ <AboutUsPage /> }/>
                <Route path='/contact' element={ <ContactPage /> }/>
            </Route>
        )
    );
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={ router }/>
        </ThemeProvider>
    );
}

const Root = () => {
    return (
        <Box
        component={'nav'}
        minHeight={'100vh'}
        sx={{
            background: "#3A3A3C",
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Header />
            <Box component={'div'}>
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
}

export default App;
