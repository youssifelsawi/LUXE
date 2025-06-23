import React, {useState} from 'react';
import { useAppContext } from '../context/AppContext';
import { Link, useParams } from 'react-router-dom';
import {productsData} from '../data/mockData';
import {ArrowLeft, Heart, Star, Minus, Plus, HeartOff} from 'lucide-react';

const ProductDetailPage = () => {
    const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useAppContext();
    const { id } = useParams();

    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
  
    const productId = parseInt(id);
    const product = productsData.find(p => p.id === productId);
    
    if (!product) {
      return <div className="pt-16 p-8">Product not found</div>;
    }
  
    const handleAddToCart = () => {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    };
  
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/products"
            className="flex items-center text-gray-600 hover:text-black mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
  
          <div className="grid md:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="aspect-square bg-gray-50 mb-4 overflow-hidden">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 bg-gray-50 overflow-hidden border-2 ${
                      selectedImage === index ? 'border-black' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
  
            {/* Product Info */}
            <div>
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
              </div>
              
              <p className="text-gray-600 mb-2">{product.category}</p>
              <h1 className="text-3xl font-light mb-4">{product.name}</h1>
              <p className="text-3xl font-light mb-6">${product.price.toLocaleString()}</p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
  
              <div className="mb-6">
                <h3 className="font-medium mb-3">Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-gray-300">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white py-3 px-8 font-medium hover:bg-gray-800 transition-colors"
                >
                  Add to Cart
                </button>
                <button onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)} className="p-3 border border-gray-300 hover:bg-gray-50">
                  { isInWishlist(product.id) ? 
                  ( <HeartOff className="w-5 h-5 text-red-500" /> ) :
                  ( <Heart className="w-5 h-5 text-gray-500" /> )
                  }
                  
                </button>
              </div>
  
              <div className="text-sm text-gray-600 space-y-1">
                <p>✓ Free shipping on orders over $500</p>
                <p>✓ 30-day returns</p>
                <p>✓ Authentic guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ProductDetailPage