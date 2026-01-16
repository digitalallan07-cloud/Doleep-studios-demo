"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const services = [
    {
      title: "Video Production",
      description:
        "Comprehensive video production services from concept to completion. We create compelling visual narratives that engage and inspire.",
      icon: "🎬",
      gradient: "from-primary to-orange-600",
    },
    {
      title: "Film Production",
      description:
        "Award-winning corporate and commercial film production. High-end cinematic content that elevates your brand.",
      icon: "🎥",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      title: "Animation",
      description:
        "3D/2D graphics, character animation, typographic and hand-drawn animation. Bringing ideas to life with motion.",
      icon: "✨",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic digital marketing campaigns. Google and Facebook ads partner reaching 70% of the web.",
      icon: "📱",
      gradient: "from-green-600 to-teal-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6 lg:px-12">
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
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What We <span className="text-primary">Create</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            From concept to completion, we deliver exceptional creative
            solutions that drive results and inspire audiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 overflow-hidden cursor-pointer"
            >
              {/* Gradient Background on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow Icon */}
                <motion.div
                  className="mt-6 flex items-center text-primary"
                  initial={{ x: 0 }}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="font-semibold mr-2">Learn More</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/80 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
