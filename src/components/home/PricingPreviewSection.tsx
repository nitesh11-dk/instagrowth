import React from 'react';
import { DollarSign, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { PricingItemS } from '../../types';

const popularPricingItems: PricingItemS[] = [
  {
    title: 'Instagram Followers',
    description: 'Real-Active • 400k/day',
    price: '₹199',
    badge: 'Trending',
    badgeColor: 'warning',
  },
  {
    title: 'Instagram Post / Reels Likes',
    description: '100k Per Day • Fast Delivery',
    price: '₹19',
    badge: 'Popular',
    badgeColor: 'danger',
    popular: true,
  },
    {
    title: 'Instagram Reels Views ',
    description: 'Real Account • Guaranteed Delivery',
    price: '₹9',
    badge: 'Trending',
    badgeColor: 'warning',
  },
];

export const PricingPreviewSection = () => {
  return (
    <section className="py-20 relative">
      {/* Pink gradient bottom right */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
            <DollarSign size={16} className="mr-2" />
            Best Deals
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Most Popular Packages
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Get the best value for your money with our most popular Instagram growth packages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {popularPricingItems.map((item, index) => (
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
                <div className="flex items-baseline mt-4">
                  <span className="text-3xl font-bold text-white">{item.price}</span>
                  <span className="ml-1 text-gray-400">per 1000</span>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button variant="primary" fullWidth className="group">
                  Buy Now
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Link to="/services">
            <Button variant="outline" size="lg" className="group">
              View All Packages
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};