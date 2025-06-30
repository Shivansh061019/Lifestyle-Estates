import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { quote, client } = testimonial;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <p className="font-semibold text-blue-900">- {client}</p>
    </div>
  );
};

export default TestimonialCard;
