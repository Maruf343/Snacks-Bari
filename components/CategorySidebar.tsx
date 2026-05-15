'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    label: 'Chips & Crisps',
    slug: 'chips-crisps',
    icon: '🥔',
    children: ['Classic Chips', 'Flavored Crisps', 'Party Packs'],
  },
  {
    label: 'Chocolates & Sweets',
    slug: 'chocolates-sweets',
    icon: '🍫',
    children: ['Milk Chocolate', 'Candy Bars', 'Gourmet Treats'],
  },
  {
    label: 'Nuts & Dry Snacks',
    slug: 'nuts-dry-snacks',
    icon: '🥜',
    children: ['Roasted Nuts', 'Trail Mix', 'Seeds & Bars'],
  },
  {
    label: 'Healthy Snacks',
    slug: 'healthy-snacks',
    icon: '🥗',
    children: ['Protein Bites', 'Fruit Crisps', 'Veggie Chips'],
  },
  {
    label: 'Beverages',
    slug: 'beverages',
    icon: '🥤',
    children: ['Sparkling Drinks', 'Juices', 'Tea & Energy'],
  },
  {
    label: 'Biscuits & Bakery',
    slug: 'biscuits-bakery',
    icon: '🍪',
    children: ['Cookies', 'Wafers', 'Cake Bites'],
  },
  {
    label: 'Spicy & Local Snacks',
    slug: 'spicy-local-snacks',
    icon: '🌶️',
    children: ['Masala Mix', 'Regional Crunch', 'Hot Bites'],
  },
  {
    label: 'Combo & Offers',
    slug: 'combo-offers',
    icon: '🎁',
    children: ['Mix Boxes', 'Bundles', 'Seasonal Deals'],
  },
  {
    label: 'Kids Snacks',
    slug: 'kids-snacks',
    icon: '🧒',
    children: ['Mini Treats', 'Sweet Packs', 'Fun Shapes'],
  },
  {
    label: 'Imported Snacks',
    slug: 'imported-snacks',
    icon: '🌍',
    children: ['International Chips', 'Global Sweets', 'Premium Picks'],
  },
];

export default function CategorySidebar() {
  const [activeCategory, setActiveCategory] = useState('Chips & Crisps');
  const [expandedCategory, setExpandedCategory] = useState('Chips & Crisps');
  const [activeSubcategory, setActiveSubcategory] = useState('Classic Chips');

  const activeCategoryData = useMemo(
    () => categories.find((item) => item.label === activeCategory) ?? categories[0],
    [activeCategory]
  );

  return (
    <aside className="w-[250px] rounded-[2rem] border border-slate-200 bg-slate-50/95 p-6 shadow-sm shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-none">
      <div className="sticky top-24 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Shop categories</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Categories</h2>
        </div>

        <div className="h-px bg-slate-200 dark:bg-slate-800" />

        <nav aria-label="Main categories" className="space-y-3">
          {categories.map((category) => {
            const isActive = activeCategory === category.label;
            const isExpanded = expandedCategory === category.label;

            return (
              <div key={category.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-slate-800">
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => {
                    setActiveCategory(category.label);
                    setExpandedCategory((prev) => (prev === category.label ? '' : category.label));
                    setActiveSubcategory(category.children[0]);
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-medium transition ${
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-100 text-base dark:bg-slate-800">
                      {category.icon}
                    </span>
                    <span>{category.label}</span>
                  </span>
                  <span className="text-sm text-slate-400">
                    {isExpanded ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-72 border-t border-slate-200' : 'max-h-0'
                  }`}
                >
                  <div className="space-y-2 px-4 py-3">
                    {category.children.map((sub) => {
                      const isSubActive = activeSubcategory === sub && activeCategory === category.label;
                      return (
                        <Link
                          key={sub}
                          href={`/products?category=${category.slug}&subcategory=${sub.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={() => {
                            setActiveCategory(category.label);
                            setExpandedCategory(category.label);
                            setActiveSubcategory(sub);
                          }}
                          className={`block rounded-2xl px-3 py-2 text-sm transition ${
                            isSubActive
                              ? 'bg-slate-900 text-white'
                              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                          }`}
                        >
                          {sub}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-white">Selected</p>
          <p className="mt-2">
            {activeCategoryData.label}
            <span className="block text-slate-500 dark:text-slate-400">{activeSubcategory}</span>
          </p>
        </div>
      </div>
    </aside>
  );
}
