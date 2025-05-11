import React, { useState } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { NavItem } from '../../types';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';

interface SideNavProps {
  items: NavItem[];
}

export const SideNav = ({ items }: SideNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleNav = () => setIsOpen(!isOpen);
  
  return (
    <>
      {/* Mobile Nav Trigger */}
      <button
        onClick={toggleNav}
        className="lg:hidden fixed z-50 top-4 left-4 p-2 rounded-lg bg-gray-800 text-white"
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleNav}
        />
      )}
      
      {/* Side Navigation */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-800 shadow-xl transition-all duration-300 ease-in-out z-50 
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
          w-64 lg:w-72`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-800">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
              <Instagram className="text-purple-500" size={24} />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                InstaGrowth
              </span>
            </Link>
          </div>
          
          {/* Nav Items */}
          <nav className="p-4 flex-1 overflow-y-auto">
            <ul className="space-y-1">
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-purple-500/20 text-purple-300'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {Icon && <Icon className={isActive ? 'text-purple-400' : 'text-gray-500'} size={18} />}
                      <span>{item.title}</span>
                      
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-500" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          {/* Contact Button */}
          <div className="p-4 border-t border-gray-800">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" fullWidth className="group">
                <MessageCircle 
                  size={18} 
                  className="mr-2 transition-transform group-hover:scale-110" 
                />
                Contact on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};