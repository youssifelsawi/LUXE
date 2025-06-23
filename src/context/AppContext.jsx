// context/AppContext.jsx
import { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within AppProvider");
  return context;
};

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem('wishlist');
    return stored ? JSON.parse(stored) : [];
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

   // Wishlist functions
   const addToWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (exists) {
      toast(`${product.name} is already in your wishlist`, { icon: '❤️' });
      return;
    }
    const updated = [...wishlist, product];
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
    toast.success(`${product.name} added to wishlist`);
  };

  const removeFromWishlist = (productId) => {
    const product = wishlist.find((item) => item.id === productId);
    const updated = wishlist.filter((item) => item.id !== productId);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
    toast(`${product?.name || 'Product'} removed from wishlist`, { icon: '🗑️' });
  };
  

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Cart Functions
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => setCart([]);

  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  const contextValue = {
    cart,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    cartTotalItems,
    cartTotalPrice,
    isMenuOpen,
    setIsMenuOpen,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
