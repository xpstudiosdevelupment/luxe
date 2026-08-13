import React from 'react';
import { LUXE_GOLF_INFO } from '../data/luxeGolfData';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingSectionProps {
  onBookClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onBookClick }) => {
  return (
    <section id="pricing-rates" className="py-20 bg-[#090E09] border-b border-[#C5A059]/20 text-[#F4F4F0] px-4 sm:px-6 lg:px-8">
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
            SIMPLE & TRANSPARENT PRICING
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-bold tracking-tight text-[#F4F4F0]">
            HOURLY RATES & <span className="text-[#C5A059] italic font-normal">PUNCH PASSES</span>
          </h2>
          <p className="text-[#F4F4F0]/70 text-base sm:text-lg font-light">
            Pay per bay/room per hour, split with as many golfers as you bring! No extra hidden player fees.
          </p>
        </motion.div>

        {/* Rates Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Open Bay Card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -12, scale: 1.02 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#131B13] rounded-sm p-6 sm:p-8 border border-[#C5A059]/20 space-y-6 flex flex-col justify-between hover:border-[#C5A059]/60 transition-all shadow-xl hover:shadow-[#C5A059]/10 cursor-pointer hover-float"
          >
            <div className="space-y-4">
              <div className="text-[10px] uppercase font-semibold text-[#C5A059] tracking-[0.2em]">
                CASUAL & LEAGUE PLAY
              </div>
              <h3 className="text-2xl font-serif-editorial font-bold text-[#F4F4F0]">Open Simulator Bay</h3>
              <p className="text-xs text-[#F4F4F0]/70 leading-relaxed font-light">
                Spacious hit bays equipped with high-definition course simulation and wide viewing lounge.
              </p>

              <div className="flex items-baseline gap-1 pt-2">
                <span className="text-4xl font-serif-editorial font-bold text-[#F4F4F0]">$45</span>
                <span className="text-[#F4F4F0]/50 text-xs font-light">/ hour (per bay)</span>
              </div>

              <div className="text-[11px] text-[#C5A059] font-medium bg-[#0C120C] p-2.5 rounded-sm border border-[#C5A059]/20">
                💡 Split with 4 golfers = only $11.25 / person / hour!
              </div>

              <ul className="space-y-2 text-xs text-[#F4F4F0]/80 pt-2 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Up to 6 golfers per bay</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Full access to 80+ courses</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Bay-side food & drinks menu</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Open until 10 PM daily</span>
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookClick}
              className="w-full py-3 rounded-sm bg-[#0C120C] hover:bg-[#1C271C] border border-[#C5A059]/30 text-[#F4F4F0] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Reserve Open Bay
            </motion.button>
          </motion.div>

          {/* Private VIP Room Card (Featured) */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -14, scale: 1.04 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#131B13] rounded-sm p-6 sm:p-8 border-2 border-[#C5A059] space-y-6 flex flex-col justify-between relative shadow-2xl scale-105 cursor-pointer hover-float"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A059] text-[#0C120C] px-4 py-1 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] shadow-md">
              MOST POPULAR FOR GROUPS
            </div>

            <div className="space-y-4 pt-2">
              <div className="text-[10px] uppercase font-semibold text-[#C5A059] tracking-[0.2em]">
                VIP EXPERIENCE
              </div>
              <h3 className="text-2xl font-serif-editorial font-bold text-[#F4F4F0]">Private VIP Suite Room</h3>
              <p className="text-xs text-[#F4F4F0]/70 leading-relaxed font-light">
                Soundproof luxury private enclosure with leather sofas, private TV, and room server.
              </p>

              <div className="flex items-baseline gap-1 pt-2">
                <span className="text-4xl font-serif-editorial font-bold text-[#C5A059]">$65</span>
                <span className="text-[#F4F4F0]/50 text-xs font-light">/ hour (per room)</span>
              </div>

              <div className="text-[11px] text-[#C5A059] font-medium bg-[#0C120C] p-2.5 rounded-sm border border-[#C5A059]/30">
                🔥 Ideal for parties, corporate events & focused coaching!
              </div>

              <ul className="space-y-2 text-xs text-[#F4F4F0]/80 pt-2 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Up to 8 guests per suite</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Dedicated VIP server service</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Private sports broadcast TV</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Advanced swing analysis camera option</span>
                </li>
              </ul>
            </div>

            <motion.button
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookClick}
              className="w-full py-3.5 rounded-sm bg-[#C5A059] hover:bg-[#d6b26a] text-[#0C120C] font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              Reserve Private Suite
            </motion.button>
          </motion.div>

          {/* 10-Hour Punch Pass Card */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ y: -12, scale: 1.02 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#131B13] rounded-sm p-6 sm:p-8 border border-[#C5A059]/20 space-y-6 flex flex-col justify-between hover:border-[#C5A059]/60 transition-all shadow-xl hover:shadow-[#C5A059]/10 cursor-pointer hover-float"
          >
            <div className="space-y-4">
              <div className="text-[10px] uppercase font-semibold text-[#C5A059] tracking-[0.2em]">
                REGULAR GOLFER PASS
              </div>
              <h3 className="text-2xl font-serif-editorial font-bold text-[#F4F4F0]">10-Hour Punch Card</h3>
              <p className="text-xs text-[#F4F4F0]/70 leading-relaxed font-light">
                Save 20% on hourly bay time for frequent practice and winter league prep.
              </p>

              <div className="flex items-baseline gap-1 pt-2">
                <span className="text-4xl font-serif-editorial font-bold text-[#F4F4F0]">$360</span>
                <span className="text-[#F4F4F0]/50 text-xs font-light">/ 10 Hours ($36/hr)</span>
              </div>

              <div className="text-[11px] text-[#C5A059] font-medium bg-[#0C120C] p-2.5 rounded-sm border border-[#C5A059]/20">
                ✨ Save $90 compared to single-hour bookings!
              </div>

              <ul className="space-y-2 text-xs text-[#F4F4F0]/80 pt-2 font-light">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Valid for 1 full year</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Use across open bays anytime</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Transferable with family & friends</span>
                </li>
              </ul>
            </div>

            <motion.a
              whileHover={{ y: -3 }}
              href={`tel:${LUXE_GOLF_INFO.rawPhone}`}
              className="w-full py-3 rounded-sm bg-[#0C120C] hover:bg-[#1C271C] border border-[#C5A059]/30 text-[#F4F4F0] font-semibold text-xs uppercase tracking-wider text-center block transition-colors cursor-pointer"
            >
              Call (403) 317-7740 to Purchase
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

