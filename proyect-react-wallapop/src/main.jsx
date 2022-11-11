import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Favoritos from './pages/Favoritos';
import Buzon from './pages/Buzon';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="products/:type" element={<Products />} />
        <Route path="products/:search" element={<Products />} />
        <Route path="products" element={<Products />} />
        <Route path="favoritos" element={<Favoritos />} />
        <Route path="buzon" element={<Buzon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
