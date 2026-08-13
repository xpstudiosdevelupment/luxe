import React, { useState } from 'react';
import { CLUB_TELEMETRY_SAMPLES, LUXE_GOLF_INFO } from '../data/luxeGolfData';
import { Activity, Play, RotateCcw, Sparkles, Zap, Award, Info } from 'lucide-react';

export const VirtualSwingAnalyzer: React.FC = () => {
  const [selectedClubIndex, setSelectedClubIndex] = useState(0);
  const [effortPercentage, setEffortPercentage] = useState(95);
  const [isSwinging, setIsSwinging] = useState(false);
  const [shotHistory, setShotHistory] = useState<
    { club: string; distance: number; speed: number; shape: string }[]
  >([]);

  const clubData = CLUB_TELEMETRY_SAMPLES[selectedClubIndex];

  // Calculate live telemetry based on club + effort percentage
  const effortFactor = effortPercentage / 100;
  const simulatedDistance = Math.round(clubData.avgDistanceYards * (0.85 + effortFactor * 0.15));
  const simulatedClubSpeed = Math.round(clubData.clubSpeedMph * effortFactor);
  const simulatedBallSpeed = Math.round(clubData.ballSpeedMph * effortFactor);
  const smashFactor = (simulatedBallSpeed / simulatedClubSpeed).toFixed(2);
  const spinRpm = Math.round(clubData.spinRateRpm * (1.05 - (effortFactor - 1) * 0.1));

  // Determine shot shape
  const getShotShape = () => {
    if (effortPercentage > 100) return "Power Fade (+5 yds right)";
    if (effortPercentage < 90) return "Controlled Draw (-3 yds left)";
    return "Straight High Launch";
  };

  const handleSimulateSwing = () => {
    setIsSwinging(true);
    setTimeout(() => {
      setIsSwinging(false);
      setShotHistory((prev) => [
        {
          club: clubData.clubName,
          distance: simulatedDistance,
          speed: simulatedBallSpeed,
          shape: getShotShape()
        },
        ...prev.slice(0, 4)
      ]);
    }, 1200);
  };

  return (
    <section id="swing-analysis" className="py-20 bg-slate-900 border-b border-emerald-900/30 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5" />
            INTERACTIVE SWING ANALYSIS DEMO
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            PRECISION <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300 bg-clip-text text-transparent">LAUNCH MONITOR</span> DATA
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            At Luxe Golf, our camera sensor arrays measure every parameter of your swing. Try our virtual analyzer below to see how our tech works!
          </p>
        </div>

        {/* Analyzer Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase text-slate-400 tracking-wider flex items-center justify-between">
                <span>Select Golf Club</span>
                <span className="text-emerald-400 font-normal">TrackMan Precision</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CLUB_TELEMETRY_SAMPLES.map((c, idx) => (
                  <button
                    key={c.clubName}
                    onClick={() => setSelectedClubIndex(idx)}
                    className={`px-3 py-2.5 rounded-lg text-xs font-bold text-left transition-all border ${
                      selectedClubIndex === idx
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border-slate-800'
                    }`}
                  >
                    <div>{c.clubName}</div>
                    <div className="text-[10px] opacity-80 font-normal">{c.avgDistanceYards} avg yds</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Effort / Tempo Slider */}
            <div className="space-y-2 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center text-xs text-slate-300">
                <span className="font-semibold text-slate-200">Swing Tempo & Effort</span>
                <span className="font-bold text-emerald-400">{effortPercentage}% Effort</span>
              </div>
              <input
                type="range"
                min="75"
                max="105"
                value={effortPercentage}
                onChange={(e) => setEffortPercentage(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>75% Smooth</span>
                <span>95% Optimal</span>
                <span>105% Max Power</span>
              </div>
            </div>

            {/* Swing Action Button */}
            <button
              onClick={handleSimulateSwing}
              disabled={isSwinging}
              className={`w-full py-4 rounded-xl font-black text-base transition-all shadow-xl flex items-center justify-center gap-2 ${
                isSwinging
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500 hover:from-emerald-400 hover:to-teal-300 text-slate-950 shadow-emerald-500/20'
              }`}
            >
              {isSwinging ? (
                <>
                  <Zap className="w-5 h-5 animate-spin text-emerald-400" />
                  <span>ANALYZING SHOT & BALL FLIGHT...</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-slate-950" />
                  <span>TAKE VIRTUAL SWING</span>
                </>
              )}
            </button>

            {/* Equipment Photo Callout */}
            <div className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-300">
              <Info className="w-5 h-5 text-teal-400 shrink-0" />
              <span>Available in all Luxe Golf private suites and open bays in Lethbridge.</span>
            </div>
          </div>

          {/* Results & Visualizer Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visual Arc Screen */}
            <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-xl p-6 border border-slate-800 overflow-hidden h-64 flex flex-col justify-between">
              {/* Background Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />

              {/* Top Banner */}
              <div className="relative z-10 flex justify-between items-center text-xs">
                <span className="font-bold text-teal-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                  LIVE TRAJECTORY SIMULATOR
                </span>
                <span className="text-slate-400">{clubData.clubName}</span>
              </div>

              {/* Shot Arc Animation SVG */}
              <div className="relative z-10 w-full h-32 my-auto flex items-end justify-center">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100">
                  {/* Ground Line */}
                  <line x1="10" y1="90" x2="290" y2="90" stroke="#334155" strokeWidth="2" />

                  {/* Arc Trajectory Path */}
                  <path
                    d={`M 20 90 Q 150 ${90 - (simulatedDistance / 300) * 80} ${20 + (simulatedDistance / 300) * 260} 90`}
                    fill="none"
                    stroke={isSwinging ? "#2dd4bf" : "#10b981"}
                    strokeWidth="3"
                    strokeDasharray={isSwinging ? "6,6" : "none"}
                    className={isSwinging ? "animate-pulse" : ""}
                  />

                  {/* Landing Spot Marker */}
                  {!isSwinging && (
                    <g transform={`translate(${20 + (simulatedDistance / 300) * 260}, 90)`}>
                      <circle r="5" fill="#10b981" />
                      <circle r="10" fill="#10b981" opacity="0.3" className="animate-ping" />
                      <text x="-20" y="-12" fill="#34d399" fontSize="10" fontWeight="bold">
                        {simulatedDistance} YDS
                      </text>
                    </g>
                  )}
                </svg>
              </div>

              {/* Bottom Shot Shape Text */}
              <div className="relative z-10 flex justify-between items-center text-xs border-t border-slate-800 pt-2">
                <span className="text-slate-400">Shot Shape Result:</span>
                <span className="text-emerald-300 font-bold">{getShotShape()}</span>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                <div className="text-[10px] uppercase text-slate-400 font-semibold">Carry Distance</div>
                <div className="text-2xl font-black text-emerald-400 mt-1">{simulatedDistance} <span className="text-xs text-slate-400 font-normal">yds</span></div>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                <div className="text-[10px] uppercase text-slate-400 font-semibold">Ball Velocity</div>
                <div className="text-2xl font-black text-white mt-1">{simulatedBallSpeed} <span className="text-xs text-slate-400 font-normal">mph</span></div>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                <div className="text-[10px] uppercase text-slate-400 font-semibold">Smash Factor</div>
                <div className="text-2xl font-black text-amber-300 mt-1">{smashFactor}</div>
              </div>

              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
                <div className="text-[10px] uppercase text-slate-400 font-semibold">Backspin</div>
                <div className="text-2xl font-black text-teal-300 mt-1">{spinRpm} <span className="text-xs text-slate-400 font-normal">rpm</span></div>
              </div>
            </div>

            {/* Recent Shot Log */}
            {shotHistory.length > 0 && (
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex justify-between">
                  <span>Session Shot Log</span>
                  <span className="text-emerald-400 text-[10px]">{shotHistory.length} swings recorded</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-300">
                  {shotHistory.map((s, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800">
                      <span className="font-semibold text-slate-200">{s.club}</span>
                      <span className="text-emerald-400 font-bold">{s.distance} yds</span>
                      <span className="text-slate-400 text-[11px]">{s.speed} mph ball speed</span>
                      <span className="text-slate-400 text-[11px] hidden sm:inline">{s.shape}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
