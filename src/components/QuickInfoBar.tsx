import React from 'react';
import { MapPin, Phone, Globe, Clock, Star, ExternalLink, Navigation } from 'lucide-react';
import { LUXE_GOLF_INFO } from '../data/luxeGolfData';
import { motion } from 'motion/react';

export const QuickInfoBar: React.FC = () => {
  return (
    <div className="bg-[#090E09] border-y border-[#C5A059]/20 text-[#F4F4F0] py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Address Card */}
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4 }}
          href={LUXE_GOLF_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#131B13] p-4 rounded-sm border border-[#C5A059]/20 hover:border-[#C5A059]/60 transition-all flex items-start gap-3 shadow-lg hover-float cursor-pointer"
        >
          <div className="p-2.5 rounded-sm bg-[#0C120C] text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0C120C] transition-colors border border-[#C5A059]/30">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C5A059] flex items-center gap-1">
              Location
              <Navigation className="w-3 h-3 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-sm font-serif-editorial font-bold text-[#F4F4F0] group-hover:text-[#C5A059] transition-colors mt-0.5">
              220 12a St N
            </div>
            <div className="text-xs text-[#F4F4F0]/60 font-light">Lethbridge, AB T1H 2J1</div>
          </div>
        </motion.a>

        {/* Phone Card */}
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.05 }}
          href={`tel:${LUXE_GOLF_INFO.rawPhone}`}
          className="group bg-[#131B13] p-4 rounded-sm border border-[#C5A059]/20 hover:border-[#C5A059]/60 transition-all flex items-start gap-3 shadow-lg hover-float cursor-pointer"
        >
          <div className="p-2.5 rounded-sm bg-[#0C120C] text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0C120C] transition-colors border border-[#C5A059]/30">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C5A059]">
              Phone Number
            </div>
            <div className="text-sm font-serif-editorial font-bold text-[#F4F4F0] group-hover:text-[#C5A059] transition-colors mt-0.5">
              (403) 317-7740
            </div>
            <div className="text-xs text-[#C5A059] font-medium">Click to Call Now</div>
          </div>
        </motion.a>

        {/* Website Card */}
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.1 }}
          href={LUXE_GOLF_INFO.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-[#131B13] p-4 rounded-sm border border-[#C5A059]/20 hover:border-[#C5A059]/60 transition-all flex items-start gap-3 shadow-lg hover-float cursor-pointer"
        >
          <div className="p-2.5 rounded-sm bg-[#0C120C] text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0C120C] transition-colors border border-[#C5A059]/30">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C5A059] flex items-center gap-1">
              Official Web
              <ExternalLink className="w-3 h-3 text-[#C5A059]" />
            </div>
            <div className="text-sm font-serif-editorial font-bold text-[#F4F4F0] group-hover:text-[#C5A059] transition-colors mt-0.5">
              luxegolflethbridge.ca
            </div>
            <div className="text-xs text-[#F4F4F0]/60 font-light">Bookings & Info</div>
          </div>
        </motion.a>

        {/* Hours Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-[#131B13] p-4 rounded-sm border border-[#C5A059]/20 flex items-start gap-3 shadow-lg hover-float cursor-pointer"
        >
          <div className="p-2.5 rounded-sm bg-[#0C120C] text-[#C5A059] border border-[#C5A059]/30">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C5A059]">
              Hours Today
            </div>
            <div className="text-sm font-serif-editorial font-bold text-[#C5A059] flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
              Open · Closes 10 p.m.
            </div>
            <div className="text-xs text-[#F4F4F0]/60 font-light">Daily indoor golf</div>
          </div>
        </motion.div>

        {/* Google Reviews Card */}
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          viewport={{ once: false }}
          transition={{ duration: 0.4, delay: 0.2 }}
          href="#reviews"
          className="group bg-[#131B13] p-4 rounded-sm border border-[#C5A059]/20 hover:border-[#C5A059]/60 transition-all flex items-start gap-3 shadow-lg hover-float cursor-pointer"
        >
          <div className="p-2.5 rounded-sm bg-[#0C120C] text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0C120C] transition-colors border border-[#C5A059]/30">
            <Star className="w-5 h-5 fill-[#C5A059]" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C5A059]">
              Google Rating
            </div>
            <div className="text-sm font-serif-editorial font-bold text-[#C5A059] mt-0.5 flex items-center gap-1">
              <span>4.6 Stars</span>
              <span className="text-xs text-[#F4F4F0]/60 font-normal">(50 Reviews)</span>
            </div>
            <div className="text-xs text-[#C5A059] font-medium">Top Rated in Lethbridge</div>
          </div>
        </motion.a>
      </div>
    </div>
  );
};

