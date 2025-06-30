import React from 'react';
import NeighborhoodCard from '../components/NeighborhoodCard';

const neighborhoods = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg',
    name: 'Koregaon Park',
    description: 'Premium locality known for its upscale lifestyle, fine dining, and luxury residences.',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
    name: 'Baner',
    description: 'Rapidly developing IT hub with modern infrastructure and excellent connectivity.',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    name: 'Wakad',
    description: 'Emerging residential and commercial hub with excellent amenities and infrastructure.',
  },
];

const Neighborhoods = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-blue-900 pt-24">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-[Playfair Display] mb-4">Neighborhoods</h1>
          <p className="text-xl">Explore Premium Localities in Pune</p>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {neighborhoods.map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Neighborhoods;
