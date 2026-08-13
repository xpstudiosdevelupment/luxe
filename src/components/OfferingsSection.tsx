import React, { useState } from 'react';
import { Users, Target, Utensils, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LUXE_GOLF_INFO } from '../data/luxeGolfData';

interface OfferingsSectionProps {
  onSelectOffering: () => void;
}

export const OfferingsSection: React.FC<OfferingsSectionProps> = ({ onSelectOffering }) => {
  const [activeTab, setActiveTab] = useState<'private' | 'bays' | 'food'>('private');

  return (
    <section id="offerings" className="py-20 bg-[#0C120C] text-[#F4F4F0] border-b border-[#C5A059]/20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#131B13] border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.25em]">
            FACILITIES & AMENITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-bold text-[#F4F4F0] tracking-tight">
            EVERYTHING YOU NEED FOR <br />
            <span className="text-[#C5A059] italic font-normal">
              THE ULTIMATE INDOOR GOLF
            </span>
          </h2>
          <p className="text-[#F4F4F0]/70 text-base sm:text-lg font-light">
            At Luxe Golf Lethbridge, we offer state-of-the-art indoor golf experiences tailored for casual groups, serious golfers, private events, and food lovers.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 border-b border-[#C5A059]/20 pb-4"
        >
          {[
            { id: 'private', label: 'Private VIP Rooms', icon: Users },
            { id: 'bays', label: 'Open Bays', icon: Target },
            { id: 'food', label: 'Food & Drinks', icon: Utensils }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 rounded-sm font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C5A059] text-[#0C120C] shadow-lg shadow-[#C5A059]/20 font-bold'
                    : 'bg-[#131B13] text-[#F4F4F0]/70 hover:text-[#F4F4F0] hover:bg-[#1a241a] border border-[#C5A059]/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'private' && (
            <motion.div
              key="private"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#131B13] rounded-sm p-6 sm:p-8 border border-[#C5A059]/20 shadow-2xl hover:border-[#C5A059]/50 transition-all hover-float"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#0C120C] text-[#C5A059] border border-[#C5A059]/30 text-[10px] uppercase font-semibold tracking-wider">
                  VIP Experience & Events
                </div>
                <h3 className="text-2xl sm:text-4xl font-serif-editorial font-bold text-[#F4F4F0]">
                  Secluded Private Suites for Parties & Focused Practice
                </h3>
                <p className="text-[#F4F4F0]/70 text-base font-light leading-relaxed">
                  Step into your own private indoor golf sanctuary. Designed for up to 8 guests per room, our VIP suites combine top-tier simulator technology with plush seating, private TV screens, dedicated food & beverage service, and soundproofing.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#F4F4F0]/80 font-light">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Private Soundproof Enclosure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Dedicated Bay Server & Bar Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Custom Lighting & Sports TV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>80+ Championship Golf Courses</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ y: -5, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onSelectOffering}
                    className="px-6 py-3 rounded-sm bg-[#C5A059] hover:bg-[#d6b26a] text-[#0C120C] font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Reserve Private Suite ($65/hr)</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <div className="text-xs text-[#F4F4F0]/50 font-light">
                    Ideal for corporate events, parties & family outings.
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-5 relative"
              >
                <img
                  src={LUXE_GOLF_INFO.images.privateRoom}
                  alt="Luxe Golf Private VIP Suite"
                  className="w-full h-80 object-cover rounded-sm shadow-2xl border border-[#C5A059]/30"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#0C120C]/90 backdrop-blur-md p-3 rounded-sm border border-[#C5A059]/30 text-xs flex justify-between items-center text-[#F4F4F0]">
                  <span className="font-semibold text-[#C5A059]">Private VIP Suite</span>
                  <span className="font-medium">$65 / hour</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'bays' && (
            <motion.div
              key="bays"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#131B13] rounded-sm p-6 sm:p-8 border border-[#C5A059]/20 shadow-2xl hover:border-[#C5A059]/50 transition-all hover-float"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#0C120C] text-[#C5A059] border border-[#C5A059]/30 text-[10px] uppercase font-semibold tracking-wider">
                  High-Energy Open Simulator Bays
                </div>
                <h3 className="text-2xl sm:text-4xl font-serif-editorial font-bold text-[#F4F4F0]">
                  Spacious Open Bays with Precision Tracking
                </h3>
                <p className="text-[#F4F4F0]/70 text-base font-light leading-relaxed">
                  Enjoy a social, lively golf environment in our open simulator bays. Every bay is equipped with wide hit mats, instant shot tracing, multi-angle camera sensors, and comfortable high-top seating for your group.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#F4F4F0]/80 font-light">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>High-Speed Overhead Cameras</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Instant Ball & Clubhead Data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Wide Stance Premium Turf Mats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Multiplayer Games & Target Modes</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ y: -5, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onSelectOffering}
                    className="px-6 py-3 rounded-sm bg-[#C5A059] hover:bg-[#d6b26a] text-[#0C120C] font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Reserve Open Bay ($45/hr)</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <div className="text-xs text-[#F4F4F0]/50 font-light">
                    Great for practice, leagues & casual rounds.
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-5 relative"
              >
                <img
                  src={LUXE_GOLF_INFO.images.openBays}
                  alt="Luxe Golf Open Simulator Bays"
                  className="w-full h-80 object-cover rounded-sm shadow-2xl border border-[#C5A059]/30"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#0C120C]/90 backdrop-blur-md p-3 rounded-sm border border-[#C5A059]/30 text-xs flex justify-between items-center text-[#F4F4F0]">
                  <span className="font-semibold text-[#C5A059]">Open Simulator Bay</span>
                  <span className="font-medium">$45 / hour</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'food' && (
            <motion.div
              key="food"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#131B13] rounded-sm p-6 sm:p-8 border border-[#C5A059]/20 shadow-2xl hover:border-[#C5A059]/50 transition-all hover-float"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#0C120C] text-[#C5A059] border border-[#C5A059]/30 text-[10px] uppercase font-semibold tracking-wider">
                  Kitchen & Licensed Bar
                </div>
                <h3 className="text-2xl sm:text-4xl font-serif-editorial font-bold text-[#F4F4F0]">
                  Gourmet Eats & Cold Craft Drinks Delivered to Your Bay
                </h3>
                <p className="text-[#F4F4F0]/70 text-base font-light leading-relaxed">
                  No need to pause your game. Order directly from your bay server. We serve freshly prepared smash burgers, loaded nachos, crispy wings, craft beers on tap, and signature cocktails.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#F4F4F0]/80 font-light">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>AAA Alberta Beef Smash Burgers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Local Craft Beer Taps & Flights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Sharing Platters & Loaded Nachos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>Cocktails, Wine & Non-Alcoholic Options</span>
                  </div>
                </div>

                <div className="pt-4">
                  <motion.a
                    href="#food-drinks"
                    whileHover={{ y: -5, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 rounded-sm bg-[#C5A059] hover:bg-[#d6b26a] text-[#0C120C] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-md"
                  >
                    <span>View Full Food & Drinks Menu</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-5 relative"
              >
                <img
                  src={LUXE_GOLF_INFO.images.foodDrinks}
                  alt="Luxe Golf Food and Drinks"
                  className="w-full h-80 object-cover rounded-sm shadow-2xl border border-[#C5A059]/30"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#0C120C]/90 backdrop-blur-md p-3 rounded-sm border border-[#C5A059]/30 text-xs flex justify-between items-center text-[#F4F4F0]">
                  <span className="font-semibold text-[#C5A059]">Bay Side Food & Bar Service</span>
                  <span className="font-medium">Open till 10 PM</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

