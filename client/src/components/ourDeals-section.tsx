'use client';

import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 'Rs. 3,999',
    discountedPrice: 'Rs. 2,499',
    image: 'https://shop.zebronics.com/cdn/shop/files/Zeb-Duke-pic-1.jpg?v=1710569970',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 'Rs. 6,999',
    discountedPrice: 'Rs. 4,999',
    image: 'https://media.istockphoto.com/id/509464671/photo/smart-watch.jpg?s=612x612&w=0&k=20&c=RDYfeSMutwJ778pweCYQwIvFKAcNCni5_m5B-iLkDZs=',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 'Rs. 2,699',
    discountedPrice: 'Rs. 1,299',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzm330_QXVLpQJnT6jKW3ixSYYI9Vka9t6Q&s',
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: 'Rs. 1,999',
    discountedPrice: 'Rs. 500',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHy_X9DDV94odVByfGz-S5rhdtDfYymBaBw&s',
  },
  {
    id: 5,
    name: 'Fitness Band',
    price: 'Rs. 3,599',
    discountedPrice: 'Rs. 1,500',
    image: 'https://www.vitsupp.in/wp-content/uploads/2016/02/Garmin-Vivosmart-Black-Fitness-Band-1.jpg',
  },
  {
    id: 6,
    name: 'Mini Drone',
    price: 'Rs. 7,999',
    discountedPrice: 'Rs. 6,000',
    image: 'https://www.radioshack.com.mx/store/medias/100056301-6.jpg-515ftw?context=bWFzdGVyfHJvb3R8Mzg3NTN8aW1hZ2UvanBlZ3xhREJrTDJnd05TODVNRE14TURjek5USTVPRGcyTHpFd01EQTFOak13TVMwMkxtcHdaMTgxTVRWbWRIY3xkZTMwYWVhOWZlMmQ2MzZiNmY0YzgwMjM2ODJkYWI1OGVmZmI4NmJmNWI4ZmM5Nzg5OGY0ZjFiNzJiNGRjZTBk',
  },
];


// ⏰ Countdown Calculation
const getTimeLeft = (endTime) => {
  const now = new Date();
  const distance = endTime - now;
  if (distance < 0) {
    return { hours: '00', minutes: '00', seconds: '00' };
  }
  const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');
  return { hours, minutes, seconds };
};

const OurDealsSection = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });

  
  useEffect(() => {
    const deadline = new Date(Date.now() + 24 * 60 * 60 * 1000); 

    const interval = setInterval(() => {
      const left = getTimeLeft(deadline);
      setTimeLeft(left);

      if (left.hours === '00' && left.minutes === '00' && left.seconds === '00') {
        clearInterval(interval); // stop timer if expired
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-12 px-4">
     
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">🔥 Exciting Offers Awaits!</h2>
        <p className="text-red-500 text-xl mt-2">
          Limited Time Offer Ends In:
          <span className="text-yellow-400 font-bold ml-2">
            {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
          </span>
        </p>
        <img
          src="https://admin.mobilemandu.com/storage/campaign_banners/FZuLkka4McdumSvAgWi1NUIagFSYyxrG0fkt2M34.jpg"
          alt="Special Offers"
          className="mt-6 mx-auto rounded-2xl shadow-lg max-w-3xl"
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
  key={product.id}
  className="bg-gray-800 rounded-2xl p-4 shadow-md hover:scale-105 transition transform duration-300"
>
  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover"
    />
  </div>
  <h3 className="text-xl font-semibold text-white mt-4">{product.name}</h3>
  <div className="flex items-center gap-2 mt-1">
    <p className="text-gray-400 line-through">{product.price}</p>
    <p className="text-green-400 font-bold">{product.discountedPrice}</p>
  </div>
  <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors duration-300 w-full">
    <ShoppingCart className="w-5 h-5" />
    Add to Cart
  </button>
</div>

        ))}
      </div>

  
      <div className="text-center mt-12">
        <Link href="/deals">
          <span className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition duration-300">
            See All Deals →
          </span>
        </Link>
      </div>
    </section>
  );
};

export default OurDealsSection;
