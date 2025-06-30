import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";

const allProperties = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    title: "Luxury Villa - Koregaon Park",
    price: "₹8.5 Crores",
    beds: "4 BHK",
    baths: "5 Baths",
    area: "3,500 Sq.Ft.",
    status: "For Sale",
    type: "Villa",
    location: "Koregaon Park",
    bhk: "4 BHK",
    budget: "₹5 - 10 Crores",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    title: "Premium Apartment - Baner",
    price: "₹2.8 Crores",
    beds: "3 BHK",
    baths: "3 Baths",
    area: "1,800 Sq.Ft.",
    status: "For Sale",
    type: "Apartment",
    location: "Baner",
    bhk: "3 BHK",
    budget: "₹1 - 3 Crores",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    title: "Modern Penthouse - Wakad",
    price: "₹4.2 Crores",
    beds: "4 BHK",
    baths: "4 Baths",
    area: "2,400 Sq.Ft.",
    status: "For Sale",
    type: "Penthouse",
    location: "Wakad",
    bhk: "4 BHK",
    budget: "₹3 - 5 Crores",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
    title: "Commercial Space - Hinjewadi",
    price: "₹1.5 Crores",
    beds: "Office",
    baths: "2 Floors",
    area: "2,000 Sq.Ft.",
    status: "For Sale",
    type: "Commercial",
    location: "Hinjewadi",
    bhk: "",
    budget: "₹1 - 3 Crores",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    title: "Duplex Villa - Aundh",
    price: "₹6.8 Crores",
    beds: "5 BHK",
    baths: "6 Baths",
    area: "4,200 Sq.Ft.",
    status: "For Sale",
    type: "Villa",
    location: "Aundh",
    bhk: "5+ BHK",
    budget: "₹5 - 10 Crores",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg",
    title: "Studio Apartment - Viman Nagar",
    price: "₹35,000/month",
    beds: "1 BHK",
    baths: "1 Bath",
    area: "650 Sq.Ft.",
    status: "For Rent",
    type: "Apartment",
    location: "Viman Nagar",
    bhk: "1 BHK",
    budget: "Under ₹1 Crore",
  },
];

const propertyTypes = [
  "All Types",
  "Apartment",
  "Villa",
  "Penthouse",
  "Commercial",
];
const locations = [
  "All Locations",
  "Koregaon Park",
  "Baner",
  "Wakad",
  "Aundh",
  "Hinjewadi",
  "Viman Nagar",
];
const budgets = [
  "Any Budget",
  "Under ₹1 Crore",
  "₹1 - 3 Crores",
  "₹3 - 5 Crores",
  "₹5 - 10 Crores",
  "Above ₹10 Crores",
];
const bhks = ["Any BHK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];

const HomeSearch = () => {
  const [filters, setFilters] = useState({
    type: "All Types",
    location: "All Locations",
    budget: "Any Budget",
    bhk: "Any BHK",
  });
  const [filtered, setFiltered] = useState(allProperties);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filterProperties = (e) => {
    e.preventDefault();
    let results = allProperties;

    if (filters.type !== "All Types") {
      results = results.filter((p) => p.type === filters.type);
    }
    if (filters.location !== "All Locations") {
      results = results.filter((p) => p.location === filters.location);
    }
    if (filters.budget !== "Any Budget") {
      results = results.filter((p) => p.budget === filters.budget);
    }
    if (filters.bhk !== "Any BHK") {
      results = results.filter((p) => p.bhk === filters.bhk);
    }
    setFiltered(results);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-blue-900 pt-24">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-[Playfair Display] mb-4">
            Home Search
          </h1>
          <p className="text-xl">Find Your Perfect Property in Pune</p>
        </div>
      </section>

      {/* Search Filters */}
      <section className="py-12 bg-white shadow-lg relative -mt-16 mx-6 rounded-lg">
        <div className="container mx-auto px-6">
          <form
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            onSubmit={filterProperties}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select
                name="type"
                value={filters.type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              >
                {propertyTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select
                name="location"
                value={filters.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              >
                {locations.map((loc) => (
                  <option key={loc}>{loc}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={filters.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              >
                {budgets.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                BHK
              </label>
              <select
                name="bhk"
                value={filters.bhk}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              >
                {bhks.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2 lg:col-span-4 text-center">
              <button
                type="submit"
                className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition mt-4"
              >
                <i className="fas fa-search mr-2"></i>Search Properties
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Filtered Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center text-gray-500 text-xl py-12">
              No properties found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomeSearch;
