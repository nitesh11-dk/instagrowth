import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const togglePopup = () => setIsOpen(!isOpen);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popup */}
      {isOpen && (
        <div className="mb-4 w-72 bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in-up">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3">
                  <MessageCircle className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold">Chat with us</h3>
                  <p className="text-purple-100 text-sm">We typically reply in a few minutes</p>
                </div>
              </div>
              <button
                onClick={togglePopup}
                className="text-white hover:text-purple-200"
                aria-label="Close chat popup"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50">
            <p className="text-gray-700 mb-4">
              Hello! 👋 How can we help you with your Instagram growth today?
            </p>
            
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white w-full py-2 px-4 rounded-md flex items-center justify-center font-medium transition-colors"
            >
              <MessageCircle className="mr-2" size={18} />
              Start Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
      
      {/* Button */}
      <button
        onClick={togglePopup}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-90' 
            : 'bg-green-500 hover:bg-green-600 animate-pulse'
        }`}
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white" />
        )}
      </button>
    </div>
  );
};