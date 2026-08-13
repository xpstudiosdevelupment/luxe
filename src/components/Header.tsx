import React, { useState } from 'react';
import { Phone, Star, MapPin, Menu, X, Calendar } from 'lucide-react';
import { LUXE_GOLF_INFO } from '../data/luxeGolfData';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0C120C]/90 backdrop-blur-md border-b border-[#C5A059]/20 text-[#F4F4F0]">
      {/* Top Banner Notice */}
      <div className="bg-[#131B13] text-xs py-2 px-4 text-[#F4F4F0]/80 border-b border-[#C5A059]/15">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-[#0C120C] text-[#C5A059] font-semibold text-[11px] border border-[#C5A059]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
              {LUXE_GOLF_INFO.currentStatusText}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#F4F4F0]/70 font-light">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              {LUXE_GOLF_INFO.address}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${LUXE_GOLF_INFO.rawPhone}`}
              className="hover:text-[#C5A059] transition-colors flex items-center gap-1 text-[#F4F4F0]/90 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{LUXE_GOLF_INFO.phone}</span>
            </a>
            <div className="hidden md:flex items-center gap-1 text-[#C5A059] font-medium">
              <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
              <span>{LUXE_GOLF_INFO.rating}</span>
              <span className="text-[#F4F4F0]/40 font-light">({LUXE_GOLF_INFO.totalReviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            href="#"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-sm bg-[#131B13] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] font-serif-editorial font-bold text-xl shadow-lg group-hover:border-[#C5A059] transition-all">
              LG
            </div>
            <div>
              <div className="text-xl font-serif-editorial font-bold tracking-tight text-[#F4F4F0] group-hover:text-[#C5A059] transition-colors">
                LUXE GOLF
              </div>
              <div className="text-[10px] tracking-[0.25em] text-[#C5A059] font-semibold uppercase">
                Lethbridge, AB
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase font-semibold tracking-wider text-[#F4F4F0]/80">
            <motion.a whileHover={{ y: -2 }} href="#offerings" className="hover:text-[#C5A059] transition-colors hover-float">
              Bays & Private Rooms
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#food-drinks" className="hover:text-[#C5A059] transition-colors hover-float">
              Food & Drinks
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#pricing-rates" className="hover:text-[#C5A059] transition-colors hover-float">
              Rates
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#reviews" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 hover-float">
              <span>Reviews</span>
              <span className="text-[10px] bg-[#131B13] border border-[#C5A059]/30 text-[#C5A059] px-1.5 py-0.5 rounded-sm font-bold">
                {LUXE_GOLF_INFO.rating} ★
              </span>
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#location" className="hover:text-[#C5A059] transition-colors hover-float">
              Location & Hours
            </motion.a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${LUXE_GOLF_INFO.rawPhone}`}
              className="px-5 py-2.5 rounded-sm bg-[#C5A059] hover:bg-[#d6b26a] text-[#0C120C] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#0C120C]" />
              <span>Call Us (403) 317-7740</span>
            </motion.a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm text-[#F4F4F0] hover:text-[#C5A059] hover:bg-[#131B13]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0C120C] border-b border-[#C5A059]/30 px-4 pt-3 pb-6 space-y-4 overflow-hidden"
          >
            <nav className="flex flex-col space-y-3 text-sm text-[#F4F4F0]/90">
              <a
                href="#offerings"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C5A059] py-1"
              >
                Bays & Private Rooms
              </a>
              <a
                href="#food-drinks"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C5A059] py-1"
              >
                Food & Drinks Menu
              </a>
              <a
                href="#pricing-rates"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C5A059] py-1"
              >
                Rates & Passes
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C5A059] py-1 flex items-center justify-between"
              >
                <span>Google Reviews</span>
                <span className="text-xs bg-[#131B13] text-[#C5A059] px-2 py-0.5 rounded-sm border border-[#C5A059]/30 font-bold">
                  4.6 ★ (50)
                </span>
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C5A059] py-1"
              >
                Location & Hours
              </a>
            </nav>

            <div className="pt-3 border-t border-[#C5A059]/20 flex flex-col gap-2">
              <a
                href={`tel:${LUXE_GOLF_INFO.rawPhone}`}
                className="w-full py-3 bg-[#C5A059] hover:bg-[#d6b26a] text-[#0C120C] font-bold rounded-sm text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4 text-[#0C120C]" />
                <span>Call (403) 317-7740</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

