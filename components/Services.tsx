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
        "From concept to final cut, we create compelling video content that resonates with your audience and drives results.",
      icon: "🎬",
      features: ["Corporate Videos", "Commercials", "Music Videos", "Documentaries"],
    },
    {
      title: "Film Production",
      description:
        "Cinematic excellence in every frame. We bring your brand stories to life with Hollywood-level production quality.",
      icon: "🎥",
      features: ["Brand Films", "Short Films", "Promotional Content", "Event Coverage"],
    },
    {
      title: "3D Animation",
      description:
        "Cutting-edge 3D animation and motion graphics that transform complex ideas into stunning visual experiences.",
      icon: "✨",
      features: ["3D Modeling", "Character Animation", "Motion Graphics", "Visual Effects"],
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic digital campaigns that amplify your reach and engagement across all major platforms.",
      icon: "📱",
      features: ["Social Media", "Google Ads", "SEO", "Content Strategy"],
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
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6">
            What We <span className="text-primary">Create</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Comprehensive creative solutions tailored to elevate your brand and engage your audience
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="text-6xl mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-display font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <motion.div
                className="mt-8 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
              >
                Learn More
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
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-block px-10 py-4 bg-primary text-white rounded-full font-semibold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Project Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
