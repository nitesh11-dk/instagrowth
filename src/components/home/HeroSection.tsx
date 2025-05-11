import React from 'react';
import { ArrowRight, Zap, ShieldCheck, ThumbsUp, Users } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Purple gradient on top */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            Grow Your Instagram 
            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Fast & Organic 🚀
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-300">
            Buy Real Likes, Followers, Comments & More to Boost Your Social Presence
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/pricing">
              <Button 
                size="lg" 
                className="group animate-pulse hover:animate-none"
              >
                Explore Pricing
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
            
            <Link to="/#services">
              <Button 
                variant="outline" 
                size="lg"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
          {[
            { icon: Zap, text: "Start in 60 Seconds" },
            { icon: ShieldCheck, text: "100% Safe & Secure" },
            { icon: ThumbsUp, text: "High Quality Engagement" },
            { icon: Users, text: "Real-Looking Profiles" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-800/30 backdrop-blur-sm rounded-lg border border-gray-700">
              <item.icon className="text-purple-400 mb-3" size={28} />
              <span className="text-sm font-medium text-gray-200">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};