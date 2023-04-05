
import Header from './components/header/Header';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";  
import HomePage from './routes/home_page/HomePage';
import Footer from './components/footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
]);

const theme = createTheme({
  typography: {
      // fontFamily: 'Lora, serif',
      // fontFamily: 'Alkatra, cursive',
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
            <Header />
                <RouterProvider router={router} />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
