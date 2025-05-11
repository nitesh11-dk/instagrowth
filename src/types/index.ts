export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface PricingItem {
  title: string;
  description: string;
  price: string;
  badge?: string;
  badgeColor?: string;
  popular?: boolean;
}