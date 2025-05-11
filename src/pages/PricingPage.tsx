import React, { useState } from 'react';
import { Filter, ShoppingBag, Check, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PricingItem } from '../types';

const pricingItems: PricingItem[] = [
  {
    title: 'Instagram Post + Reels Likes',
    description: '100k Per Day • Fast Delivery',
    price: '₹2.3',
    badge: '25% OFF',
    badgeColor: 'danger',
    popular: true,
  },
  {
    title: 'Instagram Likes 100% Old Account',
    description: 'Zero Drop • 100% Real Accounts',
    price: '₹1.8',
    badge: 'Popular',
    badgeColor: 'primary',
  },
  {
    title: 'Instagram Likes • Mix Indian',
    description: '5% Drop • One Click Start',
    price: '₹8.7',
    badge: 'Real',
    badgeColor: 'success',
  },
  {
    title: 'Instagram Story Views + Likes',
    description: 'Female Account • Guaranteed Delivery',
    price: '₹9',
    badge: 'Trending',
    badgeColor: 'warning',
  },
  {
    title: 'Instagram Post Save',
    description: 'Non Drop • Instant Start',
    price: '₹9',
    badge: 'Boost Algorithm',
    badgeColor: 'primary',
  },
  {
    title: 'Instagram Followers • High Quality',
    description: 'Real-Looking • 10% Extra',
    price: '₹12',
    badge: 'Best Seller',
    badgeColor: 'warning',
  },
  {
    title: 'Instagram Auto Likes (30 Days)',
    description: 'Auto Engagement • Unlimited Posts',
    price: '₹199',
    badge: 'Monthly',
    badgeColor: 'primary',
  },
  {
    title: 'Instagram Comments',
    description: 'Custom Comments • 100% Manual',
    price: '₹15',
    badge: 'Real Users',
    badgeColor: 'success',
  },
  {
    title: 'Instagram IGTV Views',
    description: 'Boost Visibility • Start in 60s',
    price: '₹3.5',
    badge: 'New',
    badgeColor: 'danger',
  },
];

const categories = [
  'All',
  'Followers',
  'Likes',
  'Comments',
  'Views',
  'Saves',
];

export const PricingPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  return (
    <div className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
          <ShoppingBag size={16} className="mr-2" />
          Our Packages
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Instagram Growth Pricing
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose from our wide range of Instagram growth services tailored to boost your social media presence.
        </p>
      </div>
      
      {/* Categories Filter */}
      <div className="mb-12">
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {pricingItems.map((item, index) => (
          <Card 
            key={index} 
            hoverEffect 
            className={`relative overflow-hidden ${item.popular ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' : ''}`}
          >
            {item.popular && (
              <div className="absolute -right-12 top-7 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-1 rotate-45 text-sm font-medium shadow-md">
                BEST VALUE
              </div>
            )}
            
            <CardHeader>
              {item.badge && (
                <Badge color={item.badgeColor as any} className="mb-2">
                  {item.badge}
                </Badge>
              )}
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-400 mb-4">{item.description}</p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-green-400 mr-2 flex-shrink-0" />
                  <span>Instant Start</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-green-400 mr-2 flex-shrink-0" />
                  <span>No Password Required</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-green-400 mr-2 flex-shrink-0" />
                  <span>24/7 Support</span>
                </li>
              </ul>
              
              <div className="flex items-baseline mt-4">
                <span className="text-3xl font-bold text-white">{item.price}</span>
                <span className="ml-1 text-gray-400">per 1000</span>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                variant="primary" 
                fullWidth 
                className="group"
              >
                <Zap size={18} className="mr-2 group-hover:animate-pulse" />
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* FAQs */}
      <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          {[
            {
              question: "Is it safe to buy Instagram likes and followers?",
              answer: "Yes, our service is 100% safe. We never require your password and use methods that comply with Instagram's terms of service. We focus on high-quality, authentic-looking engagement that mimics natural growth patterns."
            },
            {
              question: "How soon will I see results after purchasing?",
              answer: "Most of our services start within 60 seconds after purchase. The delivery speed depends on the package size, but you'll typically see results immediately for smaller packages, and larger orders complete within 24-48 hours."
            },
            {
              question: "Will the followers or likes drop over time?",
              answer: "We offer different packages with varying drop rates. Our premium 'Zero Drop' packages maintain nearly 100% retention, while other packages may have a small percentage of drop (usually 5-10%) which is normal for any Instagram growth service."
            },
            {
              question: "Do I need to provide my Instagram password?",
              answer: "Absolutely not! We only require your Instagram username or post URL to deliver the services. We never ask for or need your password to provide our services."
            }
          ].map((faq, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium text-white mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};