import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Newsletter from './components/shared/Newsletter';
import ScrollToTop from './components/shared/ScrollToTop';
import AboutPage from './pages/AboutPage';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';
import CollectionDetail from './pages/CollectionDetail';
import CollectionsPage from './pages/CollectionsPage';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';
import './App.css';

const App = () => {
  const location = useLocation();
  const showNewsletter = location.pathname === '/';
  const showFooter = location.pathname !== '/cart';

  return (
    <AppProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:id" element={<CollectionDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>

        {showNewsletter && <Newsletter />}
        {showFooter && <Footer />}
      </div>
    </AppProvider>
  );
};

export default App;
