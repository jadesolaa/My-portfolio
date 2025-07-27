
import React, { useRef } from 'react';
import LandingPage from './LandingPage';
import About from './About';
import Projects from './Projects';
import ContactForm from './ContactForm';

export default function HomePage() {
  const projectRef = useRef(null);

  const scrollToProjects = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="home" className="bg-[#FAF3F0]"><LandingPage onExploreClick={scrollToProjects} /></section>
      <section id="about" className="bg-[#F4E8F3]"><About /></section>
      <section id="projects" ref={projectRef} className="bg-[#EDF7F6]"><Projects /></section>
      <section id="contact" className="bg-[#FFF9F0]"><ContactForm /></section>
    </>
  );
}
