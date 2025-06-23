import React, {useState} from 'react'
import { useAppContext } from '../context/AppContext';
import { useNavigate, useLocation } from 'react-router-dom';
import {productsData} from '../data/mockData';
import {Filter, Heart, Star, HeartOff } from 'lucide-react';

const ProductsPage = () => {
    const { addToCart, addToWishlist, wishlist, removeFromWishlist, isInWishlist } = useAppContext();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('name');
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query')?.toLowerCase();
  
    const categories = ['All', ...new Set(productsData.map(p => p.category))];
    
    let filteredProducts = productsData;

// Filter by category if not "All"
if (selectedCategory !== 'All') {
  filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
}

// Filter by search query
if (query) {
  filteredProducts = filteredProducts.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );
}

// Sort the result
filteredProducts = [...filteredProducts].sort((a, b) => {
  if (sortBy === 'price') return a.price - b.price;
  if (sortBy === 'rating') return b.rating - a.rating;
  return a.name.localeCompare(b.name);
});

  
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-light mb-4">All Products</h1>
            <p className="text-gray-600">Discover our complete luxury collection</p>
            {query && (
  <p className="mb-4 text-sm text-gray-500">
    Showing results for "<span className="font-medium text-black">{query}</span>"
  </p>
)}

          </div>
  
          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Sort:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
  
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-50 aspect-square mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onClick={() => navigate(`/products/${product.id}`)}
                  />
                  <button 
                    onClick={() => addToCart(product)}
                    className="absolute bottom-4 left-4 right-4 bg-black text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 font-medium"
                  >
                    Add to Cart
                  </button>
                  <button onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)} className="absolute top-4 right-4 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    { isInWishlist(product.id) ? 
                    ( <HeartOff className="w-4 h-4 text-red-500"/> ) : 
                    ( <Heart className="w-4 h-4 text-gray-500" /> )
                    }
                  </button>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-lg text-gray-900 font-light">${product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default ProductsPage