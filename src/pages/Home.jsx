import React from 'react';
import PropertyCard from '../components/PropertyCard';
import NeighborhoodCard from '../components/NeighborhoodCard';
import TestimonialCard from '../components/TestimonialCard';

const featuredProperties = [
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
];

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

const testimonials = [
  {
    id: 1,
    quote: 'Lifestyle Estates made buying our dream home a seamless and enjoyable experience. Their team was professional, knowledgeable, and always available to answer our questions.',
    client: 'Anjali Deshmukh',
  },
  {
    id: 2,
    quote: 'I highly recommend Lifestyle Estates for anyone looking to invest in Pune real estate. Their market insights and personalized service are unmatched.',
    client: 'Rohit Kulkarni',
  },
  {
    id: 3,
    quote: 'The team at Lifestyle Estates helped me sell my property quickly and at a great price. Their professionalism and dedication are commendable.',
    client: 'Sneha Patil',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg"
            alt="Pune Real Estate"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-6xl md:text-7xl font-[Playfair Display] mb-8 leading-tight animate-fade-in">
            Lifestyle Estates
          </h1>
          <p className="text-xl md:text-3xl mb-10 max-w-3xl font-light animate-fade-in-delay">
            Your Trusted Property Advisors & Channel Partner in Pune
          </p>
          <div className="text-base mb-10 space-y-2 animate-fade-in-delay-2">
            <p>Premium Real Estate Solutions</p>
            <p>Expert Property Advisory Services</p>
          </div>
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-[Playfair Display] text-center mb-16">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-[Playfair Display] text-center mb-16">
            Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {neighborhoods.map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-[Playfair Display] text-center mb-16">
            Testimonials
          </h2>
          <div className="space-y-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
