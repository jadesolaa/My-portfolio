
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Flutter', use: 'Built PH-DVault MVP with Firebase backend' },
  { name: 'Figma', use: 'Used for Jukeva launch wireframes and product design system' },
  { name: 'Firebase', use: 'Auth + Firestore for health data apps' },
  { name: 'UX Research', use: 'Led interviews and journey mapping for journal app' },
  { name: 'Supabase', use: 'Tested dashboards in personal analytics project' },
  { name: 'MongoDB', use: 'Used in Marklite B2B mobile app backend' },
  { name: 'Agile', use: 'Worked in 2-week sprints with remote team' },
  { name: 'Tailwind CSS', use: 'Styled modular components across projects' },
  { name: 'Framer Motion', use: 'Added animations to portfolio and projects' },
];

export default function About() {
  return (
    <motion.section
      className="min-h-screen px-6 pt-28 pb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src="/assets/about.jpg"
          alt="Headshot"
          className="w-52 h-52 object-cover rounded-full border-4 border-white shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-heading font-bold mb-2">About Me</h2>
          <p className="mb-4">I’m a Lagos-based digital professional with roots in software development and a passion for systems thinking, UX, and cross-functional strategy.</p>
          <div className="mb-3">
            <h4 className="font-semibold">Education</h4>
            <ul className="list-disc pl-6 text-sm">
              <li>Aptech Diploma in Software Development – Distinction</li>
              <li>BCS PG Diploma in IT (In Progress)</li>
            </ul>
          </div>
          <div className="mb-3">
            <h4 className="font-semibold">Certifications</h4>
            <ul className="list-disc pl-6 text-sm">
              <li>Certificate in Software Development</li>
              <li>Certificate in Information Systems</li>
              <li>Certificate in User Experience</li>
              <li>Certificate in IS Practice</li>
            </ul>
          </div>
          <h4 className="font-semibold mt-6 mb-2">Skills</h4>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="relative group px-4 py-2 text-sm rounded-full bg-greyglass text-gray-800 shadow hover:shadow-md backdrop-blur-md cursor-pointer transition"
              >
                {skill.name}
                <div className="absolute hidden group-hover:block bg-white text-xs p-2 rounded shadow w-52 top-full mt-2 z-50">
                  {skill.use}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
