import React from 'react'
import { Star, Heart, ShoppingBag } from 'lucide-react';

const AboutPage = () => {
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light mb-6">About LUXE</h1>
            <p className="text-xl text-gray-600 font-light">Crafting luxury experiences since 1985</p>
          </div>
  
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-2xl font-light mb-4">Our Story</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Founded in 1985, LUXE has been at the forefront of luxury craftsmanship for nearly four decades. 
                  What started as a small atelier in Milan has grown into a globally recognized symbol of excellence and sophistication.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Every piece in our collection tells a story of meticulous attention to detail, premium materials, 
                  and the skilled hands of master artisans who have dedicated their lives to perfecting their craft.
                </p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center" 
                alt="Craftsmanship"
                className="w-full h-80 object-cover"
              />
            </div>
  
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Premium Quality</h3>
                <p className="text-gray-600">Only the finest materials and craftsmanship meet our standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Handcrafted</h3>
                <p className="text-gray-600">Each piece is carefully crafted by skilled artisans</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-medium mb-2">Timeless Design</h3>
                <p className="text-gray-600">Classic designs that transcend trends and seasons</p>
              </div>
            </div>
  
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-light mb-4 text-center">Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed text-center">
                We believe that true luxury lies not just in the materials we use or the prices we command, 
                but in the lasting relationships we build with our customers and the positive impact we have on our communities. 
                Sustainability, ethical sourcing, and social responsibility are not just buzzwords for us—they are fundamental 
                principles that guide every decision we make.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AboutPage