import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light mb-4">Stay in Touch</h2>
        <p className="text-xl font-light mb-8 opacity-80">
          Be the first to know about our latest collections and exclusive offers
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address"
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
          />
          <button className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter