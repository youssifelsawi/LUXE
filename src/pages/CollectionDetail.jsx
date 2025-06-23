import React from 'react'
import { useAppContext } from '../context/AppContext';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {collectionsData, productsData} from '../data/mockData';
import { ArrowLeft } from 'lucide-react';

const CollectionDetail = () => {
    const { addToCart, addToWishlist } = useAppContext();
    const navigate = useNavigate();
    const { id } = useParams();

    const collection = collectionsData.find(c => c.id.toString() === id);
    const collectionProducts = collection ? productsData.filter(p => collection.products.includes(p.id)) : [];
  
    if (!collection) {
      return <div className="pt-16 p-8">Collection not found</div>;
    }
  
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/collections"
            className="flex items-center text-gray-600 hover:text-black mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collections
          </Link>
  
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light mb-4">{collection.title}</h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">{collection.description}</p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collectionProducts.map((product) => (
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
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-xl text-gray-900 font-light">${product.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default CollectionDetail