import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-blue-900 pt-24">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-[Playfair Display] mb-4">
            Contact Us
          </h1>
          <p className="text-xl">Get in Touch with Our Real Estate Experts</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-[Playfair Display] mb-8">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
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
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
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
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  >
                    <option value="">Select an interest</option>
                    <option value="buying">Buying Property</option>
                    <option value="selling">Selling Property</option>
                    <option value="renting">Renting Property</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="valuation">Property Valuation</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1cr">Under ₹1 Crore</option>
                    <option value="1-3cr">₹1 - 3 Crores</option>
                    <option value="3-5cr">₹3 - 5 Crores</option>
                    <option value="5-10cr">₹5 - 10 Crores</option>
                    <option value="above-10cr">Above ₹10 Crores</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-blue-900 hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to receiving marketing communications from
                    Lifestyle Estates.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-[Playfair Display] mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Office Address
                    </h3>
                    <p className="text-gray-600">
                      Lifestyle Estates
                      <br />
                      123 Business Center
                      <br />
                      Koregaon Park, Pune - 411001
                      <br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Phone Numbers
                    </h3>
                    <p className="text-gray-600">
                      Office: +91-20-1234-5678
                      <br />
                      Mobile: +91-98765-43210
                      <br />
                      WhatsApp: +91-98765-43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Email Addresses
                    </h3>
                    <p className="text-gray-600">
                      General: info@lifestyleestates.com
                      <br />
                      Sales: sales@lifestyleestates.com
                      <br />
                      Support: support@lifestyleestates.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 7:00 PM
                      <br />
                      Saturday: 9:00 AM - 5:00 PM
                      <br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/lifestyleestatespune/"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition"
                  >
                    <FaFacebookF className="text-2xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/lifestyle.estates.pune/"
                    className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a
                    href="https://www.youtube.com/@LifestyleEstates"
                    className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition"
                  >
                    <FaYoutube className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition"
                  >
                    <FaWhatsapp className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
