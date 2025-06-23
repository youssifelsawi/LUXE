import React from 'react'
import {useAppContext} from '../context/AppContext';
import { Link } from 'react-router-dom';
import {collectionsData} from '../data/mockData';
import {ChevronRight} from 'lucide-react';

const CollectionsPage = () => {
    return (
      <div className="pt-16 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light mb-4">Our Collections</h1>
            <p className="text-xl text-gray-600 font-light">Curated collections that define luxury</p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12">
            {collectionsData.map((collection) => (
              <Link key={collection.id} className="group cursor-pointer" to={`/collections/${collection.id}`}>
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/5] mb-6">
                  <img 
                    src={collection.image} 
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-4xl font-light mb-2">{collection.title}</h3>
                    <p className="text-lg font-light opacity-90 mb-4">{collection.subtitle}</p>
                    <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="mr-2">Explore Collection</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-2xl font-light mb-2">{collection.title}</h4>
                  <p className="text-gray-600">{collection.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default CollectionsPage