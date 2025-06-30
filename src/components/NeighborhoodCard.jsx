import React from 'react';

const NeighborhoodCard = ({ neighborhood }) => {
  const { image, name, description } = neighborhood;

  return (
    <div className="relative rounded-lg overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70 group-hover:opacity-90 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-center mb-4">{description}</p>
        <a href="neighborhoods.html" className="text-sm border border-white px-6 py-2 rounded-full hover:bg-white hover:text-gray-900 transition">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NeighborhoodCard;
