import React from "react";
import { useAppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { collectionsData, productsData } from "../data/mockData";
import { ChevronRight } from "lucide-react";

const HomePage = () => {
  const { addToCart, addToWishlist } = useAppContext();
  const navigate = useNavigate();

  const featuredProducts = productsData.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-gray-900"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop&crop=center')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
            Luxury
            <span className="block font-thin">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Discover our exclusive collection of handcrafted luxury goods
          </p>
          <Link
            to="/collections"
            className="inline-block bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {collectionsData.map((collection) => (
            <Link to={`/collections/${collection.id}`}>
              {" "}
              <div key={collection.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-4">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-3xl font-light mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-lg font-light opacity-90">
                      {collection.subtitle}
                    </p>
                    <div className="flex items-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="mr-2">Shop Now</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Handpicked selections from our luxury collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <Link
                  to={`/products/${product.id}`}
                  key={product.id}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-white aspect-square mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onClick={() => navigate(`/products/${product.id}`)}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xl text-gray-900 font-light">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent Link navigation
                    e.preventDefault(); // Prevent Link default behavior
                    addToCart(product);
                  }}
                  className="absolute bottom-4 left-4 right-4 bg-black text-white py-2 px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 font-medium"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
