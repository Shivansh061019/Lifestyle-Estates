import React from "react";

const PropertyCard = ({ property }) => {
  const { image, title, price, beds, baths, area, status } = property;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]">
      <div className="relative" style={{ height: "220px" }}>
        <img
          src={image}
          alt={title}
          className="absolute h-full w-full object-cover"
        />
        {status && (
          <div className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm">
            {status}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="text-sm text-blue-900 mb-2">{status}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-2xl text-gray-800 mb-4">{price}</p>
        <div className="flex justify-between text-gray-600 mb-4">
          <span>{beds}</span>
          <span>{baths}</span>
          <span>{area}</span>
        </div>
        <a
          href="#"
          className="block text-center bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          DETAILS
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
