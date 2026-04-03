import React, { useState, createContext, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

/* ================= TRANSLATIONS ================= */
const translations = {
  en: {
    nav: { home: "Home", about: "About", programs: "Programs", join: "Join Community", contact: "Contact" },
    hero: { 
      title: "HeyaBuilds", 
      subtitle: "Connect • Create • Inspire", 
      description: "Building the future of technology in Saudi Arabia through community and collaboration.", 
      cta: "Let's Build!", 
      location: "Medina, Saudi Arabia", 
      getStarted: "Get Started" 
    },
    vision: '"When women build technology together, they create stronger innovation ecosystems."',
    about: {
      title: "Our Story",
      p1: "Medina has a growing number of talented women in tech. However, many struggle to find the right environment to start their journey.",
      p2: "HeyaBuilds was founded by Samah Alharbi to provide the network, mentorship, and space to turn ambition into action.",
      quote: "I built this so others wouldn't have to build alone.",
      founder: "Samah Alharbi",
      role: "Founder & CEO, Medalyze",
      whatWeDo: "What We Do",
      act1: "Meetups & Events", act1d: "Regular in-person gatherings in Medina — sharing ideas and pitches.",
      act2: "Knowledge Exchange", act2d: "Open discussions on AI, startups, and the Saudi tech ecosystem.",
      act3: "Networking", act3d: "Real connections with founders and developers across the region.",
      act4: "Collaboration", act4d: "Find your co-founder or mentor and build something impactful together."
    },
    programs: {
      title: "Programs",
      p1: "Bootcamps", p1d: "Learn startup building from zero to launch",
      p2: "AI Workshops", p2d: "Hands-on AI and tech sessions",
      p3: "Mentorship", p3d: "1:1 guidance from industry experts",
      apply: "Apply Now"
    },
    contact: { title: "Get In Touch", subtitle: "We’d love to hear from you.", email: "Email Us", loc: "Location" }
  },
  ar: {
    nav: { home: "الرئيسية", about: "عن المبادرة", programs: "البرامج", join: "انضمي إلينا", contact: "تواصل معنا" },
    hero: { 
      title: "هِيَ تبني", 
      subtitle: "اتصال • ابتكار • إلهام", 
      description: "بناء مستقبل التكنولوجيا في المملكة العربية السعودية من خلال المجتمع والتعاون.", 
      cta: "لنـبني!", 
      location: "المدينة المنورة، المملكة العربية السعودية", 
      getStarted: "ابدئي الآن" 
    },
    vision: '"عندما تبني النساء التكنولوجيا معاً، فإنهن يخلقن أنظمة ابتكار أقوى."',
    about: {
      title: "قصتنا",
      p1: "تضم المدينة المنورة عدداً متزايداً من النساء الموهوبات في مجال التقنية. ومع ذلك، تواجه الكثيرات صعوبة في العثور على البيئة المناسبة لبدء رحلتهن.",
      p2: "تأسست (هِيَ تبني) على يد سماح الحربي لتوفير الشبكة والتدريب والمساحة لتحويل الطموح إلى واقع.",
      quote: "بنيتُ هذا لكي لا تضطر الأخريات للبناء بمفردهن.",
      founder: "سماح الحربي",
      role: "المؤسس والرئيس التنفيذي، ميدالايز",
      whatWeDo: "ماذا نفعل",
      act1: "لقاءات وفعاليات", act1d: "تجمعات دورية في المدينة المنورة - لمشاركة الأفكار والمشاريع.",
      act2: "تبادل المعرفة", act2d: "مناقشات مفتوحة حول الذكاء الاصطناعي، الشركات الناشئة، والمنظومة التقنية السعودية.",
      act3: "التواصل", act3d: "علاقات حقيقية مع مؤسسين ومطورين من جميع أنحاء المنطقة.",
      act4: "التعاون", act4d: "ابحثي عن شريك مؤسس أو موجه وابنوا شيئاً مؤثراً معاً."
    },
    programs: {
      title: "البرامج",
      p1: "معسكرات تدريبية", p1d: "تعلم بناء الشركات الناشئة من الصفر حتى الإطلاق",
      p2: "ورش عمل الذكاء الاصطناعي", p2d: "جلسات تقنية عملية في الذكاء الاصطناعي",
      p3: "التوجيه الشخصي", p3d: "إرشادات مباشرة من خبراء الصناعة",
      apply: "سجلي الآن"
    },
    contact: { title: "تواصل معنا", subtitle: "يسعدنا سماع صوتك", email: "بريدنا الإلكتروني", loc: "الموقع" }
  }
};

/* ================= LANGUAGE CONTEXT ================= */
const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  
  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (path) => {
    const keys = path.split('.');
    let result = translations[lang];
    keys.forEach(key => { result = result[key]; });
    return result;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

const useI18n = () => useContext(LanguageContext);

/* ================= NAVIGATION ================= */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLanguage, t } = useI18n();

  return (
    <nav className="bg-white border-b-2 border-purple-50 sticky top-0 z-50 px-8 py-4 md:py-6">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/HeyaBuilds1.PNG" alt="Logo" className="h-[70px] md:h-[110px] w-auto object-contain transition-transform hover:scale-105" />
        </Link>

        <div className={`hidden md:flex gap-8 items-center font-black uppercase ${lang === 'ar' ? 'text-sm tracking-normal' : 'text-xs tracking-[0.15em]'} text-gray-800`}>
          <Link className="hover:text-[#823894] transition" to="/">{t('nav.home')}</Link>
          <Link className="hover:text-[#823894] transition" to="/about">{t('nav.about')}</Link>
          <Link className="hover:text-[#823894] transition" to="/programs">{t('nav.programs')}</Link>
          <Link className="hover:text-[#823894] transition" to="/community">{t('nav.join')}</Link>
          <Link className="bg-[#823894] text-white px-8 py-4 rounded-full hover:bg-[#2D1233] transition shadow-lg" to="/contact">{t('nav.contact')}</Link>
          <button onClick={toggleLanguage} className="border-2 border-[#823894] text-[#823894] px-4 py-2 rounded-full font-bold hover:bg-[#823894] hover:text-white transition min-w-[100px]">
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
        </div>

        <button className="md:hidden flex items-center gap-4" onClick={() => setIsOpen(!isOpen)}>
           <span onClick={(e) => {e.stopPropagation(); toggleLanguage();}} className="text-[#823894] font-bold">{lang === 'en' ? 'AR' : 'EN'}</span>
           <div className="space-y-2">
            <div className="w-8 h-1 bg-[#823894]"></div>
            <div className="w-8 h-1 bg-[#823894]"></div>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-6 mt-8 pb-8 text-center font-bold uppercase tracking-widest border-t pt-8 bg-white">
          <Link onClick={() => setIsOpen(false)} to="/">{t('nav.home')}</Link>
          <Link onClick={() => setIsOpen(false)} to="/about">{t('nav.about')}</Link>
          <Link onClick={() => setIsOpen(false)} to="/programs">{t('nav.programs')}</Link>
          <Link onClick={() => setIsOpen(false)} to="/community">{t('nav.join')}</Link>
          <button onClick={() => {toggleLanguage(); setIsOpen(false);}} className="text-[#823894]">{lang === 'en' ? 'العربية' : 'English'}</button>
        </div>
      )}
    </nav>
  );
}

/* ================= HOME ================= */
function Home() {
  const { t, lang } = useI18n();
  const serifFont = `font-serif italic tracking-tight text-[#823894] ${lang === 'ar' ? 'font-sans not-italic tracking-normal' : ''}`;

  return (
    <div className="bg-white">
      <section className="flex flex-col md:flex-row min-h-[85vh]">
        
        {/* LEFT SECTION (LIGHT PURPLE) - "هي تبني" */}
        <div className="flex-1 bg-[#F3EDF5] flex flex-col justify-center px-12 md:px-24 py-20 text-center md:text-start items-center md:items-start">
          <h1 className={`${lang === 'ar' ? 'text-6xl md:text-8xl' : 'text-7xl md:text-9xl'} ${serifFont} w-full`}>
            {t('hero.title')}
          </h1>
          <p className={`mt-8 text-sm md:text-base text-gray-500 uppercase font-black w-full ${lang === 'ar' ? 'tracking-normal' : 'tracking-[0.5em]'}`}>
            {t('hero.subtitle')}
          </p>
          <p className="mt-10 max-w-md text-xl leading-relaxed text-gray-600 italic w-full">
            {t('hero.description')}
          </p>
        </div>

        {/* RIGHT SECTION (DARK PURPLE) - "لنبني!" */}
        <div className="flex-1 bg-[#823894] flex flex-col justify-center px-12 md:px-24 py-20 text-white text-center md:text-start items-center md:items-start">
          <h2 className={`${lang === 'ar' ? 'text-7xl md:text-8xl' : 'text-8xl md:text-[10rem]'} leading-tight mb-10 font-serif italic text-white w-full ${lang === 'ar' ? 'font-sans not-italic' : ''}`}>
            {lang === 'en' ? <>Let's<br/>Build!</> : <>لنـبني!</>}
          </h2>
          <div className="flex items-center justify-center md:justify-start gap-4 text-2xl opacity-90 italic w-full">
             <span>📍</span> <span>{t('hero.location')}</span>
          </div>
          <Link to="/community" className="mt-14 w-fit px-12 py-5 bg-white text-[#823894] text-xl font-black rounded-full hover:scale-105 transition shadow-2xl uppercase">
            {t('hero.getStarted')}
          </Link>
        </div>
      </section>

      <section className="py-32 bg-[#2D1233] text-white text-center px-10">
        <h2 className={`max-w-5xl mx-auto leading-tight font-serif italic tracking-tight text-white ${lang === 'ar' ? 'text-3xl md:text-5xl font-sans not-italic tracking-normal' : 'text-4xl md:text-6xl'}`}>
          {t('vision')}
        </h2>
      </section>
    </div>
  );
}

/* ================= ABOUT ================= */
function About() {
  const { t, lang } = useI18n();
  const serifFont = `font-serif italic tracking-tight text-[#823894] ${lang === 'ar' ? 'font-sans not-italic tracking-normal' : ''}`;
  
  const activities = [
    { icon: "🎤", title: t('about.act1'), desc: t('about.act1d') },
    { icon: "💬", title: t('about.act2'), desc: t('about.act2d') },
    { icon: "🔗", title: t('about.act3'), desc: t('about.act3d') },
    { icon: "🌟", title: t('about.act4'), desc: t('about.act4d') }
  ];

  return (
    <div className="bg-white py-24 px-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-40">
          <div className="text-start">
            <h1 className={`${lang === 'ar' ? 'text-5xl' : 'text-6xl'} mb-10 ${serifFont}`}>{t('about.title')}</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">{t('about.p1')}</p>
            <p className="text-xl text-gray-600 leading-relaxed">{t('about.p2')}</p>
          </div>
          <div className="bg-[#F3EDF5] p-16 rounded-[4rem] border-2 border-purple-100 relative shadow-inner text-start">
             <p className={`${lang === 'ar' ? 'text-3xl' : 'text-4xl'} leading-snug mb-8 ${serifFont}`}>"{t('about.quote')}"</p>
             <p className="text-[#823894] font-black text-2xl">{t('about.founder')}</p>
             <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">{t('about.role')}</p>
          </div>
        </div>

        <div className="mt-20">
            <h2 className={`${lang === 'ar' ? 'text-5xl' : 'text-6xl'} text-center mb-20 ${serifFont}`}>{t('about.whatWeDo')}</h2>
            <div className="grid md:grid-cols-2 gap-10">
            {activities.map((a, i) => (
                <div key={i} className="p-12 bg-gray-50 rounded-[3rem] border border-purple-50 flex gap-8 hover:bg-[#F3EDF5] transition-all group shadow-sm hover:shadow-xl text-start">
                <span className="text-6xl group-hover:rotate-12 transition-transform">{a.icon}</span>
                <div>
                    <h3 className={`font-black text-gray-800 mb-3 ${lang === 'ar' ? 'text-2xl' : 'text-3xl'}`}>{a.title}</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">{a.desc}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
}

/* ================= PROGRAMS ================= */
function Programs() {
  const { t, lang } = useI18n();
  const serifFont = `font-serif italic tracking-tight text-[#823894] ${lang === 'ar' ? 'font-sans not-italic tracking-normal' : ''}`;
  
  const programsList = [
    [t('programs.p1'), t('programs.p1d'), "🚀"],
    [t('programs.p2'), t('programs.p2d'), "🤖"],
    [t('programs.p3'), t('programs.p3d'), "💎"],
  ];

  return (
    <div className="min-h-screen px-6 py-24 max-w-7xl mx-auto">
      <h1 className={`${lang === 'ar' ? 'text-6xl' : 'text-7xl'} text-center mb-20 ${serifFont}`}>{t('programs.title')}</h1>
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {programsList.map(([title, desc, icon]) => (
          <div key={title} className="p-12 border-2 border-[#F3EDF5] rounded-[4rem] shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 bg-white text-center">
            <div className="text-7xl mb-8">{icon}</div>
            <h3 className={`font-black text-gray-800 mb-4 ${lang === 'ar' ? 'text-2xl' : 'text-3xl'}`}>{title}</h3>
            <p className="text-xl text-gray-500 leading-relaxed mb-10">{desc}</p>
            <Link to="/community" className="px-10 py-3 bg-[#823894] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#2D1233] transition shadow-lg">
              {t('programs.apply')}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= COMMUNITY ================= */
function Community() {
  const { t, lang } = useI18n();
  const serifFont = `font-serif italic tracking-tight text-[#823894] ${lang === 'ar' ? 'font-sans not-italic tracking-normal' : ''}`;

  return (
    <div className="py-24 bg-[#F3EDF5] px-6 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 rounded-[4rem] shadow-2xl overflow-hidden border-2 border-white text-center">
        <h1 className={`${lang === 'ar' ? 'text-5xl' : 'text-6xl'} text-center mb-6 ${serifFont}`}>{t('nav.join')}</h1>
        <div className="w-full h-[800px] rounded-[2rem] overflow-hidden">
          <iframe 
            src="https://tally.so/embed/MeL0Vk?hideTitle=1&transparentBackground=1" 
            width="100%" height="100%" frameBorder="0" title="Join"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  const { t, lang } = useI18n();
  const serifFont = `font-serif italic tracking-tight text-[#823894] ${lang === 'ar' ? 'font-sans not-italic tracking-normal' : ''}`;

  return (
    <div className="min-h-screen py-24 px-6 flex flex-col items-center bg-[#2D1233]">
      <h1 className={`${lang === 'ar' ? 'text-6xl' : 'text-7xl'} mb-16 ${serifFont} text-white text-center`}>{t('contact.title')}</h1>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-20">
        <div className="text-white space-y-12 flex flex-col justify-center text-start">
          <h2 className={`font-black leading-tight tracking-tight ${lang === 'ar' ? 'text-4xl' : 'text-5xl'}`}>{t('contact.subtitle')}</h2>
          <div className="space-y-10">
            <div>
              <p className={`uppercase text-purple-300 text-xs font-black mb-4 ${lang === 'ar' ? '' : 'tracking-[0.4em]'}`}>{t('contact.email')}</p>
              <p className="text-3xl font-bold border-b border-purple-800 pb-4">heyabuilds@gmail.com</p>
            </div>
            <div>
              <p className={`uppercase text-purple-300 text-xs font-black mb-4 ${lang === 'ar' ? '' : 'tracking-[0.4em]'}`}>{t('contact.loc')}</p>
              <p className="text-3xl font-bold border-b border-purple-800 pb-4">{t('hero.location')}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[4rem] overflow-hidden h-[700px] shadow-2xl">
          <iframe 
            src="https://tally.so/embed/MeL0Vk?hideTitle=1&transparentBackground=1" 
            width="100%" height="100%" frameBorder="0" title="Contact"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

/* ================= APP WRAPPER ================= */
export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Playfair+Display:ital,wght@0,700;1,800&family=Cairo:wght@400;700;900&display=swap');
            
            :root {
              font-family: 'Montserrat', sans-serif;
              scroll-behavior: smooth;
            }
            [lang="ar"] :root {
              font-family: 'Cairo', sans-serif;
            }
            .font-serif {
              font-family: 'Playfair Display', serif;
            }
            [lang="ar"] .font-serif {
              font-family: 'Cairo', sans-serif;
              font-style: normal;
            }
            footer p {
              direction: ltr !important;
              display: inline-block;
              width: 100%;
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
          <LanguageContext.Consumer>
            {({ lang }) => (
              <footer className="py-20 bg-white border-t border-gray-50 text-center">
                 <p className="text-[10px] font-black text-gray-300 tracking-[0.6em] uppercase">
                    © 2026 {lang === 'ar' ? 'هِيَ تبني' : 'HeyaBuilds'} Medina • Built to Inspire
                 </p>
              </footer>
            )}
          </LanguageContext.Consumer>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
