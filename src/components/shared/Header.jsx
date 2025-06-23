import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {productsData} from '../../data/mockData';
import { Search, User, ShoppingBag, X, Menu } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
  const { cart, isMenuOpen, setIsMenuOpen } = useAppContext();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([])
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
        setFilteredResults([]);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleLiveSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
  
    if (value.trim() === '') {
      setFilteredResults([]);
      return;
    }
  
    const results = productsData.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
  
    setFilteredResults(results.slice(0, 5));
  };
  

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-black hover:text-gray-600 transition-colors"
            >
              LUXE
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/collections"
              className="font-medium text-gray-600 hover:text-black transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/products"
              className="font-medium text-gray-600 hover:text-black transition-colors"
            >
              All Products
            </Link>
            <Link
              to="/about"
              className="font-medium text-gray-600 hover:text-black transition-colors"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Toggle Search Input */}
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="w-5 h-5 text-gray-900 hover:text-gray-600 cursor-pointer transition-colors" />
            </button>

            <Link to="/account">
              <User className="w-5 h-5 text-gray-900 hover:text-gray-600 cursor-pointer transition-colors" />
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingBag className="w-5 h-5 text-gray-900 hover:text-gray-600 cursor-pointer transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
          <div ref={searchRef} className="relative">
          {searchOpen && (
          <form onSubmit={handleLiveSearch} className="mt-2">
            <input
              type="text"
              value={query}
              onChange={handleLiveSearch}
              autoFocus
              placeholder="Search products..."
              className="w-full px-4 py-2 my-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </form>
        )}
      </div>

      {filteredResults.length > 0 && (
  <ul className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
    {filteredResults.map(product => (
      <li 
        key={product.id}
        onClick={() => {
          navigate(`/products/${product.id}`);
          setSearchOpen(false);
          setQuery('');
          setFilteredResults([]);
        }}
        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
      >
        <img src={product.image} alt={product.name} className="w-8 h-8 object-cover rounded" />
        <span>{product.name}</span>
      </li>
    ))}
  </ul>
)}
          </div>


      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-2 space-y-2">
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/collections"
              className="block py-2 text-gray-900 font-medium"
            >
              Collections
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/products"
              className="block py-2 text-gray-900 font-medium"
            >
              All Products
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/about"
              className="block py-2 text-gray-900 font-medium"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
