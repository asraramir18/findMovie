import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Home from './pages/home/home'
import Details from './pages/details/details'

import Layout from './components/layouts/Layout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createTheme, ThemeProvider  } from '@mui/material/styles';

const THEME = createTheme({
  typography: {
   fontFamily: `Source Sans Pro`,
   Color: '#5F6368',
   h1: {
    fontWeight: 600,
    fontSize: '2.25rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.625rem',
      lineHeight: 2.125, 
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={THEME}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:imdbID" element={<Details />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);