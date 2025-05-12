import React, { useState } from 'react';
import { Filter, ShoppingBag, Check, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PricingItem } from '../types';
import { toast } from 'react-toastify';


const pricingItems: PricingItem[] = [

  {
    orderId: 1136, 
    title: 'Instagram Followers • Old Account • Non Drop • 10-20k Per Day • 365 Days Refill',
    description: 'Old accounts with non-drop service and refill for 365 days',
    price: '₹149',//65
    badge: 'Old Account',
    badgeColor: 'warning',
    category: 'Followers',
    features: ['Speed: 50K per day', 'Refill: 365 days'],
  },
  {
    orderId: 1138, 
    title: 'Instagram Followers ❄️+15 Post Profile ♨️ Non drop 🧿 Refill 365 Day 🆕 Flag On/Off 2nd',
    description: 'New followers with a +15 post profile, non-drop, lifetime refill',
    price: '₹189',//95
    badge: 'Post Profile',
    badgeColor: 'info',
    category: 'Followers',
    features: ['Start: One Click', 'Speed: Bullet Speed 🚀'],
  },
  {
    orderId: 1132, 
    title: 'Instagram Followers • Ultra Fast Working • Lifetime Refill ⚜️ • Flag On / Off ♨️',
    description: 'Ultra-fast working followers with lifetime refill and flag on/off option',
    price: '₹169',//81.6
    badge: 'Ultra Fast',
    badgeColor: 'success',
    category: 'Followers',
    features: ['Speed: 100K per day', 'Drops up to 2%', 'Mix quality'],
  },
  {
    orderId: 1133, 
    title: 'Instagram Followers • Old Accounts • One Click Done Service • R365 Day\'s • Non Drop • Working ⚜️',
    description: 'Old accounts with one-click service, non-drop, 365-day refill',
    price: '₹179',//94.2
    badge: 'One Click Service',
    badgeColor: 'danger',
    category: 'Followers',
    features: ['Refill: 365 days', 'Speed: 400K per day', 'No drops', 'Guarantee', 'Real'],
  },
  {
    orderId: 574, 
    title: 'Instagram Indian Followers 🇮🇳 • 200k Per Day • Always Instant • Old Accounts With Indian Post',
    description: 'Instant Indian followers with old accounts and 200K per day speed',
    price: '₹299',//165
    badge: 'Real Indian Followers',
    badgeColor: 'primary',
    category: 'Followers',
    features: ['Speed: 200K per day', 'No drops', 'Guarantee', 'Real'],
  },
  {
    orderId: 588, 
    title: 'Premium Insta Followers | All Types Profile Accepted | R365♻️',
    description: 'Premium quality followers with all types of profiles accepted',
    price: '₹289',///158
    badge: 'Active Followers',
    badgeColor: 'success',
    category: 'Followers',
    features: ['Speed: 500K per day', 'Refill: 365 days', 'No drops', 'Guarantee'],
  },
   {
    orderId:1122,
    title: 'Instagram Likes ▫️Slow Speed ♻️Refill 365',
    description: 'Fast speed with refill for 365 days, non-drop',
    price: '₹9',///0.99
    badge: 'Slow Speed',
    badgeColor: 'success',
    category: 'Likes',
    features: ['Speed: 50K per day', 'Refill: 365 days', 'Drops up to 5%', 'Mix quality'],
  },
  {
      orderId:1137,
    title: 'Instagram Likes - Non Drop - R365Days - Speed Fast',
    description: 'Non-drop likes with fast speed and 365 days refill',
    price: '₹18',//1.7
    badge: 'Non Drop',
    badgeColor: 'warning',
    category: 'Likes',
    features: ['Speed: 100K per day', 'Refill: 365 days'],
  },
  {
    orderId: 675,
    title: 'Instagram Likes 100% Old Account - [Zero Drop] - Working Update',
    description: '100% old account likes, zero drop, working with refill for 9999 days',
    price: '₹24',//1.8
    badge: 'Zero Drop',
    badgeColor: 'success',
    category: 'Likes',
    features: [
      'Refill: 9999 days',
      'Speed: 200K per day',
      'No drops',
      'Guarantee',
      'Real accounts',
    ],
  },
    {
    orderId: 1135,
    title: 'Instagram Reels Views | All Link | 100K/Day | Instant 🚀',
    description: 'Get instant Instagram Reels views with speed up to 200K per day.',
    price: '₹5',//0.15,,
    badge: 'Instant',
    badgeColor: 'success',
    category: 'Views',
    features: [
      'Start: Instant',
      'Speed: 200K per day',
      'No drops',
      'Guarantee',
    ],
  },
  {
    orderId: 661,
    title: "Instagram Reels View's • Ultra Fast • Non Drop • 10-20% Extra Delivery 🚚",
    description: 'Ultra-fast Instagram Reels views with bonus 10–20% extra delivery and no drops.',
    price: '₹10',////0.54
    badge: 'Ultra Fast',
    badgeColor: 'success',
    category: 'Views',
    features: [
      'Speed: Ultra Fast',
      'No drops',
      '10–20% Extra Delivery',
    ],
  },
   {
    orderId:656,
    title: 'Instagram Saves • All Countries • All Link Working',
    description: 'Works for All Countries & All Links',
    price: '₹25',///7.4
    badge: 'All Link Working',
    badgeColor: 'primary',
    category: 'Saves',
    features: [
      'Global Service',
      'Compatible with All Links',
    ],
  },
  {
    orderId:701,
    title: 'Instagram Post Save • Non Drop • Fast Working',
    description: 'Guaranteed Non Drop • Fast Delivery at 100K/day',
    price: '₹9',//00.465
    badge: 'Non Drop',
    badgeColor: 'success',
    category: 'Saves',
    features: [
      'No Drops',
      'Guaranteed',
      'Mix Quality',
      'Speed: 100K per day',
    ],
  },
  {
    orderId:1117,
    title: 'Instagram Custom Comments - Indian Profile (Non Drop)',
    description: 'Custom Comments from Indian Profiles • Real & Reliable',
    price: '₹144',///106
    badge: 'Non Drop',
    badgeColor: 'success',
    category: 'Comments',
    features: [
      'Drops up to 5%',
      'Guaranteed',
      'Real Accounts',
      'Speed: 20K per day',
    ],
  },
  {
    orderId:1118,
    title: 'Instagram Emoji Comments | Positive React 😘💞💐🏵️😍🤩🥰',
    description: 'Positive Reactions via Emoji Comments • High Quality',
    price: '₹359',//292
    badge: 'Emoji Pack',
    badgeColor: 'warning',
    category: 'Comments',
    features: [
      'Drops up to 3%',
      'Guaranteed',
      'Mix Quality',
      'Speed: 20K per day',
    ],
  },
  {
    orderId:961,
    title: 'Instagram Random Comments • Natural Speed',
    description: 'Random Comments with Natural Delivery • Stable Quality',
    price: '₹499',//390
    badge: 'Refill 365',
    badgeColor: 'primary',
    category: 'Comments',
    features: [
      'Refill 365 Days',
      'No Drops',
      'Guaranteed',
      'Mix Quality',
      'Cancel Button',
      'Speed: 10K per day',
    ],
  }, 
  {
    orderId:562,
    title: 'Instagram Shares • Non Drop • Working For Post & Reels',
    description: 'Fast and Reliable Share Boost • Works for Posts & Reels',
    price: '₹15',///2.1
    badge: 'Non Drop',
    badgeColor: 'success',
    category: 'Shares',
    features: [
      'Refill 1 Day',
      'No Drops',
      'Real',
      'Speed: 500K per day',
    ],
  },
  {
    orderId:1123,
    title: 'Instagram Story Views • High Quality Profile • One Minute Start • 100k Per Day',
    description: 'High quality profiles with 1-minute start time and 100k/day speed',
    price: '₹10',///6.6
    badge: 'High Quality',
    badgeColor: 'success',
    category: 'Story Views',
    features: ['Start: 1 Minute', 'Speed: 100K per day'],
  },
  {
    orderId:654,
    title: "Instagram Story View's • One Click Start • Working Fast",
    description: 'One click start with no drops and real accounts',
    price: '₹19',//9
    badge: 'No Drop',
    badgeColor: 'success',
    category: 'Story Views',
    features: ['No Drops', 'Guarantee', 'Real', 'Speed: 50K per day'],
  },
];

const categories = [
  'All',
  'Followers',
  'Likes',
  'Views',
  'Comments',
  'Saves',
  'Shares',
  'Story Views'
];


const sendDiscordOrder = (item: any) => {
  const contact = prompt("Enter your WhatsApp number, Instagram ID, or Email:");
  const referalCode = prompt("Enter your Referral Code (optional, format: ABC123):");

  if (!contact || contact.trim() === "") {
    toast.error("Contact info is required.");
    return;
  }

  let discountMsg = "";

  // Check if referral code is entered and valid (3 letters + 3 digits)
  if (referalCode && referalCode.trim() !== "") {
    const codePattern = /^[A-Za-z]{3}\d{3}$/;
    if (codePattern.test(referalCode.trim())) {
      discountMsg = "\n🎉 You get 10% off!";
      toast.success("Referral code applied! 🎉 You get 10% off!");
    } else {
      toast.error("Referral code must be in format: 3 letters followed by 3 digits (e.g. ABC123).");
      return;
    }
  }

  const message = `
  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
🆔 Order ID: ${item.orderId}
📦 Category: ${item.category}
📝 Title: ${item.title}
💰 Price: ${item.price} per 1000
📞 Contact: ${contact}
🎁 Referral Code: ${referalCode || "None"}${discountMsg}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
`;

  const webhookUrl = "https://discord.com/api/webhooks/1371040026959417405/SaIpjqDGqGlHm_5WPr2PBVo0DuvuLnTSDaOL-30ROHsY9r2srOidvfB0dyw4dGSjT2tt";

  const payload = { content: message };

  fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Network issue");
      return res.text();
    })
    .then(() => {
      toast.success("✅ Order sent! We’ll contact you soon.");
    })
    .catch(() => {
      toast.error("⚠️ Server down. Please send order via WhatsApp 🙏");
    });
};


export const PricingPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? pricingItems
    : pricingItems.filter(item => item.category === activeCategory);

  return (
    <div id='#pricing' className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
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
        {filteredItems.map((item, index) => (
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
                <ul className="space-y-2 mb-6">
  {item.features?.map((feature, idx) => (
    <li key={idx} className="flex items-center text-gray-300">
      <Check size={18} className="text-green-400 mr-2 flex-shrink-0" />
      <span>{feature}</span>
    </li>
  ))}
</ul>

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
      onClick={() => sendDiscordOrder(item)}
    >
      <Zap size={18} className="mr-2 group-hover:animate-pulse" />
      Buy Now
    </Button>

            </CardFooter>
          </Card>
        ))}
      </div>

      
    </div>
  );
};
