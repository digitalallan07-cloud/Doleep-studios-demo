"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Awards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const awards = [
    {
      title: "Clutch Top Agency",
      description: "Top Video & Film Production Company in UAE",
      year: "2023",
      icon: "🏆",
    },
    {
      title: "Abu Dhabi Film Festival",
      description: "Special Jury Award",
      year: "2022",
      icon: "🎬",
    },
    {
      title: "5-Star Rating",
      description: "Highest Rated Agency on Clutch.co",
      year: "2023",
      icon: "⭐",
    },
    {
      title: "International Film Awards",
      description: "5 International Film Awards Winner",
      year: "2020-2023",
      icon: "🎥",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: "😊" },
    { number: "1000+", label: "Projects Delivered", icon: "📦" },
    { number: "19+", label: "Years in Business", icon: "📅" },
    { number: "50+", label: "Team Members", icon: "👥" },
  ];

  return (
    <section
      id="awards"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-medium mb-4"
          >
            Recognition
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Awards & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Recognized globally for our commitment to excellence and innovation
            in creative production.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center overflow-hidden"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {award.icon}
                </motion.div>
                <div className="text-primary text-sm font-medium mb-2">
                  {award.year}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {award.title}
                </h3>
                <p className="text-gray-400 text-sm">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/30 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-5xl mb-3"
                  animate={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <div className="relative">
            <span className="text-6xl text-primary opacity-20">&quot;</span>
            <p className="text-xl md:text-2xl text-gray-300 italic mb-6 px-4">
              Doleep Studios transformed our brand story into a compelling
              visual masterpiece. Their creativity and professionalism are
              unmatched in the industry.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full"></div>
              <div className="text-left">
                <div className="font-semibold">Sarah Al-Mansouri</div>
                <div className="text-gray-400 text-sm">CEO, Tech Innovations</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
