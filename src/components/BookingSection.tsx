import React, { useState } from 'react';
import { BayType, BookingDetails } from '../types';
import { LUXE_GOLF_INFO, MENU_ITEMS } from '../data/luxeGolfData';
import { Calendar, Clock, Users, CheckCircle, Shield, AlertCircle, Phone, ArrowRight, DollarSign } from 'lucide-react';

interface BookingSectionProps {
  initialBayType?: BayType;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialBayType = 'open_bay' }) => {
  const [bayType, setBayType] = useState<BayType>(initialBayType);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [selectedTime, setSelectedTime] = useState<string>("14:00");
  const [durationHours, setDurationHours] = useState<number>(2);
  const [playersCount, setPlayersCount] = useState<number>(4);
  const [addSwingAnalysis, setAddSwingAnalysis] = useState<boolean>(true);
  const [includeFoodPackage, setIncludeFoodPackage] = useState<boolean>(false);

  const [customerName, setCustomerName] = useState<string>("");
  const [customerPhone, setCustomerPhone] = useState<string>("");
  const [customerEmail, setCustomerEmail] = useState<string>("");

  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Time slots generation up to 10 PM (22:00)
  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
    "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"
  ];

  const hourlyRate = bayType === 'private_room' ? LUXE_GOLF_INFO.pricing.privateRoomPerHour : LUXE_GOLF_INFO.pricing.openBayPerHour;
  const baseCost = hourlyRate * durationHours;
  const swingAnalysisCost = addSwingAnalysis ? LUXE_GOLF_INFO.pricing.swingAnalysisAddon : 0;
  const foodPackageCost = includeFoodPackage ? 38.00 : 0;
  const totalPrice = baseCost + swingAnalysisCost + foodPackageCost;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newBooking: BookingDetails = {
        id: `LXG-${Math.floor(100000 + Math.random() * 900000)}`,
        bayType,
        date: selectedDate,
        timeSlot: selectedTime,
        durationHours,
        playersCount,
        addSwingAnalysis,
        customerName,
        customerEmail: customerEmail || "guest@luxegolf.ca",
        customerPhone,
        totalPrice,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      };

      // Save to localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('luxe_golf_bookings') || '[]');
        localStorage.setItem('luxe_golf_bookings', JSON.stringify([newBooking, ...existing]));
      } catch (err) {
        console.error(err);
      }

      setConfirmedBooking(newBooking);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="pricing" className="py-20 bg-slate-950 text-white border-b border-emerald-900/30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            INSTANT ONLINE RESERVATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            BOOK YOUR <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">GOLF BAY OR SUITE</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Reserve your time slot at Luxe Golf in Lethbridge. Choose between open simulator bays or private VIP rooms with full food & drink service.
          </p>
        </div>

        {/* Confirmation Modal / Screen */}
        {confirmedBooking ? (
          <div className="max-w-2xl mx-auto bg-slate-900 rounded-2xl p-8 border border-emerald-500/50 shadow-2xl space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                RESERVATION CONFIRMED
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                You're All Set for Luxe Golf!
              </h3>
              <p className="text-slate-300 text-sm">
                Booking Reference: <strong className="text-emerald-400 font-mono text-base">{confirmedBooking.id}</strong>
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-left space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Bay Type:</span>
                <span className="font-bold text-emerald-300">
                  {confirmedBooking.bayType === 'private_room' ? 'Private VIP Suite' : 'Open Simulator Bay'}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Date & Time:</span>
                <span className="font-bold text-white">{confirmedBooking.date} @ {confirmedBooking.timeSlot}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Duration & Guests:</span>
                <span className="font-bold text-white">{confirmedBooking.durationHours} Hours ({confirmedBooking.playersCount} Players)</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Guest Name:</span>
                <span className="font-bold text-white">{confirmedBooking.customerName} ({confirmedBooking.customerPhone})</span>
              </div>
              <div className="flex justify-between pt-1 text-base">
                <span className="font-bold text-slate-300">Estimated Total:</span>
                <span className="font-black text-emerald-400">${confirmedBooking.totalPrice.toFixed(2)} CAD</span>
              </div>
            </div>

            <div className="p-4 bg-emerald-950/50 rounded-xl border border-emerald-800/60 text-xs text-slate-300 space-y-1">
              <div className="font-bold text-emerald-300">📍 Location & Arrival Info</div>
              <div>220 12a St N, Lethbridge, AB T1H 2J1 • Phone: (403) 317-7740</div>
              <div className="text-slate-400">Please arrive 10 minutes before your reserved start time. Free parking available on-site.</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setConfirmedBooking(null)}
                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-sm"
              >
                Book Another Time
              </button>
              <a
                href={LUXE_GOLF_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <span>Get Directions to 220 12a St N</span>
              </a>
            </div>
          </div>
        ) : (
          /* Main Reservation Form */
          <form onSubmit={handleBookingSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Step 1 & 2: Configuration */}
            <div className="lg:col-span-8 bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-8">
              {/* Select Bay Type */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>1. Choose Bay Experience</span>
                  <span className="text-emerald-400 font-normal">Closes 10 p.m. Daily</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => setBayType('open_bay')}
                    className={`cursor-pointer p-5 rounded-xl border-2 transition-all flex flex-col justify-between space-y-3 ${
                      bayType === 'open_bay'
                        ? 'border-emerald-500 bg-emerald-950/30'
                        : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-black text-lg text-white">Open Simulator Bay</div>
                        <div className="text-xs text-slate-400">Social, high-energy environment</div>
                      </div>
                      <span className="text-xs font-bold bg-slate-800 text-emerald-400 px-2.5 py-1 rounded-full">
                        $45 / hr
                      </span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• High-speed tracking cameras</li>
                      <li>• 1-6 players per bay</li>
                      <li>• Full bar & food service</li>
                    </ul>
                  </div>

                  <div
                    onClick={() => setBayType('private_room')}
                    className={`cursor-pointer p-5 rounded-xl border-2 transition-all flex flex-col justify-between space-y-3 ${
                      bayType === 'private_room'
                        ? 'border-emerald-500 bg-emerald-950/30'
                        : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-black text-lg text-white flex items-center gap-1.5">
                          Private VIP Suite
                          <span className="text-[10px] bg-amber-500 text-slate-950 font-bold px-1.5 py-0.5 rounded">VIP</span>
                        </div>
                        <div className="text-xs text-slate-400">Secluded soundproof room</div>
                      </div>
                      <span className="text-xs font-bold bg-slate-800 text-amber-300 px-2.5 py-1 rounded-full">
                        $65 / hr
                      </span>
                    </div>
                    <ul className="text-xs text-slate-300 space-y-1">
                      <li>• Private soundproof lounge</li>
                      <li>• TV screens & room server</li>
                      <li>• Up to 8 guests</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>2. Select Date</span>
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Select Time Slot</span>
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>{ts}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Duration & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    3. Duration (Hours)
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((h) => (
                      <button
                        type="button"
                        key={h}
                        onClick={() => setDurationHours(h)}
                        className={`flex-1 py-2.5 rounded-lg text-xs font-bold border ${
                          durationHours === h
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                            : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                        }`}
                      >
                        {h} {h === 1 ? 'Hour' : 'Hours'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Number of Players</span>
                  </label>
                  <select
                    value={playersCount}
                    onChange={(e) => setPlayersCount(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Golfer' : 'Golfers'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  4. Optional Add-ons
                </label>

                <div className="space-y-2">
                  <label className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer hover:border-slate-700">
                    <input
                      type="checkbox"
                      checked={addSwingAnalysis}
                      onChange={(e) => setAddSwingAnalysis(e.target.checked)}
                      className="mt-1 accent-emerald-500 w-4 h-4"
                    />
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span>Swing Analysis Video & Telemetry Report</span>
                        <span className="text-xs text-emerald-400 font-semibold">+$20</span>
                      </div>
                      <div className="text-xs text-slate-400">
                        Includes club speed, face angle, video swing replay exported to your email.
                      </div>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer hover:border-slate-700">
                    <input
                      type="checkbox"
                      checked={includeFoodPackage}
                      onChange={(e) => setIncludeFoodPackage(e.target.checked)}
                      className="mt-1 accent-emerald-500 w-4 h-4"
                    />
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        <span>Bay Welcome Platter (Loaded Nachos + Pitcher)</span>
                        <span className="text-xs text-emerald-400 font-semibold">+$38</span>
                      </div>
                      <div className="text-xs text-slate-400">
                        Fresh loaded nachos & 60 oz craft draft beer pitcher ready upon arrival.
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Guest Information */}
              <div className="space-y-3 pt-2 border-t border-slate-800">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  5. Contact Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (e.g. 403-317-7740) *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address (for confirmation receipt)"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Summary Sidebar Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 rounded-2xl p-6 border border-emerald-900/40 sticky top-28 space-y-6">
                <div className="border-b border-slate-800 pb-4">
                  <div className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                    RESERVATION SUMMARY
                  </div>
                  <div className="text-xl font-black text-white mt-1">
                    Luxe Golf Lethbridge
                  </div>
                  <div className="text-xs text-slate-400">
                    220 12a St N, Lethbridge
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Experience:</span>
                    <span className="font-bold text-white">
                      {bayType === 'private_room' ? 'Private VIP Suite' : 'Open Simulator Bay'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rate:</span>
                    <span className="font-bold text-white">${hourlyRate}/hr × {durationHours} hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date & Time:</span>
                    <span className="font-bold text-white">{selectedDate} @ {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Players:</span>
                    <span className="font-bold text-white">{playersCount} Golfers</span>
                  </div>

                  {addSwingAnalysis && (
                    <div className="flex justify-between text-teal-300">
                      <span>Swing Analysis Add-on:</span>
                      <span className="font-bold">+$20.00</span>
                    </div>
                  )}

                  {includeFoodPackage && (
                    <div className="flex justify-between text-amber-300">
                      <span>Bay Platter Package:</span>
                      <span className="font-bold">+$38.00</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-800 pt-4 flex justify-between items-baseline">
                  <div>
                    <div className="text-xs text-slate-400">Total Price</div>
                    <div className="text-[10px] text-emerald-400">Pay at venue or online</div>
                  </div>
                  <div className="text-3xl font-black text-emerald-400">
                    ${totalPrice.toFixed(2)}
                    <span className="text-xs font-normal text-slate-400"> CAD</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-base shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>CONFIRMING BOOKING...</span>
                  ) : (
                    <>
                      <span>CONFIRM RESERVATION</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Free cancellation up to 2 hours before start</span>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
