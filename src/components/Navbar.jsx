
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = ["home", "about", "projects", "contact"];
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActive(sections[i]);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  const navLinkStyle = (id) =>
    `px-4 py-2 rounded-full transition ${
      active === id
        ? "bg-accent text-white"
        : "bg-greyglass text-gray-800 hover:bg-accent hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm flex justify-between items-center px-6 py-4">
      <div className="font-heading text-xl font-bold">Jadesola Oguntowo</div>
      <ul className="hidden md:flex gap-4 text-sm font-medium">
        <li><button onClick={() => scrollToId("home")} className={navLinkStyle("home")}>Home</button></li>
        <li><button onClick={() => scrollToId("about")} className={navLinkStyle("about")}>About</button></li>
        <li><button onClick={() => scrollToId("projects")} className={navLinkStyle("projects")}>Projects</button></li>
        <li><button onClick={() => scrollToId("contact")} className={navLinkStyle("contact")}>Contact</button></li>
      </ul>
    </nav>
  );
}
