import React, { useState } from 'react';
import { MENU_ITEMS, LUXE_GOLF_INFO } from '../data/luxeGolfData';
import { Utensils, Search, Flame } from 'lucide-react';
import { motion } from 'motion/react';

export const FoodMenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'starters' | 'mains' | 'beverages' | 'cocktails'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="food-drinks" className="py-20 bg-[#090E09] border-b border-[#C5A059]/20 text-[#F4F4F0] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#131B13] border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.25em]">
            <Utensils className="w-3.5 h-3.5" />
            KITCHEN & LICENSED BAR
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-bold tracking-tight text-[#F4F4F0]">
            FINE FOOD & <span className="text-[#C5A059] italic font-normal">CRAFT SPIRITS</span>
          </h2>
          <p className="text-[#F4F4F0]/70 text-base sm:text-lg font-light">
            Enjoy artisanal burgers, sharing platters, local Alberta craft draft beer, and signature cocktails delivered straight to your simulator bay or private suite.
          </p>
        </motion.div>

        {/* Feature Hero Card */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -8 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#131B13] rounded-sm p-6 sm:p-8 border border-[#C5A059]/20 items-center shadow-2xl hover:border-[#C5A059]/50 transition-all cursor-pointer hover-float"
        >
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[10px] uppercase font-semibold text-[#C5A059] tracking-[0.2em] flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>BAY SIDE HOSPITALITY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#F4F4F0]">
              No Pausing Your Game — Full Service Delivered Right To Your Bay
            </h3>
            <p className="text-[#F4F4F0]/80 text-sm leading-relaxed font-light">
              Whether you're hosting a birthday in a private room or practicing late in an open bay before our 10 PM close, order easily from our friendly venue staff.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-[#0C120C] text-[#C5A059] border border-[#C5A059]/20 rounded-sm text-xs font-medium">
                🍺 Local Craft Draft
              </span>
              <span className="px-3 py-1 bg-[#0C120C] text-[#C5A059] border border-[#C5A059]/20 rounded-sm text-xs font-medium">
                🍔 Smash Burgers
              </span>
              <span className="px-3 py-1 bg-[#0C120C] text-[#C5A059] border border-[#C5A059]/20 rounded-sm text-xs font-medium">
                🍸 Signature Cocktails
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <img
              src={LUXE_GOLF_INFO.images.foodDrinks}
              alt="Luxe Golf Food & Drinks Service"
              className="w-full h-72 sm:h-80 object-cover rounded-sm border border-[#C5A059]/20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 right-4 bg-[#0C120C]/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold">
              Full Licensed Bar
            </div>
          </div>
        </motion.div>

        {/* Search & Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-between"
        >
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'starters', label: 'Starters & Sharing' },
              { id: 'mains', label: 'Mains & Burgers' },
              { id: 'beverages', label: 'Craft Beer & Wine' },
              { id: 'cocktails', label: 'Cocktails' }
            ].map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#C5A059] text-[#0C120C] shadow-md font-bold'
                    : 'bg-[#131B13] text-[#F4F4F0]/80 border border-[#C5A059]/20 hover:bg-[#1C271C]'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-[#C5A059] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search food or drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0C120C] border border-[#C5A059]/20 rounded-sm pl-9 pr-3 py-2 text-xs text-[#F4F4F0] focus:outline-none focus:border-[#C5A059]"
            />
          </div>
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -6, scale: 1.015 }}
              viewport={{ once: false }}
              transition={{ delay: (index % 6) * 0.05, duration: 0.4 }}
              className="bg-[#131B13] p-5 rounded-sm border border-[#C5A059]/20 hover:border-[#C5A059]/60 transition-all space-y-2 flex flex-col justify-between shadow-lg hover:shadow-[#C5A059]/10 cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start gap-2">
                  <div className="font-serif-editorial font-bold text-base text-[#F4F4F0] flex items-center gap-2">
                    <span>{item.name}</span>
                    {item.popular && (
                      <span className="text-[9px] uppercase tracking-wider bg-[#C5A059]/20 text-[#C5A059] px-2 py-0.5 rounded-sm border border-[#C5A059]/30">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="font-serif-editorial font-bold text-[#C5A059] text-base shrink-0">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
                <p className="text-xs text-[#F4F4F0]/70 mt-1 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {item.dietary && (
                <div className="pt-2 text-[10px] text-[#C5A059] font-medium">
                  ✓ {item.dietary.join(', ')}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

