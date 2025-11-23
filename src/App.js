import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle, 
  BarChart3, 
  ShieldCheck, 
  Scale, 
  FileText, 
  Building2, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ChevronRight,
  Award,
  Globe,
  ChevronLeft,
  ArrowLeft,
  Linkedin,
} from 'lucide-react';

// --- Data: Team Members ---
const teamMembers = [
  {
    id: 1,
    name: { en: "Abdo Ibrahim Abdullah", ar: "عبدو إبراهيم عبدالله" },
    role: { en: "General Director", ar: "المدير العام" },
    image: "/abdopic.jpg",
    bio: {
      en: "",
      ar: ""
    },
    expertise: {
      en: ["", "", ""],
      ar: ["", "", ""]
    }
  },
  {
    id: 2,
    name: { en: "Rifaat Mohammad Rifaat", ar: "رفعت محمد رفعت" },
    role: { en: "Head of Tax Advisory", ar: "رئيسة الاستشارات الضريبية" },
    image: "/rifaatpic.jpg",
    bio: {
      en: "",
      ar: ""
    },
    expertise: {
      en: ["", "", ""],
      ar: ["", "", ""]
    }
  },
  {
    id: 3,
    name: { en: "Hafez Al-Sheikh", ar: "حافظ الشيخ" },
    role: { en: "Finance Director", ar: "مدير المالية" },
    image: "/hafezpic.jpg",
    bio: {
      en: "",
      ar: ""
    },
    expertise: {
      en: ["", "", ""],
      ar: ["", "", ""]
    }
  },
  {
    id: 4,
    name: { en: "Shahnoor Afreen", ar: "شاهنور أفرين" },
    role: { en: "IT & Marketing Manager", ar: "مديرة تكنولوجيا المعلومات والتسويق" },
    image: "/afreenpic.jpg",
    bio: {
      en: "",
      ar: ""
    },
    expertise: {
      en: ["", "", ""],
      ar: ["", "", ""]
    }
  }
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('en'); // 'en' or 'ar'
  const [selectedMember, setSelectedMember] = useState(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIXED: Only scroll to top when OPENING a profile. 
  // We do not scroll to top when closing (selectedMember becomes null)
  useEffect(() => {
    if (selectedMember) {
      window.scrollTo(0, 0);
    }
  }, [selectedMember]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
    setIsMenuOpen(false);
  };

  // FIXED: New function to handle returning to the team grid
  const handleBackToTeam = () => {
    setSelectedMember(null);
    // Wait for the main view to re-render, then scroll to the team grid
    setTimeout(() => {
      const teamSection = document.getElementById('team-grid');
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // Fallback to about section if grid not found
        const aboutSection = document.getElementById('about');
        if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToSection = (id) => {
    if (selectedMember) {
      setSelectedMember(null);
      // Give React a moment to unmount profile before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  // Content Dictionary
  const content = {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        expertise: "Expertise",
        contact: "Contact",
        cta: "Free Consultation",
        quote: "Get a Quote",
        backToTeam: "Back to Team"
      },
      hero: {
        established: "Established in 1998 in Abu Dhabi",
        title1: "Integrity in Every",
        title1Highlight: "Figure.",
        title2: "Clarity in Every",
        title2Highlight: "Decision.",
        desc: "We provide world-class auditing, judicial expertise, and corporate restructuring services. Empowering UAE businesses with financial transparency and strategic foresight.",
        btnService: "Our Services",
        btnAbout: "About The Firm"
      },
      stats: [
        { number: '25+', label: 'Years Experience' },
        { number: '500+', label: 'Corporate Clients' },
        { number: '100%', label: 'UAE Compliance' },
        { number: '100K+', label: 'Assets Audited' },
      ],
      services: {
        header: "Our Expertise",
        title: "Comprehensive Financial Solutions",
        desc: "From statutory audits to complex corporate restructuring, we deliver precision and compliance tailored to the UAE market.",
        items: [
          {
            title: "Auditing & Assurance",
            desc: "Statutory audits, internal audits, and risk assessment services designed to provide stakeholders with absolute confidence."
          },
          {
            title: "Judicial Expertise",
            desc: "Court-appointed financial expertise, arbitration support, and dispute resolution services recognized by UAE courts."
          },
          {
            title: "Financial Restructuring",
            desc: "Turnaround strategies for distressed entities, including bankruptcy procedures and liquidation management."
          },
          {
            title: "VAT & Tax Consultancy",
            desc: "Navigating the evolving UAE tax landscape with expert VAT filing, corporate tax planning, and compliance checks."
          },
          {
            title: "Business Setup",
            desc: "End-to-end support for company formation, feasibility studies, and licensing across Dubai and Abu Dhabi."
          },
          {
            title: "Bookkeeping & HR",
            desc: "Outsourced accounting, payroll management, and CFO services to streamline your daily operations."
          }
        ],
        learnMore: "Learn more"
      },
      about: {
        title: "A Legacy of Financial Leadership",
        intro: "Established in 1998, Salem Ballama Auditing of Accounts has grown into one of the UAE's most respected financial institutions.",
        desc: "Under the leadership of Mr. Mohammed Salem Ballama, a distinguished chairman of court-appointed trustee panels, we specialize in high-stakes financial restructuring and advisory. Our firm was pivotal in the restructuring of major entities like the KBBO Group, proving our capability to handle complex financial landscapes with integrity.",
        quote1: "Trust is our",
        quote2: "greatest asset.",
        role: "Chairman & Director",
        partnersTitle: "Our Key Partners",
        partnersSubtitle: "Click to view profile",
        points: [
          "ISO Certified Operations",
          "Approved by UAE Ministry of Justice",
          "Experts in UAE Bankruptcy Law",
          "Multilingual Team (Arabic & English)"
        ]
      },
      profile: {
        role: "Role",
        expertise: "Core Expertise",
        contact: "Contact",
      },
      contact: {
        title: "Let's Discuss Your Financial Future",
        desc: "Whether you require a statutory audit, tax advice, or complex restructuring support, our experts are ready to assist.",
        labels: {
          headOffice: "Head Office",
          phone: "Phone",
          email: "Email",
          formTitle: "Request a Callback",
          firstName: "First Name",
          lastName: "Last Name",
          company: "Company Name",
          service: "Service Required",
          message: "Message",
          submit: "Submit Request"
        },
        placeholders: {
          firstName: "John",
          lastName: "Doe",
          company: "Your Business Ltd",
          message: "How can we help you?"
        },
        options: [
          "Auditing & Assurance",
          "Tax & VAT Consultancy",
          "Judicial Expertise",
          "Business Restructuring",
          "Other"
        ]
      },
      footer: {
        rights: "Salem Ballama Auditing of Accounts. All Rights Reserved.",
        tagline: "Designed for Excellence in UAE."
      }
    },
    ar: {
      nav: {
        home: "الرئيسية",
        services: "خدماتنا",
        about: "من نحن",
        expertise: "الخبرات",
        contact: "اتصل بنا",
        cta: "استشارة مجانية",
        quote: "اطلب عرض سعر",
        backToTeam: "عودة للفريق"
      },
      hero: {
        established: "تأسست عام 1998 في أبوظبي",
        title1: "النزاهة في كل",
        title1Highlight: "رقم.",
        title2: "الوضوح في كل",
        title2Highlight: "قرار.",
        desc: "نقدم خدمات تدقيق عالمية المستوى، وخبرة قضائية، وخدمات إعادة هيكلة الشركات. نمكّن الشركات في الإمارات من خلال الشفافية المالية والرؤية الاستراتيجية.",
        btnService: "خدماتنا",
        btnAbout: "عن الشركة"
      },
      stats: [
        { number: '+25', label: 'سنة خبرة' },
        { number: '+500', label: 'عميل شركة' },
        { number: '%100', label: 'امتثال للقوانين' },
        { number: '+100ألف', label: 'أصول مدققة' },
      ],
      services: {
        header: "خبراتنا",
        title: "حلول مالية شاملة",
        desc: "من التدقيق القانوني إلى إعادة هيكلة الشركات المعقدة، نقدم الدقة والامتثال المصمم خصيصًا للسوق الإماراتي.",
        items: [
          {
            title: "التدقيق والضمان",
            desc: "التدقيق القانوني، التدقيق الداخلي، وخدمات تقييم المخاطر المصممة لتوفير الثقة المطلقة لأصحاب المصلحة."
          },
          {
            title: "الخبرة القضائية",
            desc: "خبرة مالية معينة من قبل المحكمة، دعم التحكيم، وخدمات حل النزاعات المعترف بها من قبل محاكم الإمارات."
          },
          {
            title: "إعادة الهيكلة المالية",
            desc: "استراتيجيات التحول للكيانات المتعثرة، بما في ذلك إجراءات الإفلاس وإدارة التصفية."
          },
          {
            title: "الاستشارات الضريبية",
            desc: "التنقل في المشهد الضريبي المتطور في الإمارات مع تقديم إقرارات ضريبة القيمة المضافة وتخطيط ضرائب الشركات."
          },
          {
            title: "تأسيس الأعمال",
            desc: "دعم شامل لتأسيس الشركات، دراسات الجدوى، والترخيص في دبي وأبوظبي."
          },
          {
            title: "مسك الدفاتر والموارد البشرية",
            desc: "المحاسبة الخارجية، إدارة الرواتب، وخدمات المدير المالي لتبسيط عملياتك اليومية."
          }
        ],
        learnMore: "المزيد"
      },
      about: {
        title: "إرث من القيادة المالية",
        intro: "تأسس مكتب سالم بالعمى لتدقيق الحسابات في عام 1998، ونما ليصبح واحدًا من المؤسسات المالية الأكثر احترامًا في الإمارات.",
        desc: "تحت قيادة السيد محمد سالم بالعمى، رئيس لجان الأمناء المعينين من المحكمة، نتخصص في إعادة الهيكلة المالية والاستشارات المعقدة. كان لمكتبنا دور محوري في إعادة هيكلة كيانات كبرى مثل مجموعة KBBO، مما يثبت قدرتنا على التعامل مع المشهد المالي المعقد بنزاهة.",
        quote1: "الثقة هي",
        quote2: "أكبر أصولنا.",
        role: "الرئيس والمدير",
        partnersTitle: "شركاؤنا الرئيسيون",
        partnersSubtitle: "اضغط لعرض الملف الشخصي",
        points: [
          "عمليات معتمدة من ISO",
          "معتمدون من وزارة العدل الإماراتية",
          "خبراء في قانون الإفلاس الإماراتي",
          "فريق متعدد اللغات (العربية والإنجليزية)"
        ]
      },
      profile: {
        role: "المنصب",
        expertise: "الخبرات الأساسية",
        contact: "تواصل",
      },
      contact: {
        title: "دعنا نناقش مستقبلك المالي",
        desc: "سواء كنت بحاجة إلى تدقيق قانوني، أو مشورة ضريبية، أو دعم معقد لإعادة الهيكلة، خبراؤنا مستعدون للمساعدة.",
        labels: {
          headOffice: "المكتب الرئيسي",
          phone: "الهاتف",
          email: "البريد الإلكتروني",
          formTitle: "اطلب اتصالاً",
          firstName: "الاسم الأول",
          lastName: "اسم العائلة",
          company: "اسم الشركة",
          service: "الخدمة المطلوبة",
          message: "الرسالة",
          submit: "إرسال الطلب"
        },
        placeholders: {
          firstName: "الإسم الأول",
          lastName: "إسم العائلة",
          company: "شركتك ذ.م.م",
          message: "كيف يمكننا مساعدتك؟"
        },
        options: [
          "التدقيق والضمان",
          "الاستشارات الضريبية وضريبة القيمة المضافة",
          "الخبرة القضائية",
          "إعادة هيكلة الأعمال",
          "أخرى"
        ]
      },
      footer: {
        rights: "سالم بلعمه لتدقيق الحسابات. جميع الحقوق محفوظة.",
        tagline: "صمم للتميز في الإمارات."
      }
    }
  };

  const t = content[lang];
  const isRTL = lang === 'ar';

  // Icon Mapping for Services
  const serviceIcons = [
    <ShieldCheck className="w-10 h-10 text-amber-500" />,
    <Scale className="w-10 h-10 text-blue-600" />,
    <BarChart3 className="w-10 h-10 text-emerald-500" />,
    <FileText className="w-10 h-10 text-purple-500" />,
    <Building2 className="w-10 h-10 text-indigo-500" />,
    <CheckCircle className="w-10 h-10 text-cyan-500" />
  ];

  // --- Main Site View ---
  const MainView = () => (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className={`absolute top-0 ${isRTL ? 'left-0 -scale-x-100' : 'right-0'} w-1/2 h-full bg-blue-800/20 skew-x-12 transform translate-x-20`}></div>
        <div className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-1/3 h-1/2 bg-amber-500/10 rounded-full filter blur-3xl`}></div>
        
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-700/50 text-blue-200 text-sm font-medium mb-6">
              <Award size={14} className="text-amber-400" />
              <span>{t.hero.established}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t.hero.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">{t.hero.title1Highlight}</span><br />
              {t.hero.title2} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">{t.hero.title2Highlight}</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded font-semibold text-lg transition-all flex items-center justify-center gap-2"
              >
                {t.hero.btnService} {isRTL ? <ChevronLeft size={20} /> : <ArrowRight size={20} />}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-transparent border border-slate-600 text-white hover:bg-white/5 px-8 py-4 rounded font-semibold text-lg transition-all"
              >
                {t.hero.btnAbout}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-blue-900 py-12 border-b border-blue-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-1" dir="ltr">{stat.number}</div>
                <div className="text-blue-300 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-600 font-semibold tracking-wide uppercase mb-2">{t.services.header}</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">{t.services.title}</h3>
            <p className="text-slate-600 text-lg">
              {t.services.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.services.items.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group">
                <div className="mb-6 p-3 bg-slate-50 w-fit rounded-lg group-hover:bg-slate-100 transition-colors">
                  {serviceIcons[idx]}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.desc}
                </p>
                <a href="#contact" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 gap-1">
                  {t.services.learnMore} {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Leadership Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start gap-16">
            <div className="md:w-1/2 sticky top-24">
              <div className="relative">
                {/* Chairman Image with user modifications preserved */}
                <div className="aspect-[4/5] rounded-lg overflow-hidden relative group shadow-lg">
                  <img
                    src="/salempic.png"
                    alt="Chairman"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">SALEM</span>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                     <h4 className="text-white text-xl font-bold">Mr. Salem Ballama Al Tamimi</h4>
                     <p className="text-amber-400 text-sm">{t.about.role}</p>
                  </div>
                </div>
                <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} bg-amber-500 p-8 rounded-lg shadow-xl hidden md:block`}>
                  <p className="text-slate-900 font-bold text-2xl">"{t.about.quote1}</p>
                  <p className="text-slate-900 font-bold text-2xl">{t.about.quote2}"</p>
                </div>
              </div>

              {/* Team Grid */}
              {/* ADDED ID HERE FOR SCROLL TARGETING */}
              <div className="mt-16" id="team-grid">
                <div className="flex justify-between items-end mb-6">
                   <h3 className="text-xl font-bold text-slate-900">
                     {t.about.partnersTitle}
                   </h3>
                   <span className="text-xs text-slate-400 italic">
                     {t.about.partnersSubtitle}
                   </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {teamMembers.map((member) => (
                    <div 
                      key={member.id} 
                      className="group cursor-pointer"
                      onClick={() => setSelectedMember(member)}
                    >
                      <div className="aspect-[4/5] bg-slate-100 rounded-lg overflow-hidden relative mb-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md border border-transparent group-hover:border-amber-400/30">
                        <img 
                          src={member.image} 
                          alt={member.name[lang]}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <ArrowRight className={`text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all ${isRTL ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                      <h5 className="font-bold text-slate-900 text-sm group-hover:text-blue-800 transition-colors">
                        {member.name[lang]}
                      </h5>
                      <p className="text-slate-500 text-[10px] uppercase tracking-wide">
                        {member.role[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t.about.title}
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {t.about.intro}
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {t.about.desc}
              </p>
              
              <div className="space-y-4">
                {t.about.points.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-green-100 p-1 rounded-full">
                      <CheckCircle size={16} className="text-green-600" />
                    </div>
                    <span className="text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
         {/* Background decoration */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-600 rounded-full blur-3xl"></div>
         </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t.contact.title}
              </h2>
              <p className="text-slate-300 mb-10 text-lg">
                {t.contact.desc}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{t.contact.labels.headOffice}</h4>
                    <p className="text-slate-400">Empire Heights Tower A, Business Bay<br/>Dubai, United Arab Emirates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{t.contact.labels.phone}</h4>
                    <p className="text-slate-400" dir="ltr">+971 04 441 1000</p>
                    <p className="text-slate-500 text-sm">Mon - Sat, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{t.contact.labels.email}</h4>
                    <p className="text-slate-400">info@salemballama.com</p>
                    <p className="text-slate-500 text-xs mt-1 text-amber-500/80">*Recommended: Upgrade from Gmail</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.labels.formTitle}</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.labels.firstName}</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder={t.contact.placeholders.firstName} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.labels.lastName}</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder={t.contact.placeholders.lastName} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.labels.company}</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder={t.contact.placeholders.company} />
                </div>

                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.labels.service}</label>
                   <select className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white">
                     {t.contact.options.map((opt, i) => (
                       <option key={i}>{opt}</option>
                     ))}
                   </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.labels.message}</label>
                  <textarea className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all h-32" placeholder={t.contact.placeholders.message}></textarea>
                </div>

                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-amber-500/20">
                  {t.contact.labels.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  // --- Profile View (New Component) ---
  const ProfileView = ({ member }) => (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50">
       <div className="container mx-auto px-6">
          
          {/* Back Button */}
          {/* FIXED: Using handleBackToTeam instead of inline function */}
          <button 
             onClick={handleBackToTeam}
             className="flex items-center gap-2 text-slate-500 hover:text-blue-900 mb-8 transition-colors group font-medium"
          >
             {isRTL ? <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /> : <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />}
             {t.nav.backToTeam}
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
             <div className="grid md:grid-cols-12 gap-0">
                {/* Image Column */}
                <div className="md:col-span-5 relative h-[400px] md:h-auto">
                   <img 
                      src={member.image} 
                      alt={member.name[lang]}
                      className="w-full h-full object-cover absolute inset-0"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden"></div>
                </div>

                {/* Content Column */}
                <div className="md:col-span-7 p-8 md:p-12">
                   <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                         <span className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-2 block">
                            {member.role[lang]}
                         </span>
                         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                            {member.name[lang]}
                         </h2>
                         <div className="flex items-center gap-2 text-slate-500">
                           <Building2 size={16} />
                           <span>Salem Ballama Auditing</span>
                         </div>
                      </div>
                      <div className="flex gap-3">
                         <button className="p-3 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors">
                            <Linkedin size={20} />
                         </button>
                         <button className="p-3 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors">
                            <Mail size={20} />
                         </button>
                      </div>
                   </div>

                   <div className="h-px w-full bg-slate-100 mb-8"></div>

                   <div className="mb-8">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <FileText size={18} className="text-amber-500" />
                        {lang === 'en' ? "Professional Bio" : "السيرة المهنية"}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                         {member.bio[lang] || (lang === 'en' ? "Bio coming soon..." : "السيرة الذاتية قريبا...")}
                      </p>
                   </div>

                   <div className="mb-8">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Award size={18} className="text-amber-500" />
                        {t.profile.expertise}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                         {member.expertise[lang].map((skill, i) => (
                            <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                               {skill || (lang === 'en' ? "General Management" : "إدارة عامة")}
                            </span>
                         ))}
                      </div>
                   </div>


                </div>
             </div>
          </div>
       </div>
    </div>
  );

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={`font-sans text-slate-800 antialiased bg-white ${isRTL ? 'font-arabic' : ''}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || selectedMember ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedMember(null)}>
            <div className="bg-blue-900 text-white p-2 rounded">
              <Scale size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl tracking-tight leading-none ${scrolled || selectedMember ? 'text-slate-900' : 'text-white'}`}>
                 {lang === 'en' ? "SALEM BALLAMA" : "سالم بلعمه"}
              </span>
              <span className={`text-xs tracking-widest uppercase ${scrolled || selectedMember ? 'text-slate-500' : 'text-slate-300'}`}>
                {lang === 'en' ? "Auditing & Advisory" : "للتدقيق والاستشارات"}
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {['home', 'services', 'about', 'expertise', 'contact'].map((key) => (
              <button 
                key={key}
                onClick={() => scrollToSection(key)}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${scrolled || selectedMember ? 'text-slate-700' : 'text-slate-200'}`}
              >
                {t.nav[key]}
              </button>
            ))}
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-sm font-medium border px-3 py-1 rounded-full transition-all hover:bg-white/10 ${scrolled || selectedMember ? 'border-slate-300 text-slate-700' : 'border-slate-500 text-slate-200'}`}
            >
              <Globe size={14} />
              {lang === 'en' ? 'العربية' : 'English'}
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded font-medium transition-all shadow-lg hover:shadow-amber-500/20"
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-sm font-medium ${scrolled || selectedMember ? 'text-slate-900' : 'text-white'}`}
            >
              {lang === 'en' ? 'العربية' : 'En'}
            </button>
            <button 
              className={`${scrolled || selectedMember ? 'text-slate-900' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-6 flex flex-col space-y-4">
            {['home', 'services', 'about', 'expertise', 'contact'].map((key) => (
              <button 
                key={key}
                onClick={() => scrollToSection(key)}
                className="text-left rtl:text-right text-slate-600 font-medium py-2 border-b border-slate-50"
              >
                {t.nav[key]}
              </button>
            ))}
             <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-900 text-white w-full py-3 rounded font-medium"
            >
              {t.nav.quote}
            </button>
          </div>
        )}
      </nav>

      {/* Conditional Rendering: Main Site or Profile Page */}
      {selectedMember ? (
        <ProfileView member={selectedMember} />
      ) : (
        <MainView />
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedMember(null)}>
               <Scale size={24} className="text-blue-500" />
               <span className="text-white font-bold text-lg">
                 {lang === 'en' ? "SALEM BALLAMA" : "سالم بلعمه"}
               </span>
            </div>
            <div className="text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
              <p className="mt-2 text-xs">{t.footer.tagline}</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;