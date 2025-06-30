import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-900 flex items-center justify-center rounded">
            <span className="text-white font-bold text-xl">LE</span>
          </div>
          <div>
            <div className="text-2xl font-[Playfair Display] font-bold text-blue-900">Lifestyle Estates</div>
            <div className="text-xs text-gray-600 uppercase tracking-wide">Property Advisors | Channel Partner</div>
          </div>
        </div>

        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}>About Us</NavLink>
          <NavLink to="/properties" className={({ isActive }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}>Properties</NavLink>
          <NavLink to="/home-search" className={({ isActive }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}>Home Search</NavLink>
          <NavLink to="/home-valuation" className={({ isActive }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}>Home Valuation</NavLink>
          <NavLink to="/neighborhoods" className={({ isActive }) => isActive ? 'text-blue-900 font-semibold' : 'text-gray-600 hover:text-gray-900'}>Neighborhoods</NavLink>
        </div>

        <button onClick={toggleMobileMenu} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3 text-gray-600 hover:bg-gray-50">Home</NavLink>
          <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3 text-gray-600 hover:bg-gray-50">About Us</NavLink>
          <NavLink to="/properties" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3 text-gray-600 hover:bg-gray-50">Properties</NavLink>
          <NavLink to="/home-search" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3 text-gray-600 hover:bg-gray-50">Home Search</NavLink>
          <NavLink to="/home-valuation" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3 text-gray-600 hover:bg-gray-50">Home Valuation</NavLink>
          <NavLink to="/neighborhoods" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-3 text-gray-600 hover:bg-gray-50">Neighborhoods</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
