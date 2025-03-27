import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold text-primary">LogicLeap</span>
              <span className="text-2xl font-light ml-1">Consulting</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-dark hover:text-primary transition duration-200">
              Services
            </Link>
            <Link href="/#about" className="text-dark hover:text-primary transition duration-200">
              About Us
            </Link>
            <Link href="/#contact" className="text-dark hover:text-primary transition duration-200">
              Contact
            </Link>
            <Link href="/contact" className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4 py-4">
              <Link href="/#services" 
                onClick={() => setIsOpen(false)}
                className="text-dark hover:text-primary px-2 py-1 transition duration-200">
                Services
              </Link>
              <Link href="/#about" 
                onClick={() => setIsOpen(false)}
                className="text-dark hover:text-primary px-2 py-1 transition duration-200">
                About Us
              </Link>
              <Link href="/#contact" 
                onClick={() => setIsOpen(false)}
                className="text-dark hover:text-primary px-2 py-1 transition duration-200">
                Contact
              </Link>
              <Link href="/contact" 
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white py-2 px-4 rounded hover:bg-blue-700 inline-block transition duration-200">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 