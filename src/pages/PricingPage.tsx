import { useState } from 'react';
import { ShoppingBag, Check, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { toast } from 'react-toastify';
import { pricingItems, categories, validReferralCodes } from '../constants/index';

const sendDiscordOrder = (item: any) => {
  const contact = prompt("Please share your WhatsApp number, Instagram ID, or Email so we can contact you:");
  const referralCode = prompt("Enter your Referral Code (optional, format: abc123):");

  if (!contact || contact.trim() === "") {
    toast.error("Contact info is required.");
    return;
  }

  let discountMsg = "";
  let finalPrice = item.price;

  if (referralCode && referralCode.trim() !== "") {
    const code = referralCode.trim().toLowerCase();
    const codePattern = /^[A-Za-z]{3}\d{3}$/;

    if (!codePattern.test(code)) {
      toast.error("Referral code must be in format: 3 letters followed by 3 digits (e.g. ABC123).");
      return;
    }

    if (!validReferralCodes.includes(code)) {
      toast.error("Invalid referral code ❌");
      return;
    }

    discountMsg = "\n🎉 You get 10% off!";
    toast.success("Referral code applied! 🎉 You get 10% off!");
    finalPrice = item.price - item.price * 0.10;
  }

  const message = `
  _________________________________
🆔 Order ID: ${item.orderId}
📦 Category: ${item.category}
📝 Title: ${item.title}
💰 Price: ${finalPrice} per 1000
📞 Contact: ${contact}
🎁 Referral Code: ${referralCode || "None"}${discountMsg}
____________________________________
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
                {item.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Check size={18} className="text-green-400 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
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

 