"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormState({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      info: "Dubai, United Arab Emirates",
    },
    {
      icon: "📧",
      title: "Email",
      info: "info@doleep.com",
    },
    {
      icon: "📱",
      title: "Phone",
      info: "+971 4 XXX XXXX",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s Create <span className="text-primary">Together</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch with our team and
            let&apos;s start crafting your next big project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2 text-sm">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors duration-300"
                  whileFocus={{ scale: 1.01 }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors duration-300"
                  whileFocus={{ scale: 1.01 }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm">
                  Phone Number
                </label>
                <motion.input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors duration-300"
                  whileFocus={{ scale: 1.01 }}
                  placeholder="+971 XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm">
                  Service Interested In
                </label>
                <motion.select
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors duration-300"
                  whileFocus={{ scale: 1.01 }}
                >
                  <option value="">Select a service</option>
                  <option value="video">Video Production</option>
                  <option value="film">Film Production</option>
                  <option value="animation">Animation</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="other">Other</option>
                </motion.select>
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm">
                  Project Details
                </label>
                <motion.textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  whileFocus={{ scale: 1.01 }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary/80 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 flex items-center gap-4"
                >
                  <div className="text-4xl">{info.icon}</div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">
                      {info.title}
                    </div>
                    <div className="text-white font-semibold">{info.info}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {["Facebook", "Instagram", "LinkedIn", "YouTube"].map(
                  (social, index) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    >
                      <span className="text-xl">
                        {social[0]}
                      </span>
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-gradient-to-r from-primary/10 to-purple-600/10 border border-primary/30 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3">Why Choose Us?</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> 19+ Years Experience
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> Award-Winning Team
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> 500+ Happy Clients
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span> 5-Star Rated Agency
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
