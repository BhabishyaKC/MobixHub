import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 'Rs. 3,499',
    image: 'https://via.placeholder.com/200x200.png?text=Headphones',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 'Rs. 5,999',
    image: 'https://via.placeholder.com/200x200.png?text=Smart+Watch',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 'Rs. 2,299',
    image: 'https://via.placeholder.com/200x200.png?text=Speaker',
  },
];

const OurDealsSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px-4">
      {/* Banner */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">🔥 Exciting Offers Awaits!</h2>
        <p className="text-green-500 text-xl mt-2">Don't Miss Out on the Best Deals of the Season!</p>
        <img
          src="https://via.placeholder.com/800x200.png?text=Special+Deals+Banner"
          alt="Special Offers"
          className="mt-6 mx-auto rounded-2xl shadow-lg"
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-2xl p-4 shadow-md hover:scale-105 transition transform duration-300">
            <img src={product.image} alt={product.name} className="rounded-xl mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold text-white">{product.name}</h3>
            <p className="text-green-400 font-bold mt-1">{product.price}</p>
            <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurDealsSection;
