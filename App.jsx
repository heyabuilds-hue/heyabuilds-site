import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* ================= BRAND CONSTANTS ================= */
// Using your exact colors and high-end fonts
const serifFont = "font-serif italic tracking-tight text-[#823894]";
const bodyFont = "font-sans tracking-wide text-gray-700";

/* ================= NAVIGATION ================= */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b-2 border-purple-50 sticky top-0 z-50 px-8 py-6">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        
        {/* LOGO - BIG & BOLD */}
        <Link to="/" className="flex items-center">
          <img
            src="/HeyaBuilds1.PNG" 
            alt="HeyaBuilds Logo"
            className="h-[100px] md:h-[150px] w-auto object-contain transition-transform hover:scale-105" 
          />
        </Link>

        {/* DESKTOP LINKS - Pro "Sans" font */}
        <div className="hidden md:flex gap-10 items-center text-xs font-black uppercase tracking-[0.2em] text-gray-800">
          <Link className="hover:text-[#823894] transition" to="/">Home</Link>
          <Link className="hover:text-[#823894] transition" to="/about">About</Link>
          <Link className="hover:text-[#823894] transition" to="/programs">Programs</Link>
          <Link className="hover:text-[#823894] transition" to="/community">Join Community</Link>
          <Link 
            className="bg-[#823894] text-white px-8 py-4 rounded-full hover:bg-[#2D1233] transition shadow-lg" 
            to="/contact"
          >
            Contact
          </Link>
        </div>

        {/* MOBILE MENU */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-2">
            <div className="w-8 h-1 bg-[#823894]"></div>
            <div className="w-8 h-1 bg-[#823894]"></div>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-6 mt-8 pb-8 text-center font-bold uppercase tracking-widest border-t pt-8 bg-white">
          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
          <Link onClick={() => setIsOpen(false)} to="/programs">Programs</Link>
          <Link onClick={() => setIsOpen(false)} to="/community">Join</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact" className="text-[#823894]">Contact</Link>
        </div>
      )}
    </nav>
  );
}

/* ================= HOME ================= */
function Home() {
  return (
    <div className="bg-white">
      {/* HERO SECTION - SPLIT DESIGN */}
      <section className="flex flex-col md:flex-row min-h-[85vh]">
        <div className="flex-1 bg-[#F3EDF5] flex flex-col justify-center px-12 md:px-24 py-20">
          <h1 className={`text-7xl md:text-9xl ${serifFont}`}>HeyaBuilds</h1>
          <p className="mt-8 text-sm md:text-base tracking-[0.5em] text-gray-500 uppercase font-black">
            Connect • Create • Inspire
          </p>
          <p className="mt-10 max-w-md text-xl leading-relaxed text-gray-600">
            Building the future of technology in Saudi Arabia through community and collaboration.
          </p>
        </div>

        <div className="flex-1 bg-[#823894] flex flex-col justify-center px-12 md:px-24 py-20 text-white text-center md:text-left">
          <h2 className={`text-8xl md:text-[10rem] leading-none mb-10 ${serifFont} text-white`}>
            Let's<br/>Build!
          </h2>
          <div className="flex items-center justify-center md:justify-start gap-4 text-2xl opacity-90 italic">
             <span>📍</span> Medina, Saudi Arabia
          </div>
          <Link to="/community" className="mt-14 w-fit mx-auto md:mx-0 px-12 py-5 bg-white text-[#823894] text-xl font-black rounded-full hover:scale-105 transition shadow-2xl uppercase">
            Get Started
          </Link>
        </div>
      </section>

   {/* VISION STATEMENT (Slide 06) */}
<section className="py-32 bg-[#2D1233] text-white text-center px-10">
  {/* I removed ${serifFont} and manually typed the font styles to ensure it stays white */}
  <h2 className="text-4xl md:text-6xl max-w-5xl mx-auto leading-tight font-serif italic tracking-tight text-white">
    "When women build technology together, they create stronger innovation ecosystems."
  </h2>
</section>
    </div>
  );
}

/* ================= ABOUT (Merged with Story + What We Do) ================= */
function About() {
  const activities = [
    { icon: "🎤", title: "Meetups & Events", desc: "Regular in-person gatherings in Medina — sharing ideas and pitches." },
    { icon: "💬", title: "Knowledge Exchange", desc: "Open discussions on AI, startups, and the Saudi tech ecosystem." },
    { icon: "🔗", title: "Networking", desc: "Real connections with founders and developers across the region." },
    { icon: "🌟", title: "Collaboration", desc: "Find your co-founder or mentor and build something impactful together." }
  ];

  return (
    <div className="bg-white">
      <div className="py-24 px-10 max-w-7xl mx-auto">
        
        {/* OUR STORY SECTION */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-40">
          <div>
            <h1 className={`text-6xl mb-10 ${serifFont}`}>Our Story</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Medina has a growing number of talented women in tech. However, many struggle to find the right environment to start their journey.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              HeyaBuilds was founded by <span className="text-[#823894] font-bold">Samah Alharbi</span> to provide the network, mentorship, and space to turn ambition into action.
            </p>
          </div>
          <div className="bg-[#F3EDF5] p-16 rounded-[4rem] border-2 border-purple-100 relative shadow-inner">
             <p className={`text-4xl leading-snug mb-8 ${serifFont}`}>"I built what I needed — so others wouldn't have to build alone."</p>
             <p className="text-[#823894] font-black text-2xl">Samah Alharbi</p>
             <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Founder & CEO, Medalyze</p>
          </div>
        </div>

        {/* WHAT WE DO SECTION (Added here) */}
        <div className="mt-20">
            <h2 className={`text-6xl text-center mb-20 ${serifFont}`}>What We Do</h2>
            <div className="grid md:grid-cols-2 gap-10">
            {activities.map((a, i) => (
                <div key={i} className="p-12 bg-gray-50 rounded-[3rem] border border-purple-50 flex gap-8 hover:bg-[#F3EDF5] transition-all group shadow-sm hover:shadow-xl">
                <span className="text-6xl group-hover:rotate-12 transition-transform">{a.icon}</span>
                <div>
                    <h3 className="text-3xl font-black text-gray-800 mb-3">{a.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{a.desc}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}

/* ================= PROGRAMS ================= */
function Programs() {
  const programsList = [
    ["Bootcamps", "Learn startup building from zero to launch", "🚀"],
    ["AI Workshops", "Hands-on AI and tech sessions", "🤖"],
    ["Mentorship", "1:1 guidance from industry experts", "💎"],
  ];

  return (
    <div className="min-h-screen px-6 py-24 max-w-7xl mx-auto">
      <h1 className={`text-7xl text-center mb-20 ${serifFont}`}>Programs</h1>
      
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {programsList.map(([title, desc, icon]) => (
          <div key={title} className="p-12 border-2 border-[#F3EDF5] rounded-[4rem] shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 bg-white text-center">
            <div className="text-7xl mb-8">{icon}</div>
            <h3 className="text-3xl font-black text-gray-800 mb-4">{title}</h3>
            <p className="text-xl text-gray-500 leading-relaxed mb-10">{desc}</p>
            <Link to="/community" className="px-10 py-3 bg-[#823894] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#2D1233] transition shadow-lg">
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= COMMUNITY (Your Real Form) ================= */
function Community() {
  return (
    <div className="py-24 bg-[#F3EDF5] px-6 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl overflow-hidden border-2 border-white">
        <h1 className={`text-6xl text-center mb-6 ${serifFont}`}>Join the Community</h1>
        <p className="text-center text-gray-500 mb-14 uppercase tracking-[0.3em] font-black text-sm">Apply to build the future in Medina</p>
        
        {/* YOUR REAL TALLY EMBED */}
        <div className="w-full h-[850px] rounded-[2rem] overflow-hidden">
          <iframe 
            src="https://tally.so/embed/MeL0Vk?hideTitle=1&transparentBackground=1" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            title="Join HeyaBuilds"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <div className="min-h-screen py-24 px-6 flex flex-col items-center bg-[#2D1233]">
      <h1 className={`text-7xl mb-16 ${serifFont} text-white`}>Get In Touch</h1>
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-20">
        <div className="text-white space-y-12 flex flex-col justify-center">
          <h2 className="text-5xl font-black leading-tight tracking-tight">We’d love to<br/>hear from you.</h2>
          <div className="space-y-10">
            <div>
              <p className="uppercase tracking-[0.4em] text-purple-300 text-xs font-black mb-4">Email Us</p>
              <p className="text-3xl font-bold border-b border-purple-800 pb-4">heya@builds.com</p>
            </div>
            <div>
              <p className="uppercase tracking-[0.4em] text-purple-300 text-xs font-black mb-4">Location</p>
              <p className="text-3xl font-bold border-b border-purple-800 pb-4">Medina, Saudi Arabia</p>
            </div>
          </div>
        </div>

        {/* PRO TALLY CONTACT FORM EMBED */}
        <div className="bg-white rounded-[4rem] overflow-hidden h-[700px] shadow-2xl">
          <iframe 
            src="https://tally.so/embed/MeL0Vk?hideTitle=1&transparentBackground=1" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            title="Contact HeyaBuilds"
          ></iframe>
          {/* Note: I used the same ID here for now, replace it with your Contact Form ID once created! */}
        </div>
      </div>
    </div>
  );
}

/* ================= APP WRAPPER ================= */
export default function App() {
  return (
    <BrowserRouter>
      {/* LOAD GOOGLE FONTS */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Playfair+Display:ital,wght@0,700;1,800&display=swap');
          
          :root {
            font-family: 'Montserrat', sans-serif;
            scroll-behavior: smooth;
          }
          .font-serif {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>
      
      <div className="min-h-screen bg-white selection:bg-[#823894] selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Minimalist Footer */}
        <footer className="py-20 bg-white border-t border-gray-50 text-center">
           <p className="text-[10px] font-black text-gray-300 tracking-[0.6em] uppercase">© 2026 HeyaBuilds Medina • Built to Inspire</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}
