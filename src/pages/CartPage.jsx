import React from 'react'
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import {Minus, Plus, X, ShoppingBag } from 'lucide-react';

const CartPage = () => {
    const { cart, updateCartQuantity, removeFromCart } = useAppContext();
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 500 ? 0 : 50;
    const total = subtotal + shipping;
  
    if (cart.length === 0) {
      return (
        <div className="pt-16 min-h-screen bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-2xl font-light mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">Discover our luxury collection</p>
            <Link 
              to="/products"
              className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      );
    }
  
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-light mb-8">Shopping Cart</h1>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-6 border-b border-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover bg-gray-50"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">{item.category}</p>
                    <p className="text-lg font-light">${item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => updateCartQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 h-fit">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `${shipping}`}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors mb-4">
                Checkout
              </button>
              <Link 
                to='/products'
                className="inline-block text-center w-full border border-gray-300 py-3 font-medium hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default CartPage