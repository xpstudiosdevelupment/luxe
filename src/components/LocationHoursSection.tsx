import React from 'react';
import { LUXE_GOLF_INFO } from '../data/luxeGolfData';
import { MapPin, Phone, Globe, Clock, Navigation, ExternalLink, Car } from 'lucide-react';
import { motion } from 'motion/react';

export const LocationHoursSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-[#0C120C] border-b border-[#C5A059]/20 text-[#F4F4F0] px-4 sm:px-6 lg:px-8">
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
            <MapPin className="w-3.5 h-3.5" />
            VISIT US IN LETHBRIDGE, AB
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-bold tracking-tight text-[#F4F4F0]">
            LOCATION & <span className="text-[#C5A059] italic font-normal">HOURS</span>
          </h2>
          <p className="text-[#F4F4F0]/70 text-base sm:text-lg font-light">
            Conveniently located at <strong className="text-[#F4F4F0] font-semibold">220 12a St N, Lethbridge, AB T1H 2J1</strong>. Drop in or call <strong className="text-[#C5A059] font-semibold">(403) 317-7740</strong>.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info & Schedule Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Details Card */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="bg-[#131B13] rounded-sm p-6 border border-[#C5A059]/20 space-y-5 shadow-xl hover:border-[#C5A059]/60 transition-all hover-float cursor-pointer"
            >
              <div className="flex items-center justify-between border-b border-[#C5A059]/20 pb-4">
                <div>
                  <h3 className="text-xl font-serif-editorial font-bold text-[#F4F4F0]">Luxe Golf</h3>
                  <p className="text-xs text-[#F4F4F0]/60 font-light">Indoor Golf Simulator Lounge</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#0C120C] text-[#C5A059] text-[10px] font-semibold uppercase tracking-wider border border-[#C5A059]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
                  {LUXE_GOLF_INFO.currentStatusText}
                </span>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-sm">
                <a
                  href={LUXE_GOLF_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#F4F4F0] hover:text-[#C5A059] transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold flex items-center gap-1">
                      <span>220 12a St N</span>
                      <ExternalLink className="w-3 h-3 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-xs text-[#F4F4F0]/60 font-light">Lethbridge, AB T1H 2J1</div>
                  </div>
                </a>

                <a
                  href={`tel:${LUXE_GOLF_INFO.rawPhone}`}
                  className="flex items-center gap-3 text-[#F4F4F0] hover:text-[#C5A059] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <div>
                    <div className="font-semibold">(403) 317-7740</div>
                    <div className="text-xs text-[#C5A059] font-light">Click to call venue</div>
                  </div>
                </a>

                <a
                  href={LUXE_GOLF_INFO.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#F4F4F0] hover:text-[#C5A059] transition-colors"
                >
                  <Globe className="w-5 h-5 text-[#C5A059] shrink-0" />
                  <div>
                    <div className="font-semibold">luxegolflethbridge.ca</div>
                    <div className="text-xs text-[#F4F4F0]/60 font-light">Official Web Portal</div>
                  </div>
                </a>
              </div>

              {/* Parking Note */}
              <div className="p-3 bg-[#0C120C] rounded-sm border border-[#C5A059]/20 text-xs text-[#F4F4F0]/70 flex items-center gap-2 font-light">
                <Car className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Ample free parking located directly in front of venue.</span>
              </div>
            </motion.div>

            {/* Weekly Schedule Card */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#131B13] rounded-sm p-6 border border-[#C5A059]/20 space-y-4 shadow-xl hover:border-[#C5A059]/60 transition-all hover-float cursor-pointer"
            >
              <div className="text-[10px] uppercase font-semibold text-[#C5A059] tracking-[0.2em] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>OPERATING HOURS SCHEDULE</span>
              </div>

              <div className="space-y-2 text-xs font-light">
                {LUXE_GOLF_INFO.hours.map((item) => (
                  <div
                    key={item.day}
                    className={`flex justify-between items-center py-2 px-3 rounded-sm border ${
                      item.day === 'Wednesday' || item.day === 'Thursday'
                        ? 'bg-[#0C120C] border-[#C5A059]/40 text-[#C5A059] font-semibold'
                        : 'bg-[#0C120C]/60 border-[#C5A059]/10 text-[#F4F4F0]/80'
                    }`}
                  >
                    <span>{item.day}</span>
                    <span className="font-medium">{item.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Map Column */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -8 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-[#131B13] rounded-sm p-6 border border-[#C5A059]/20 space-y-6 flex flex-col justify-between h-full shadow-xl hover:border-[#C5A059]/60 transition-all hover-float cursor-pointer"
          >
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-serif-editorial font-bold text-[#F4F4F0]">Interactive Map Location</h3>
                <span className="text-xs text-[#C5A059] font-semibold uppercase tracking-wider">Lethbridge North</span>
              </div>
              <p className="text-xs text-[#F4F4F0]/60 font-light">
                Located on 12a St N just minutes from Mayor Magrath Dr N and 3 Ave N in Lethbridge.
              </p>
            </div>

            {/* Custom Styled Map Card */}
            <div className="relative bg-[#0C120C] rounded-sm border border-[#C5A059]/20 overflow-hidden h-80 sm:h-96 flex items-center justify-center group">
              {/* Decorative map grid styling */}
              <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

              {/* Map Illustration / Visual Pin */}
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative z-10 text-center space-y-4 p-6 bg-[#131B13]/95 backdrop-blur-md rounded-sm border border-[#C5A059]/30 max-w-md mx-4 shadow-2xl"
              >
                <div className="w-12 h-12 rounded-full bg-[#0C120C] text-[#C5A059] flex items-center justify-center mx-auto border border-[#C5A059]/50 animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <div className="font-serif-editorial font-bold text-lg text-[#F4F4F0]">Luxe Golf Lethbridge</div>
                  <div className="text-xs text-[#F4F4F0]/80 font-light">220 12a St N, Lethbridge, AB T1H 2J1</div>
                  <div className="text-xs text-[#C5A059] font-semibold pt-1">(403) 317-7740</div>
                </div>

                <a
                  href={LUXE_GOLF_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#C5A059] hover:bg-[#d6b26a] text-[#0C120C] font-bold text-xs uppercase tracking-wider rounded-sm shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>OPEN IN GOOGLE MAPS DIRECTIONS</span>
                </a>
              </motion.div>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-[#F4F4F0]/50 pt-2 border-t border-[#C5A059]/20 font-light">
              <span>⭐ 4.6 Stars from 50 Google Reviews</span>
              <span>Open Daily · Closes 10 p.m.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

