import React from 'react';
import { Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Stethoscope className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-semibold text-gray-900">Dr. Sarah Mitchell, MD</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/#services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
          <Link to="/#about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
          <Link to="/#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Get Started
        </button>
      </nav>
    </header>
  );
}