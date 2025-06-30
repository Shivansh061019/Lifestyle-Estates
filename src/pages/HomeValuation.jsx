import React from "react";
import { FaChartLine, FaCalculator, FaFileAlt, FaClock } from "react-icons/fa";

const HomeValuation = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-blue-900 pt-24">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-[Playfair Display] mb-4">
            Home Valuation
          </h1>
          <p className="text-xl">
            Get an Accurate Market Value for Your Property
          </p>
        </div>
      </section>

      {/* Valuation Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-[Playfair Display] mb-4">
                Free Property Valuation
              </h2>
              <p className="text-lg text-gray-600">
                Get a comprehensive market analysis of your property value in
                just a few minutes
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Valuation Form */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">
                  Property Details
                </h3>
                <form id="valuation-form" className="space-y-6">
                  <div>
                    <label
                      htmlFor="propertyType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    >
                      <option value="">Select Property Type</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="commercial">Commercial Space</option>
                      <option value="plot">Plot/Land</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Location *
                    </label>
                    <select
                      id="location"
                      name="location"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    >
                      <option value="">Select Location</option>
                      <option value="koregaon-park">Koregaon Park</option>
                      <option value="baner">Baner</option>
                      <option value="wakad">Wakad</option>
                      <option value="aundh">Aundh</option>
                      <option value="hinjewadi">Hinjewadi</option>
                      <option value="viman-nagar">Viman Nagar</option>
                      <option value="kharadi">Kharadi</option>
                      <option value="magarpatta">Magarpatta</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="bhk"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        BHK Configuration
                      </label>
                      <select
                        id="bhk"
                        name="bhk"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      >
                        <option value="">Select BHK</option>
                        <option value="1">1 BHK</option>
                        <option value="2">2 BHK</option>
                        <option value="3">3 BHK</option>
                        <option value="4">4 BHK</option>
                        <option value="5">5+ BHK</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="area"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Built-up Area (sq.ft) *
                      </label>
                      <input
                        type="number"
                        id="area"
                        name="area"
                        required
                        placeholder="e.g., 1200"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Property Age
                      </label>
                      <select
                        id="age"
                        name="age"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      >
                        <option value="">Select Age</option>
                        <option value="new">Under Construction</option>
                        <option value="0-1">0-1 Years</option>
                        <option value="1-5">1-5 Years</option>
                        <option value="5-10">5-10 Years</option>
                        <option value="10+">10+ Years</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="floor"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Floor
                      </label>
                      <input
                        type="text"
                        id="floor"
                        name="floor"
                        placeholder="e.g., 5th Floor"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="amenities"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Amenities
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="amenities"
                          value="parking"
                          className="mr-2"
                        />
                        <span className="text-sm">Parking</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="amenities"
                          value="gym"
                          className="mr-2"
                        />
                        <span className="text-sm">Gym</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="amenities"
                          value="pool"
                          className="mr-2"
                        />
                        <span className="text-sm">Swimming Pool</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="amenities"
                          value="garden"
                          className="mr-2"
                        />
                        <span className="text-sm">Garden</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="amenities"
                          value="security"
                          className="mr-2"
                        />
                        <span className="text-sm">24/7 Security</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="amenities"
                          value="elevator"
                          className="mr-2"
                        />
                        <span className="text-sm">Elevator</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4">
                      Contact Information
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300 font-semibold"
                  >
                    Get Free Valuation Report
                  </button>
                </form>
              </div>

              {/* Valuation Benefits */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Why Get Your Property Valued?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaChartLine className="text-white text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Market Analysis
                      </h4>
                      <p className="text-gray-600">
                        Get comprehensive market analysis based on recent sales,
                        current listings, and market trends in your area.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCalculator className="text-white text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Accurate Pricing
                      </h4>
                      <p className="text-gray-600">
                        Our experts use advanced algorithms and local market
                        knowledge to provide accurate property valuations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCalculator className="text-white text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Detailed Report
                      </h4>
                      <p className="text-gray-600">
                        Receive a comprehensive valuation report with comparable
                        properties, market insights, and recommendations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaChartLine className="text-white text-2xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        Quick Turnaround
                      </h4>
                      <p className="text-gray-600">
                        Get your valuation report within 24-48 hours of
                        submitting your property details.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Market Stats */}
                <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">
                    Pune Real Estate Market Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">
                        ₹8,500
                      </div>
                      <div className="text-sm text-gray-600">
                        Avg. Price/sq.ft
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">
                        15%
                      </div>
                      <div className="text-sm text-gray-600">YoY Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">
                        45 Days
                      </div>
                      <div className="text-sm text-gray-600">
                        Avg. Sale Time
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-900">
                        2,500+
                      </div>
                      <div className="text-sm text-gray-600">
                        Properties Valued
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeValuation;
