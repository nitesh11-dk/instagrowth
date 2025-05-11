import React, { useState } from 'react';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    instagramLink: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          instagramLink: '',
          service: '',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            <Mail size={16} className="mr-2" />
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help or Have Questions?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Contact our support team for personalized assistance with your Instagram growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Talk About Your Instagram Goals
            </h3>
            <p className="text-gray-300 mb-8">
              We're dedicated to helping you achieve your Instagram growth goals. Fill out the form or connect with us directly on WhatsApp for personalized assistance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                  <Mail className="text-purple-400" size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Email Us</h4>
                  <p className="mt-1 text-gray-400">support@instagrowth.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                  <MessageCircle className="text-purple-400" size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">WhatsApp Support</h4>
                  <p className="mt-1 text-gray-400">
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300"
                    >
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="instagramLink" className="block text-sm font-medium text-gray-300 mb-2">
                    Instagram Profile Link
                  </label>
                  <input
                    type="url"
                    id="instagramLink"
                    name="instagramLink"
                    value={formState.instagramLink}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white"
                    placeholder="https://instagram.com/yourusername"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="followers">Instagram Followers</option>
                    <option value="likes">Post/Reel Likes</option>
                    <option value="comments">Comments</option>
                    <option value="views">Story Views & Likes</option>
                    <option value="saves">Post Saves</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white"
                    placeholder="Tell us about your specific needs..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};