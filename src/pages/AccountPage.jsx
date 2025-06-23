import React, {useState} from 'react'
import { Heart, ShoppingBag } from 'lucide-react';

const AccountPage = () => {
    const [activeTab, setActiveTab] = useState('profile');
  
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-light mb-8">My Account</h1>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <nav className="space-y-2">
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-2 rounded ${activeTab === 'profile' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                >
                  Profile
                </button>
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`w-full text-left px-4 py-2 rounded ${activeTab === 'orders' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                >
                  Orders
                </button>
                <button 
                  onClick={() => setActiveTab('wishlist')}
                  className={`w-full text-left px-4 py-2 rounded ${activeTab === 'wishlist' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                >
                  Wishlist
                </button>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-2 rounded ${activeTab === 'settings' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                >
                  Settings
                </button>
              </nav>
            </div>
            
            <div className="lg:col-span-3">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-light">Profile Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input type="email" className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black" />
                    </div>
                  </div>
                  <button className="bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors">
                    Save Changes
                  </button>
                </div>
              )}
              
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-light mb-6">Order History</h2>
                  <div className="text-center text-gray-600 py-12">
                    <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p>No orders yet</p>
                    <p className="text-sm">Your order history will appear here</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-light mb-6">Wishlist</h2>
                  <div className="text-center text-gray-600 py-12">
                    <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p>Your wishlist is empty</p>
                    <p className="text-sm">Save items you love for later</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-light">Account Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-4 border-b">
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-gray-600">Receive updates about your orders and new products</p>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                    <div className="flex items-center justify-between py-4 border-b">
                      <div>
                        <h3 className="font-medium">SMS Notifications</h3>
                        <p className="text-sm text-gray-600">Get text messages about order updates</p>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AccountPage