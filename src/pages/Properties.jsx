import React from 'react';
import PropertyCard from '../components/PropertyCard';

const properties = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    title: 'Luxury Villa - Koregaon Park',
    price: '₹8.5 Crores',
    beds: '4 BHK',
    baths: '5 Baths',
    area: '3,500 Sq.Ft.',
    status: 'For Sale',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    title: 'Premium Apartment - Baner',
    price: '₹2.8 Crores',
    beds: '3 BHK',
    baths: '3 Baths',
    area: '1,800 Sq.Ft.',
    status: 'For Sale',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    title: 'Modern Penthouse - Wakad',
    price: '₹4.2 Crores',
    beds: '4 BHK',
    baths: '4 Baths',
    area: '2,400 Sq.Ft.',
    status: 'For Sale',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    title: 'Commercial Space - Hinjewadi',
    price: '₹1.5 Crores',
    beds: 'Office',
    baths: '2 Floors',
    area: '2,000 Sq.Ft.',
    status: 'For Sale',
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
    title: 'Duplex Villa - Aundh',
    price: '₹6.8 Crores',
    beds: '5 BHK',
    baths: '6 Baths',
    area: '4,200 Sq.Ft.',
    status: 'For Sale',
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg',
    title: 'Studio Apartment - Viman Nagar',
    price: '₹35,000/month',
    beds: '1 BHK',
    baths: '1 Bath',
    area: '650 Sq.Ft.',
    status: 'For Rent',
  },
];

const Properties = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-blue-900 pt-24">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-[Playfair Display] mb-4">Properties</h1>
          <p className="text-xl">Discover Premium Properties in Pune</p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
