"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Corporate Excellence",
      category: "Corporate Film",
      description: "Award-winning corporate film showcasing innovation and leadership",
      video: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
      thumbnail: "https://images.pexels.com/videos/3163534/free-video-3163534.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "Brand Story",
      category: "Commercial",
      description: "Cinematic brand narrative that captured hearts worldwide",
      video: "https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4",
      thumbnail: "https://images.pexels.com/videos/3255275/free-video-3255275.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "Tech Innovation",
      category: "Product Launch",
      description: "Dynamic product launch video with cutting-edge visuals",
      video: "https://videos.pexels.com/video-files/3141211/3141211-uhd_2560_1440_30fps.mp4",
      thumbnail: "https://images.pexels.com/videos/3141211/free-video-3141211.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "Urban Landscapes",
      category: "Documentary",
      description: "Stunning visual journey through Dubai's transformation",
      video: "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4",
      thumbnail: "https://images.pexels.com/videos/3130284/free-video-3130284.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "Creative Process",
      category: "Behind the Scenes",
      description: "Capturing the artistry behind our production process",
      video: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4",
      thumbnail: "https://images.pexels.com/videos/3163534/free-video-3163534.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: "Digital Dreams",
      category: "Animation",
      description: "3D animated masterpiece blending reality and imagination",
      video: "https://videos.pexels.com/video-files/3141211/3141211-uhd_2560_1440_30fps.mp4",
      thumbnail: "https://images.pexels.com/videos/3141211/free-video-3141211.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white"
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
            OUR PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-dark mb-6">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Showcasing our best video production projects that tell compelling stories
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Video Thumbnail/Preview */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                {hoveredIndex === index ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${project.thumbnail})`,
                    }}
                  ></div>
                )}

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-dark/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    animate={hoveredIndex === index ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-primary font-semibold text-xs">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                {/* View Project Link */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  Watch Now
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
            </motion.div>
          ))}
        </div>

        {/* View Showreel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-block px-10 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Full Showreel
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
