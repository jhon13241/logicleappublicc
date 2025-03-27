import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/">
              <span className="text-2xl font-bold text-white">LogicLeap</span>
              <span className="text-2xl font-light text-gray-300 ml-1">Consulting</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Your experienced data management enablement partner. We empower your organization with innovative strategies.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors duration-300">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors duration-300">
                <FaFacebookF className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on data management trends and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {currentYear} LogicLeap Consulting. All rights reserved.
          </p>
          <p className="text-gray-500 mt-4 md:mt-0">
            Powered by a logical strategy
          </p>
        </div>
        
        <div className="mt-8 p-4 bg-gray-800 rounded-md text-sm text-gray-400 text-center">
          This website uses cookies to analyze website traffic and optimize your website experience.
        </div>
      </div>
    </footer>
  );
} 