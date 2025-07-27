
import React from 'react';
import { motion } from 'framer-motion';

export default function LandingPage({ onExploreClick }) {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 gap-10 bg-offwhite">
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img src="/assets/jade_laptop.png" alt="Jadesola at laptop" className="w-full h-auto object-contain rounded-xl shadow-lg" />
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold">
          Where UX Strategy, Product Thinking, and Code Converge
        </h1>
        <p className="text-lg max-w-xl">
          Hi, I’m Jadesola — a digital problem solver crafting mobile-first solutions, mapping experiences, and building products that work.
        </p>
        <button
          onClick={onExploreClick}
          className="inline-block bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-coral transition"
        >
          Explore My Work
        </button>
        <div className="flex justify-center md:justify-start gap-6 text-sm mt-4">
          <a href="https://www.linkedin.com/in/jadesola-oguntowo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/jadesolaa" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:jadesoladaniels@gmail.com">Email</a>
        </div>
      </motion.div>
    </section>
  );
}
