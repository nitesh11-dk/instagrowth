import React from 'react';
import { Instagram, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">InstaGrowth</h3>
            <p className="text-gray-400 mb-4">
              Providing premium Instagram growth services to help you increase your social presence and engagement.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
      
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[

                'Instagram Followers',
                'Post/Reel Likes',
                'Comments',
                'Story Views & Likes',
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/pricing" 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span className="text-gray-400">support@instagrowth.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">
                  <MessageCircle size={20} />
                </span>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} InstaGrowth. All rights reserved.
          </p>
          <div className="space-x-4">
            <Link to="/terms" className="text-gray-500 hover:text-purple-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-500 hover:text-purple-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/refund" className="text-gray-500 hover:text-purple-400 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};