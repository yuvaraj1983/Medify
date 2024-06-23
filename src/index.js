import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx"
import Search from "./Components/Search/Search"
import MyBookings from './MyBookings/MyBookings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);



export const theme = createTheme({
  components:{
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "56px",
          fontWeight: "700"
        },
        h2: {
          fontSize: "48px",
          fontWeight: "600"
        },
        h3: {
          fontSize: "30px",
          fontWeight: "500"
        },
      }
    },
    MuiContainer:{  
      styleOverrides: {
        root:{
          width:'90%'
        }
      }
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
      {/* <BrowserRouter>
      <App />
      </BrowserRouter> */}
    </ThemeProvider>
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
