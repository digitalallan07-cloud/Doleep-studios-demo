"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Video Background */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Electric Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-black/50 to-electric-deep/20"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}></div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-electric-glow/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-electric-blue/20 rounded-full"
        ></motion.div>
      </div>

      <motion.div
        style={{ y: textY }}
        className="container mx-auto px-6 lg:px-12 relative z-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-light text-sm font-medium backdrop-blur-sm glow-box">
              <span className="w-2 h-2 bg-electric-glow rounded-full animate-pulse"></span>
              Award-Winning Creative Agency Since 2007
            </span>
          </motion.div>

          {/* Main Heading with Anti-Gravity Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-none tracking-tight"
          >
            <motion.span
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0,
              }}
              className="inline-block text-white"
            >
              Create
            </motion.span>
            <br />
            <motion.span
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.2,
              }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-electric-glow to-white glow-text"
            >
              The Future
            </motion.span>
            <br />
            <motion.span
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.4,
              }}
              className="inline-block text-white"
            >
              Today
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Dubai&apos;s premier video production & digital marketing agency.
            <br />
            <span className="text-electric-light">Transforming visions into reality.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#portfolio"
              className="group relative px-10 py-5 bg-electric-blue text-black rounded-full font-bold text-lg overflow-hidden glow-box"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Our Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-electric-glow to-electric-deep"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="px-10 py-5 border-2 border-electric-blue text-electric-light rounded-full font-bold text-lg hover:bg-electric-blue hover:text-black transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "19+", label: "Years of Excellence" },
              { number: "500+", label: "Projects Delivered" },
              { number: "5", label: "International Awards" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="group text-center p-6 rounded-2xl backdrop-blur-sm border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl md:text-6xl font-display font-bold text-electric-blue mb-2 glow-text group-hover:text-electric-glow transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-electric-light text-sm font-medium tracking-wider">SCROLL</span>
          <motion.div
            className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center overflow-hidden glow-box"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-electric-glow rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
