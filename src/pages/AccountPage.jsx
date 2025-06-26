import React, { useState } from "react";
import { Heart, ShoppingBag, Trash } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { wishlist, removeFromWishlist, addToCart } = useAppContext();

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-light mb-8">My Account</h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {["profile", "orders", "wishlist", "settings"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-4 py-2 rounded ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-3">
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-light">Profile Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                </div>
                <button className="bg-black text-white px-6 py-2 font-medium hover:bg-gray-800 transition-colors">
                  Save Changes
                </button>
              </div>
            )}

            {activeTab === "orders" && (
              <div>
                <h2 className="text-2xl font-light mb-6">Order History</h2>
                <div className="text-center text-gray-600 py-12">
                  <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p>No orders yet</p>
                  <p className="text-sm">Your order history will appear here</p>
                </div>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div>
                <h2 className="text-2xl font-light mb-6">Wishlist</h2>
                {wishlist.length === 0 ? (
                  <div className="text-center text-gray-600 py-12">
                    <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p>Your wishlist is empty</p>
                    <p className="text-sm">Save items you love for later</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {wishlist.map((product) => (
                      <div
                        key={product.id}
                        className="border p-4 rounded relative"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover mb-4 rounded"
                        />
                        <h3 className="text-lg font-medium mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {product.category}
                        </p>
                        <p className="text-lg text-gray-900 font-light mb-4">
                          ${product.price}
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => addToCart(product)}
                            className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition"
                          >
                            Add to Cart
                          </button>
                          <button
                            onClick={() => removeFromWishlist(product.id)}
                            className="text-red-500 hover:text-red-700 transition flex items-center"
                          >
                            <Trash className="w-4 h-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-light">Account Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-gray-600">
                        Receive updates about your orders and new products
                      </p>
                    </div>
                    <input type="checkbox" className="rounded" />
                  </div>
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <h3 className="font-medium">SMS Notifications</h3>
                      <p className="text-sm text-gray-600">
                        Get text messages about order updates
                      </p>
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

export default AccountPage;
