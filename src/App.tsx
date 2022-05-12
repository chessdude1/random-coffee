import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { CoffeeListPage } from './pages/CoffeeListPage';

export function App() {
  return (
    <div className="App">
      <header className="App-header">1</header>
      <Routes>
        <Route path="/" element={<CoffeeListPage />} />
      </Routes>
    </div>
  );
}
