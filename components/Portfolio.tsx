"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Film", "Video", "Animation", "Marketing"];

  const projects = [
    {
      title: "Corporate Excellence",
      category: "Film",
      description: "Award-winning corporate film for Fortune 500 company",
      image: "🎬",
      color: "from-red-600 to-orange-600",
    },
    {
      title: "Brand Revolution",
      category: "Video",
      description: "Dynamic brand video that increased engagement by 300%",
      image: "📹",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "Animated Dreams",
      category: "Animation",
      description: "3D character animation for global product launch",
      image: "✨",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Digital Campaign",
      category: "Marketing",
      description: "Multi-platform campaign reaching 2M+ audience",
      image: "🚀",
      color: "from-green-600 to-teal-600",
    },
    {
      title: "Documentary Series",
      category: "Film",
      description: "6-part documentary series for Abu Dhabi Tourism",
      image: "🎥",
      color: "from-yellow-600 to-orange-600",
    },
    {
      title: "Product Showcase",
      category: "Video",
      description: "High-end product videos for luxury brands",
      image: "💎",
      color: "from-indigo-600 to-purple-600",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-black"
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
            Our Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Explore our portfolio of award-winning projects that have helped
            brands tell their stories and achieve remarkable results.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Project Image/Icon */}
                <div
                  className={`relative h-64 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                >
                  <motion.div
                    className="text-8xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.image}
                  </motion.div>

                  {/* Overlay on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <motion.span
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="text-white font-semibold text-lg"
                    >
                      View Project
                    </motion.span>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
