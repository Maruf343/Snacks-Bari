export type FeaturedSnack = {
  id: string;
  name: string;
  price: string;
  image: string;
  tag: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

export const featuredSnacks: FeaturedSnack[] = [
  {
    id: 'crunchy-mango',
    name: 'Crunchy Mango Chips',
    price: '$6.99',
    image: 'https://images.unsplash.com/photo-1516685018646-5494d8c40d2f?auto=format&fit=crop&w=900&q=80',
    tag: 'Chips',
  },
  {
    id: 'berry-sparkle',
    name: 'Berry Sparkle Soda',
    price: '$3.49',
    image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80',
    tag: 'Drink',
  },
  {
    id: 'cocoa-bites',
    name: 'Cocoa Bliss Bites',
    price: '$5.99',
    image: 'https://images.unsplash.com/photo-1550304943-f0482b7ceb09?auto=format&fit=crop&w=900&q=80',
    tag: 'Sweets',
  },
];

export const categories: Category[] = [
  {
    id: 'chips',
    name: 'Chips',
    description: 'Bold crunches with zesty seasoning, perfect for snack time or parties.',
    icon: '🍟',
  },
  {
    id: 'drinks',
    name: 'Drinks',
    description: 'Refreshing beverages and sparkling flavors to keep your snack breaks bright.',
    icon: '🥤',
  },
  {
    id: 'sweets',
    name: 'Sweets',
    description: 'Sweet treats with vibrant textures and playful flavor combinations.',
    icon: '🍫',
  },
  {
    id: 'healthy-snacks',
    name: 'Healthy',
    description: 'Wholesome bites crafted for energy, balance, and delicious taste.',
    icon: '🥗',
  },
  {
    id: 'local-snacks',
    name: 'Local Snacks',
    description: 'Spicy and savory favorites from local snack makers and street food style bites.',
    icon: '🌶️',
  },
  {
    id: 'combo-packs',
    name: 'Combo Packs',
    description: 'Curated snack bundles packed with variety for gifting or sharing.',
    icon: '🎁',
  },
];
