
import React from 'react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 bg-offwhite">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold mb-4">Let’s Build Something Together</h2>
        <p className="mb-8 text-gray-700">Open to collaboration, freelance work, or digital product discussions.</p>
        <form className="flex flex-col gap-4 text-left">
          <input className="p-3 border border-gray-300 rounded" type="text" placeholder="Name" required />
          <input className="p-3 border border-gray-300 rounded" type="email" placeholder="Email" required />
          <textarea className="p-3 border border-gray-300 rounded" rows="5" placeholder="Message" required></textarea>
          <button className="px-6 py-3 bg-accent text-white rounded hover:bg-coral transition w-fit self-center">Send Message</button>
        </form>
        <p className="mt-10 text-sm text-gray-500">Available for Remote & Part-Time Roles | Based in Lagos, Nigeria</p>
      </div>
    </section>
  );
}
