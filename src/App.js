
import Header from './components/header/Header';
import {
    createBrowserRouter,
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
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <NotFoundPage />
    },
    {
        path: "/about",
        element: <AboutUsPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    }
]);

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
    return (
        <ThemeProvider theme={theme}>
            <Box
            component={'nav'}
            minHeight={'100vh'}
            sx={{
                background: "#3A3A3C",
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Header />
                    <RouterProvider router={router} />
                <Footer />
            </Box>
        </ThemeProvider>
    );
}

export default App;
