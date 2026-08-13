import React from 'react';
import { Calendar, Phone, Star, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { LUXE_GOLF_INFO } from '../data/luxeGolfData';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0C120C] text-[#F4F4F0] overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Image with Dark Vignette Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={LUXE_GOLF_INFO.images.hero}
          alt="Luxe Golf Indoor Simulator Lounge"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C120C] via-[#0C120C]/80 to-[#0C120C]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0C120C]/60 to-[#0C120C]" />
      </div>

      {/* Hero Content Box */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
      >
        {/* Rating & Hours Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#131B13]/90 border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.2em] backdrop-blur-md shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
            <span>Open Today · Closes 10 p.m.</span>
          </motion.div>

          <motion.a
            href="#reviews"
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-[#131B13]/90 border border-[#C5A059]/30 text-[#C5A059] text-[11px] font-semibold backdrop-blur-md hover:border-[#C5A059] transition-colors"
          >
            <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
            <span className="font-bold text-[#F4F4F0]">4.6</span>
            <span className="text-[#F4F4F0]/70">/ 5.0 Rating</span>
            <span className="text-[#F4F4F0]/50 font-light">(50 Reviews)</span>
          </motion.a>

          <motion.div
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm bg-[#131B13]/90 border border-[#C5A059]/20 text-[#F4F4F0]/80 text-[11px] font-light backdrop-blur-md"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Lethbridge, AB</span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-editorial font-bold tracking-tight text-[#F4F4F0] leading-none">
            LETHBRIDGE’S PREMIER <br />
            <span className="text-[#C5A059] italic font-normal">
              INDOOR GOLF
            </span>{" "}
            & LOUNGE
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-[#F4F4F0]/80 font-light leading-relaxed">
            Experience ultra-realistic golf simulation at <strong className="text-[#C5A059] font-semibold">220 12a St N</strong>. Featuring <span className="text-[#F4F4F0] font-normal">private VIP suites</span>, <span className="text-[#F4F4F0] font-normal">open practice bays</span>, high-precision simulator tech, and delicious food & craft drinks.
          </p>
        </motion.div>

        {/* Core Pillars Pills with float hover */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2">
          {[
            { title: 'Private Rooms', desc: 'VIP Suites & TV' },
            { title: 'Open Bays', desc: 'World-class Simulators' },
            { title: 'Food & Drinks', desc: 'Kitchen & Licensed Bar' },
            { title: 'Open Daily', desc: 'Closes 10 p.m.' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-[#131B13]/90 border border-[#C5A059]/20 rounded-sm p-3.5 text-center backdrop-blur-md hover:border-[#C5A059] transition-all cursor-pointer shadow-lg hover:shadow-[#C5A059]/10"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold">{item.title}</div>
              <div className="text-xs text-[#F4F4F0]/60 mt-0.5 font-light">{item.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <motion.button
            onClick={onBookClick}
            whileHover={{ y: -8, scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-[#C5A059] hover:bg-[#d6b26a] text-[#0C120C] font-bold text-xs uppercase tracking-[0.15em] shadow-xl shadow-[#C5A059]/20 transition-all flex items-center justify-center gap-3 group cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#0C120C]" />
            <span>VIEW RATES & PRICING</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.a
            href={`tel:${LUXE_GOLF_INFO.rawPhone}`}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-4 rounded-sm bg-[#131B13]/90 hover:bg-[#1a241a] border border-[#C5A059]/30 text-[#F4F4F0] font-semibold text-xs uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-3 backdrop-blur-md"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>Call (403) 317-7740</span>
          </motion.a>

          <motion.button
            onClick={onExploreClick}
            whileHover={{ y: -4 }}
            className="w-full sm:w-auto px-6 py-4 text-[#F4F4F0]/70 hover:text-[#C5A059] font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>Explore Facilities</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Location & Website bar */}
        <motion.div
          whileHover={{ y: -3 }}
          className="pt-6 border-t border-[#C5A059]/20 text-xs text-[#F4F4F0]/60 font-light flex flex-wrap justify-center items-center gap-x-6 gap-y-2"
        >
          <span>📍 <strong>Address:</strong> 220 12a St N, Lethbridge, AB T1H 2J1</span>
          <span>🌐 <strong>Official Website:</strong> {LUXE_GOLF_INFO.websiteDisplay}</span>
          <span>🕒 <strong>Daily Hours:</strong> Open · Closes 10 p.m.</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

