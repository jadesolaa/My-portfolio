import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "App Design & Development",
    image: "/assets/app_design.jpg",
    description: "Projects I’ve both designed and built — like the F1 Race Manager and PH-DVault.",
    skills: ["Flutter", "Firebase", "Supabase", "MongoDB", "UI/UX"],
    route: "/projects/app-design",
    bg: "bg-green-100"
  },
  {
    id: 2,
    title: "Business Analytics Dashboards",
    image: "/assets/ba_analytics.png",  
    description: "Dashboards for decision-making — revenue, user tasks, and margins.",
    skills: ["Data Analysis", "Tableau", "Excel", "SQL", "Storytelling"],
    route: "/projects/business-analytics",
    bg: "bg-purple-100"
  },
  {
    id: 3,
    title: "Content & Campaign Tools",
    image: "/assets/content_tools.jpg",
    description: "Growth strategy for Jiffy Jollof — from post planning to insights.",
    skills: ["Content Strategy", "Instagram Analytics", "Branding", "Scheduling", "Performance"],
    route: "/projects/content-campaigns",
    bg: "bg-orange-100"
  },
  {
    id: 4,
    title: "Wellness & Journaling Products",
    image: "/assets/wellness_journal.jpg",
    description: "Mindfulness tools like the ‘Feeling-Jaded’ journal, designed end-to-end.",
    skills: ["Canva", "Wellness UX", "Branding", "Typography", "UI Layouts"],
    route: "/projects/wellness-journal",
    bg: "bg-yellow-100"
  },
  {
    id: 5,
    title: "Interactive Web Apps",
    image: "/assets/interactive_web.jpg",
    description: "Side projects for experimentation — hotel apps, age calculators, etc.",
    skills: ["React", "Tailwind CSS", "Form UX", "JavaScript", "Responsive Design"],
    route: "/projects/web-apps",
    bg: "bg-blue-100"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <p className="text-center text-gray-600 mt-2 lg:hidden">
        Swipe through to explore my multi-disciplinary projects grouped by category — from apps to analytics to wellness.
      </p>
      <p className="text-center text-gray-600 mt-2 hidden lg:block">
        Explore my multi-disciplinary projects grouped by category — from apps to analytics to wellness.
      </p>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-center gap-6 mt-10 px-6">
        {projects.map((project) => (
          <Link to={project.route} key={project.id} className={`${project.bg} w-1/5 p-4 rounded-2xl shadow-md`}>
            <h3 className="font-bold text-lg mb-3">{project.title}</h3>
            <img src={project.image} alt={project.title} className="w-full rounded-xl" />
            <p className="mt-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap justify-start gap-2 mt-3 text-xs">
              {project.skills.map((skill, i) => (
                <span key={i} className="bg-gray-200 px-3 py-1 rounded-full">{skill}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden mt-10 overflow-x-auto snap-x snap-mandatory px-6 pb-4 scroll-smooth">
        <div className="flex gap-6">
          {projects.map((project, index) => (
            <Link to={project.route} key={project.id} className={`${project.bg} min-w-[85%] snap-center p-4 rounded-2xl shadow-md`}>
              <h3 className="font-bold text-lg mb-3">{project.title}</h3>
              <img src={project.image} alt={project.title} className="w-full rounded-xl" />
              <p className="mt-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap justify-start gap-2 mt-3 text-xs">
                {project.skills.map((skill, i) => (
                  <span key={i} className="bg-gray-200 px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
              <span className="text-xs text-gray-400 mt-2 block">{index + 1} of 5</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Bubbles */}
      <div className="lg:hidden flex justify-center gap-2 mt-4">
        {projects.map((_, idx) => (
          <span key={idx} className="h-2 w-2 bg-gray-400 rounded-full inline-block"></span>
        ))}
      </div>
    </section>
  );
}
