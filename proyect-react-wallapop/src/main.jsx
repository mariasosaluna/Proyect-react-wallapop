import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Favoritos from './pages/Favoritos';
import Buzon from './pages/Buzon';
import { UserContextProvider } from './Components/context/UserContext';
import Profile from './pages/Profile';
import NewProduct from './pages/NewProduct';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="products/:type" element={<Products />} />
          <Route path="search/:search" element={<Products />} />
          <Route path="products" element={<Products />} />
          <Route path="favoritos" element={<Favoritos />} />
          <Route path="buzon" element={<Buzon />} />
          <Route path="profile" element={<Profile />} />
          <Route path="new_product" element={<NewProduct />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
);
