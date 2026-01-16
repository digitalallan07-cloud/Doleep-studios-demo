"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Video Production",
      description:
        "Cinematic storytelling from concept to screen. We craft immersive video content that captivates audiences and drives engagement.",
      icon: "🎬",
      features: ["Commercial Videos", "Corporate Films", "Music Videos", "Documentary Production"],
      gradient: "from-electric-blue to-electric-deep",
      video: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4"
    },
    {
      title: "Film Production",
      description:
        "Award-winning cinematic experiences. High-end film production that elevates your brand to Hollywood standards.",
      icon: "🎥",
      features: ["Feature Films", "Short Films", "Brand Films", "Cinematic Ads"],
      gradient: "from-electric-deep to-purple-600",
      video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4"
    },
    {
      title: "3D Animation",
      description:
        "Bringing imagination to life. Stunning 3D graphics, character animation, and motion design that leaves a lasting impression.",
      icon: "✨",
      features: ["3D Modeling", "Character Animation", "Motion Graphics", "Visual Effects"],
      gradient: "from-cyan-500 to-electric-glow",
      video: "https://videos.pexels.com/video-files/3141211/3141211-uhd_2560_1440_30fps.mp4"
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven digital strategies. Amplify your reach with comprehensive marketing campaigns across all major platforms.",
      icon: "📱",
      features: ["Social Media Marketing", "Google Ads", "SEO Optimization", "Brand Strategy"],
      gradient: "from-green-500 to-electric-light",
      video: "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4"
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

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] border border-electric-blue/10 rounded-full"
        ></motion.div>
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[1000px] border border-electric-blue/10 rounded-full"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={titleVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full text-electric-light text-sm font-medium">
              OUR SERVICES
            </span>
          </motion.div>
          <motion.h2
            variants={titleVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
          >
            <span className="text-white">What We</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-glow glow-text">
              Create
            </span>
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Comprehensive creative solutions designed to elevate your brand and engage your audience
          </motion.p>
        </motion.div>

        {/* Services Grid with Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.15 }}
              onMouseEnter={() => setActiveService(index)}
              className={`group relative bg-gradient-to-br from-gray-900/50 to-black border rounded-3xl p-8 overflow-hidden cursor-pointer transition-all duration-500 ${
                activeService === index
                  ? 'border-electric-blue shadow-2xl shadow-electric-blue/20'
                  : 'border-gray-800 hover:border-electric-blue/50'
              }`}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Video Background on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={service.video} type="video/mp4" />
                </video>
              </div>

              {/* Gradient Overlay */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6"
                  animate={{
                    y: activeService === index ? [-5, 5, -5] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: activeService === index ? Infinity : 0,
                  }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white group-hover:text-electric-light transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-lg mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3 text-gray-400 group-hover:text-electric-light transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: index * 0.15 + idx * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 bg-electric-blue rounded-full group-hover:animate-pulse"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-electric-blue font-semibold group-hover:text-electric-glow transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
                </motion.a>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric-blue/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            className="inline-block px-12 py-5 bg-gradient-to-r from-electric-blue to-electric-deep text-black rounded-full font-bold text-lg glow-box"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
