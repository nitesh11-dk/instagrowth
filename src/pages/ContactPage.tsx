import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const ContactPage = () => {
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
    <div className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
          <Mail size={16} className="mr-2" />
          Contact Us
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have questions about our services? We're here to help you grow your Instagram presence.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <Card className="h-full p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                  <Mail className="text-purple-400" size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-400">support@instagrowth.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                  <Phone className="text-purple-400" size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-400">+1 (234) 567-890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                  <MessageCircle className="text-purple-400" size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">WhatsApp</h3>
                  <p className="mt-1">
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
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Office</h3>
                  <p className="mt-1 text-gray-400">
                    123 Social Media Street<br />
                    Digital Valley, CA 90210
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h3 className="text-lg font-medium text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank you for reaching out!</h3>
                <p className="text-gray-400">We've received your message and will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name*
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
                      Email Address*
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
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-white"
                    placeholder="Tell us about your specific needs..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
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
    </div>
  );
};