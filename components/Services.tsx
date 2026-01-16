"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const services = [
    {
      icon: "🎬",
      title: "Video Production",
      description: "Corporate videos, commercials, and branded content that tells your story.",
    },
    {
      icon: "🎥",
      title: "Film Production",
      description: "Cinematic films and documentaries with Hollywood-level quality.",
    },
    {
      icon: "✨",
      title: "Animation & VFX",
      description: "3D animation, motion graphics, and visual effects that amaze.",
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      description: "Strategic campaigns that amplify your reach and engagement.",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gray-50"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary font-semibold text-sm mb-4">
            WHAT WE DO
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Full-service video production agency delivering exceptional results
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                className="text-6xl mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-display font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
