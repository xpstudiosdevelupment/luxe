import React from 'react';
import { LUXE_GOLF_INFO } from '../data/luxeGolfData';
import { Phone, MapPin, Globe, Star, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070A07] border-t border-[#C5A059]/20 text-[#F4F4F0]/60 text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand Col */}
          <motion.div whileHover={{ y: -4 }} className="space-y-4 hover-float cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#131B13] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] font-serif-editorial font-bold text-xl shadow-lg">
                LG
              </div>
              <div>
                <div className="text-lg font-serif-editorial font-bold text-[#F4F4F0] tracking-tight">LUXE GOLF</div>
                <div className="text-[10px] text-[#C5A059] font-semibold uppercase tracking-[0.25em]">
                  Lethbridge, AB
                </div>
              </div>
            </div>
            <p className="text-[#F4F4F0]/60 leading-relaxed text-xs font-light">
              Lethbridge's premier indoor golf simulator venue featuring private VIP suites, open simulator bays, swing analysis technology, food, and craft drinks.
            </p>
            <div className="flex items-center gap-2 text-[#C5A059] font-medium text-xs">
              <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
              <span>4.6 / 5.0 Rating</span>
              <span className="text-[#F4F4F0]/40 font-light">(50 Google Reviews)</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div whileHover={{ y: -4 }} className="space-y-3 hover-float">
            <div className="text-[#F4F4F0] font-semibold uppercase tracking-[0.2em] text-[10px]">Navigation</div>
            <ul className="space-y-2 text-[#F4F4F0]/80 font-light">
              <li><a href="#offerings" className="hover:text-[#C5A059] transition-colors">Private VIP Rooms & Open Bays</a></li>
              <li><a href="#food-drinks" className="hover:text-[#C5A059] transition-colors">Food & Licensed Bar Menu</a></li>
              <li><a href="#pricing-rates" className="hover:text-[#C5A059] transition-colors">Rates & Hourly Passes</a></li>
              <li><a href="#reviews" className="hover:text-[#C5A059] transition-colors">Google Customer Reviews</a></li>
              <li><a href="#location" className="hover:text-[#C5A059] transition-colors">Location & Operating Hours</a></li>
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div whileHover={{ y: -4 }} className="space-y-3 hover-float">
            <div className="text-[#F4F4F0] font-semibold uppercase tracking-[0.2em] text-[10px]">Venue Details</div>
            <ul className="space-y-2.5 font-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>220 12a St N, Lethbridge, AB T1H 2J1</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`tel:${LUXE_GOLF_INFO.rawPhone}`} className="hover:text-[#C5A059] font-medium text-[#F4F4F0]">
                  (403) 317-7740
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={LUXE_GOLF_INFO.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059]">
                  luxegolflethbridge.ca
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#C5A059] font-medium">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Open · Closes 10 p.m. Daily</span>
              </li>
            </ul>
          </motion.div>

          {/* Hours Summary */}
          <motion.div whileHover={{ y: -4 }} className="space-y-3 hover-float">
            <div className="text-[#F4F4F0] font-semibold uppercase tracking-[0.2em] text-[10px]">Daily Schedule</div>
            <div className="space-y-1 text-[#F4F4F0]/80 font-light">
              <div className="flex justify-between">
                <span>Mon – Thu:</span>
                <span>10:00 AM – 10:00 PM</span>
              </div>
              <div className="flex justify-between text-[#C5A059] font-medium">
                <span>Fri – Sat:</span>
                <span>9:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM – 10:00 PM</span>
              </div>
            </div>
            <div className="pt-2 text-[11px] text-[#F4F4F0]/40 font-light">
              📍 Free parking on-site. Walk-ins & online reservations welcome.
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#C5A059]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#F4F4F0]/40 font-light text-[11px]">
          <div>
            © {new Date().getFullYear()} Luxe Golf Lethbridge. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>luxegolflethbridge.ca</span>
            <span>•</span>
            <span>(403) 317-7740</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
