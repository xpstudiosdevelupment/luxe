import React, { useState } from 'react';
import { REVIEWS_DATA, LUXE_GOLF_INFO } from '../data/luxeGolfData';
import { ReviewItem } from '../types';
import { Star, ThumbsUp, PlusCircle, ShieldCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ReviewsSection: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS_DATA);
  const [filterTag, setFilterTag] = useState<string>('All');
  const [showReviewModal, setShowReviewModal] = useState(false);

  // Form State
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newTag, setNewTag] = useState<'Private Room' | 'Open Bays' | 'Swing Analysis' | 'Food & Drinks' | 'General'>('Private Room');
  const [newComment, setNewComment] = useState('');

  const filteredReviews = reviewsList.filter(
    (r) => filterTag === 'All' || r.tag === filterTag
  );

  const handleHelpfulClick = (id: string) => {
    setReviewsList((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
      rating: newRating,
      date: "Just now",
      comment: newComment,
      tag: newTag,
      helpfulCount: 1
    };

    setReviewsList([newRev, ...reviewsList]);
    setShowReviewModal(false);
    setNewAuthor('');
    setNewComment('');
  };

  return (
    <section id="reviews" className="py-20 bg-[#0C120C] border-b border-[#C5A059]/20 text-[#F4F4F0] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#131B13] border border-[#C5A059]/20 text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.25em]">
            <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
            VERIFIED GOOGLE REVIEWS
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-editorial font-bold tracking-tight text-[#F4F4F0]">
            RATED <span className="text-[#C5A059]">4.6 STARS</span> FROM 50 REVIEWS
          </h2>
          <p className="text-[#F4F4F0]/70 text-base sm:text-lg font-light">
            See why golfers, families, and party hosts across Lethbridge love spending their evenings at Luxe Golf.
          </p>
        </motion.div>

        {/* Rating Breakdown Card */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ y: -8 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="bg-[#131B13] rounded-sm p-6 sm:p-8 border border-[#C5A059]/20 grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-2xl hover:border-[#C5A059]/50 transition-all hover-float"
        >
          <div className="md:col-span-4 text-center md:text-left space-y-2 md:border-r md:border-[#C5A059]/20 md:pr-6">
            <div className="text-5xl font-serif-editorial font-bold text-[#F4F4F0] flex items-center justify-center md:justify-start gap-3">
              <span>{LUXE_GOLF_INFO.rating}</span>
              <div className="flex text-[#C5A059] text-2xl">
                ★★★★★
              </div>
            </div>
            <div className="text-sm font-semibold text-[#F4F4F0]">
              Based on {LUXE_GOLF_INFO.totalReviews} Google Reviews
            </div>
            <div className="text-xs text-[#F4F4F0]/60 flex items-center justify-center md:justify-start gap-1 font-light">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Verified Lethbridge Indoor Golf Venue</span>
            </div>
          </div>

          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-[#F4F4F0]/50 font-light">5 Stars</span>
              <div className="flex-1 h-1.5 bg-[#0C120C] rounded-full overflow-hidden">
                <div className="h-full bg-[#C5A059] w-[88%]" />
              </div>
              <span className="w-8 text-[#F4F4F0] text-right font-bold">44</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-[#F4F4F0]/50 font-light">4 Stars</span>
              <div className="flex-1 h-1.5 bg-[#0C120C] rounded-full overflow-hidden">
                <div className="h-full bg-[#C5A059] w-[10%]" />
              </div>
              <span className="w-8 text-[#F4F4F0] text-right font-bold">5</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="w-12 text-[#F4F4F0]/50 font-light">3 Stars</span>
              <div className="flex-1 h-1.5 bg-[#0C120C] rounded-full overflow-hidden">
                <div className="h-full bg-[#C5A059] w-[2%]" />
              </div>
              <span className="w-8 text-[#F4F4F0] text-right font-bold">1</span>
            </div>
          </div>

          <div className="md:col-span-3 text-center md:text-right space-y-2">
            <motion.button
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowReviewModal(true)}
              className="px-5 py-2.5 rounded-sm bg-[#C5A059] hover:bg-[#d6b26a] text-[#0C120C] font-bold text-xs uppercase tracking-wider w-full md:w-auto shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Write a Review</span>
            </motion.button>
            <div className="text-[11px] text-[#F4F4F0]/40 font-light">
              Shared on Google & Venue Directory
            </div>
          </div>
        </motion.div>

        {/* Filter Badges */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="text-xs text-[#F4F4F0]/50 font-light mr-2">Filter Reviews:</span>
          {['All', 'Private Room', 'Open Bays', 'Swing Analysis', 'Food & Drinks'].map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setFilterTag(tag)}
              className={`px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filterTag === tag
                  ? 'bg-[#C5A059] text-[#0C120C] shadow-md font-bold'
                  : 'bg-[#131B13] text-[#F4F4F0]/80 border border-[#C5A059]/20 hover:bg-[#1C271C]'
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ y: 35, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: false }}
              transition={{ delay: (idx % 6) * 0.08, duration: 0.4 }}
              className="bg-[#131B13] p-6 rounded-sm border border-[#C5A059]/20 space-y-4 flex flex-col justify-between hover:border-[#C5A059]/60 transition-all shadow-xl hover:shadow-[#C5A059]/10 cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover border border-[#C5A059]/30"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-serif-editorial font-bold text-sm text-[#F4F4F0]">{rev.author}</div>
                      <div className="text-[11px] text-[#F4F4F0]/50 font-light">{rev.date}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-sm bg-[#0C120C] text-[#C5A059] border border-[#C5A059]/20">
                    {rev.tag}
                  </span>
                </div>

                <div className="flex items-center text-[#C5A059] text-sm">
                  {'★'.repeat(rev.rating)}
                  <span className="text-[#F4F4F0]/20">{'★'.repeat(5 - rev.rating)}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#F4F4F0]/80 leading-relaxed font-light italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-between text-xs text-[#F4F4F0]/60">
                <span className="text-[11px] text-[#C5A059] font-medium">✓ Google Verified Review</span>
                <button
                  onClick={() => handleHelpfulClick(rev.id)}
                  className="flex items-center gap-1 hover:text-[#C5A059] transition-colors text-xs cursor-pointer"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Helpful ({rev.helpfulCount})</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for adding review */}
        <AnimatePresence>
          {showReviewModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0C120C]/85 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#131B13] border border-[#C5A059]/40 rounded-sm p-6 max-w-lg w-full space-y-6 relative shadow-2xl"
              >
                <button
                  onClick={() => setShowReviewModal(false)}
                  className="absolute top-4 right-4 text-[#F4F4F0]/50 hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-1">
                  <h3 className="text-xl font-serif-editorial font-bold text-[#F4F4F0]">Write a Review for Luxe Golf</h3>
                  <p className="text-xs text-[#F4F4F0]/60 font-light">Located at 220 12a St N, Lethbridge</p>
                </div>

                <form onSubmit={handleAddReviewSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-[#F4F4F0]/80 block mb-1 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael S."
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full bg-[#0C120C] border border-[#C5A059]/20 rounded-sm p-3 text-xs text-[#F4F4F0] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#F4F4F0]/80 block mb-1 uppercase tracking-wider">Rating</label>
                    <select
                      value={newRating}
                      onChange={(e) => setNewRating(Number(e.target.value))}
                      className="w-full bg-[#0C120C] border border-[#C5A059]/20 rounded-sm p-3 text-xs text-[#F4F4F0] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 Stars - Excellent)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 Stars - Great)</option>
                      <option value={3}>⭐⭐⭐ (3 Stars - Good)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#F4F4F0]/80 block mb-1 uppercase tracking-wider">Experience Tag</label>
                    <select
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value as any)}
                      className="w-full bg-[#0C120C] border border-[#C5A059]/20 rounded-sm p-3 text-xs text-[#F4F4F0] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="Private Room">Private Room</option>
                      <option value="Open Bays">Open Bays</option>
                      <option value="Swing Analysis">Swing Analysis</option>
                      <option value="Food & Drinks">Food & Drinks</option>
                      <option value="General">General</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#F4F4F0]/80 block mb-1 uppercase tracking-wider">Your Review *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe your visit to Luxe Golf..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full bg-[#0C120C] border border-[#C5A059]/20 rounded-sm p-3 text-xs text-[#F4F4F0] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#C5A059] hover:bg-[#d6b26a] text-[#0C120C] font-bold rounded-sm text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Review
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

