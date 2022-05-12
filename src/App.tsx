import React from 'react';
import './App.scss';
import './base.scss';

import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { CoffeeListPage } from './pages/CoffeeListPage';
import { Header } from './layouts/Header';

const theme = responsiveFontSizes(createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    allVariants: {
      textTransform: 'none',
    },
  },
}));

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<CoffeeListPage />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}
