import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ChevronDown, Mail, Phone, MapPin, Home, FileText, Calendar, Building,
  BookOpen, GraduationCap, Users, Heart, CheckCircle, Download,
  Send, DollarSign, Target, School, Bed, BookMarked, ArrowRight
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

// Crescent SVG Component
const CrescentIcon = ({ className = '', size = 40 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
    <path
      d="M20 3C10.6 3 3 10.6 3 20s7.6 17 17 17c2.5 0 4.9-.5 7-1.5-5.5-2.5-9.3-8-9.3-14.5S23.5 9.5 29 7c-2.1-1-4.5-1.5-7-1.5-1.1 0-2.2.1-3.2.3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// Large Crescent Arc SVG
const CrescentArc = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 400 600" fill="none" className={className} preserveAspectRatio="none">
    <path
      d="M320 50C180 50 80 200 80 300s100 250 240 250"
      stroke="#C9A45C"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// Registration Form Modal Component
const RegistrationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    studentAge: '',
    classLevel: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const subject = `Registration Request - ${formData.studentName}`;
    const body = `
Assalamu Alaikum,

I would like to register my child for Al-Aarif Islamic Institute.

Parent/Guardian Information:
Name: ${formData.parentName}
Email: ${formData.email}
Phone: ${formData.phone}

Student Information:
Name: ${formData.studentName}
Age: ${formData.studentAge}
Class Level: ${formData.classLevel}

Additional Message:
${formData.message || 'N/A'}

Jazakumullahu Khairan,
${formData.parentName}
    `.trim();

    // Open Gmail compose
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=alaarifislamicins@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
    
    toast.success('Registration form opened in Gmail!');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F6F7F4]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#0B3A2C]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Student Registration
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="parentName" className="text-[#111111]">Parent/Guardian Name *</Label>
              <Input
                id="parentName"
                required
                value={formData.parentName}
                onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                className="bg-white border-[#C9A45C]/30"
                placeholder="Full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#111111]">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-white border-[#C9A45C]/30"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#111111]">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="bg-white border-[#C9A45C]/30"
              placeholder="+1 (XXX) XXX-XXXX"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="studentName" className="text-[#111111]">Student Name *</Label>
              <Input
                id="studentName"
                required
                value={formData.studentName}
                onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                className="bg-white border-[#C9A45C]/30"
                placeholder="Student's full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="studentAge" className="text-[#111111]">Student Age *</Label>
              <Input
                id="studentAge"
                type="number"
                required
                value={formData.studentAge}
                onChange={(e) => setFormData({...formData, studentAge: e.target.value})}
                className="bg-white border-[#C9A45C]/30"
                placeholder="Age"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="classLevel" className="text-[#111111]">Class Level *</Label>
            <select
              id="classLevel"
              required
              value={formData.classLevel}
              onChange={(e) => setFormData({...formData, classLevel: e.target.value})}
              className="w-full px-3 py-2 bg-white border border-[#C9A45C]/30 rounded-md text-[#111111]"
            >
              <option value="">Select a class</option>
              <option value="Class 1">Class 1</option>
              <option value="Class 2">Class 2</option>
              <option value="Quran Recitation">Quran Recitation</option>
              <option value="Quran Memorization">Quran Memorization</option>
              <option value="Aalim Program">Aalim Program</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#111111]">Additional Information</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="bg-white border-[#C9A45C]/30 min-h-[100px]"
              placeholder="Any additional information or questions..."
            />
          </div>

          <div className="bg-[#0B3A2C]/5 p-4 rounded-lg">
            <p className="text-sm text-[#6B6F5A]">
              <strong>Required Documents:</strong> Birth Certificate (photocopy), Immunization Records, 
              Proof of Residence, Previous School Records (if applicable)
            </p>
          </div>

          <button type="submit" className="w-full btn-gold-filled py-4">
            <Send className="w-4 h-4 mr-2" />
            Send Registration via Gmail
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Email Signup Modal for Fundraising
const EmailSignupModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email to send the fundraising letter
    const subject = 'Al-Aarif Islamic Institute - Fundraising Information';
    const body = `
Assalamu Alaikum Wa Rahmatullahi Wa Barakatuh,

Thank you for your interest in supporting Al-Aarif Islamic Institute!

I pray that this message finds you in the best state of Imaan, health, and well-being.

On behalf of Al-Aarif Islamic Institute, a newly established center of Islamic learning, we humbly seek your support. Al-Aarif Islamic Institute has recently commenced its journey with a sincere commitment to providing quality Islamic education. We currently offer programs in Hifz (Qur'an memorization), Nazirah (Qur'an recitation), Arabic language studies, and the Aalim course, aiming to nurture students with sound Islamic knowledge and values rooted in the Qur'an and Sunnah.

The Prophet ﷺ said, "When a person dies, all their deeds end except three: a continuing charity, beneficial knowledge, or a righteous child who prays for them." (Muslim)

By supporting Islamic education, you contribute to a Sadaqah Jariyah that will benefit generations to come. Your generous contributions will help us provide essential resources, hire qualified teachers, and ensure a nurturing environment for our students as we strive to build a brighter future for the Ummah.

Jazakumullahu Khairan for your continuous support and generosity. May Allah reward you abundantly in this world and the Hereafter.

Wasalam,
Mufti Taqi Ahmad (Cornwall) +1 (613) 662-7043
Al-Aarif Islamic Institute
4269 Limebank Rd, Ottawa, ON K1V 1G5
alaarifislamicins@gmail.com
https://al-aarif.org/

Charity #: 81184 5189 RR0001
    `.trim();

    // Open Gmail compose to send the letter to the entered email
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
    
    setSubmitted(true);
    toast.success('Fundraising letter opened in Gmail to send!');
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setEmail('');
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-[#F6F7F4]">
        <DialogHeader>
          <DialogTitle className="text-xl text-[#0B3A2C]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Stay Updated on Campaigns
          </DialogTitle>
        </DialogHeader>
        
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-[#C9A45C] mx-auto mb-4" />
            <p className="text-[#0B3A2C] font-medium">Thank you! The fundraising letter has been prepared.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <p className="text-sm text-[#6B6F5A]">
              Enter your email to receive our fundraising information letter.
            </p>
            <div className="space-y-2">
              <Label htmlFor="signupEmail" className="text-[#111111]">Email Address</Label>
              <Input
                id="signupEmail"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-[#C9A45C]/30"
                placeholder="your@email.com"
              />
            </div>
            <button type="submit" className="w-full btn-gold-filled">
              <Mail className="w-4 h-4 mr-2" />
              Receive Fundraising Letter
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const hadithRef = useRef<HTMLDivElement>(null);
  const registrationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const campaignsRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const donateRef = useRef<HTMLDivElement>(null);
  
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isEmailSignupOpen, setIsEmailSignupOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const heroTl = gsap.timeline({ delay: 0.3 });
      
      heroTl.fromTo('.hero-image', 
        { opacity: 0, x: -60, scale: 1.03 },
        { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power2.out' }
      );
      
      heroTl.fromTo('.hero-crescent-arc',
        { opacity: 0, strokeDashoffset: 1000 },
        { opacity: 1, strokeDashoffset: 0, duration: 1.4, ease: 'power2.out' },
        '-=0.9'
      );
      
      heroTl.fromTo('.hero-eyebrow',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.8'
      );
      
      heroTl.fromTo('.hero-headline',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      );
      
      heroTl.fromTo('.hero-body',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );
      
      heroTl.fromTo('.hero-cta',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );
      
      heroTl.fromTo('.hero-crescent-icon',
        { opacity: 0, rotate: -25, scale: 0.9 },
        { opacity: 1, rotate: 0, scale: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.5'
      );

      // Scroll animations for sections
      gsap.fromTo('.hadith-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: hadithRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.campaigns-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: campaignsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.programs-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: programsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.donate-content',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: donateRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.registration-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: registrationRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.registration-card',
        { opacity: 0, x: 60, scale: 0.98 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: registrationRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.detail-item',
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.details-list',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.contact-content',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const scrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('home');
  };

  const scrollToDonate = () => {
    donateRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('donate');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const openGmailDraft = () => {
    const subject = 'Inquiry - Al-Aarif Islamic Institute';
    const body = 'Assalamu Alaikum,\n\nI would like to inquire about...\n\nJazakumullahu Khairan,';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=alaarifislamicins@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-6 flex justify-between items-center bg-[#F6F7F4]/90 backdrop-blur-sm">
        <div 
          className="text-xl font-semibold tracking-tight text-[#0B3A2C] cursor-pointer" 
          style={{ fontFamily: 'Playfair Display, serif' }}
          onClick={scrollToTop}
        >
          Al-Aarif
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={scrollToTop}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeSection === 'home' 
                ? 'bg-[#0B3A2C] text-[#F6F7F4]' 
                : 'text-[#6B6F5A] hover:text-[#0B3A2C]'
            }`}
          >
            Home
          </button>
          <button 
            onClick={scrollToDonate}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeSection === 'donate' 
                ? 'bg-[#C9A45C] text-[#0B3A2C]' 
                : 'bg-[#C9A45C]/20 text-[#0B3A2C] hover:bg-[#C9A45C]/40'
            }`}
          >
            Donate
          </button>
        </div>
      </nav>

      {/* Section 1: Announcement (Hero) */}
      <section 
        id="announcement"
        ref={heroRef}
        className="min-h-screen w-full bg-[#F6F7F4] relative flex items-center pt-20"
      >
        <div className="w-full px-6 lg:px-0 lg:pl-[6vw] py-12 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            {/* Left Image with Crescent */}
            <div className="relative w-full lg:w-[42vw] flex-shrink-0">
              {/* Crescent Arc Behind */}
              <div className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 w-[80%] lg:w-[42vw] h-[50vh] lg:h-[80vh] hero-crescent-arc opacity-0">
                <CrescentArc className="w-full h-full" />
              </div>
              
              {/* Hero Image */}
              <div className="relative z-10 w-full lg:w-[34vw] h-[50vh] lg:h-[64vh] overflow-hidden hero-image opacity-0">
                <img 
                  src="/hero_student.jpg" 
                  alt="Student reading"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 lg:pl-[8vw] max-w-xl lg:max-w-[38vw]">
              {/* Eyebrow */}
              <div className="hero-eyebrow opacity-0 mb-4">
                <span className="text-eyebrow text-[#6B6F5A]">Announcement</span>
                <div className="w-[72px] h-[1px] bg-[#111111]/18 mt-2" />
              </div>

              {/* Headline */}
              <h1 className="hero-headline opacity-0 text-3xl sm:text-4xl lg:text-[clamp(36px,4vw,56px)] text-[#111111] leading-tight mb-6">
                Registration is now open for the new academic year.
              </h1>

              {/* Body */}
              <p className="hero-body opacity-0 text-base lg:text-lg text-[#6B6F5A] leading-relaxed mb-8">
                Registration for Class 1 and Class 2 for the upcoming academic year for boys is now open at Al-Aarif Islamic Institution. Classes will commence in September, and we are excited to offer a learning experience that combines religious and secular education.
              </p>

              {/* CTA Button */}
              <button 
                onClick={scrollToRegistration}
                className="hero-cta opacity-0 btn-gold group"
              >
                View registration details
                <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Small Crescent Icon */}
        <div className="hidden lg:block absolute right-[6vw] top-[10vh] hero-crescent-icon opacity-0 text-[#C9A45C]">
          <CrescentIcon size={44} />
        </div>
      </section>

      {/* Section 2: Hadith & Verse */}
      <section 
        id="inspiration"
        ref={hadithRef}
        className="min-h-screen w-full bg-[#0B3A2C] relative flex items-center justify-center py-20"
      >
        {/* Top Crescent Icons */}
        <div className="absolute left-[6vw] top-[10vh] text-[#C9A45C] opacity-80">
          <CrescentIcon size={40} />
        </div>
        <div className="absolute right-[6vw] top-[10vh] text-[#C9A45C] opacity-80">
          <CrescentIcon size={40} />
        </div>

        {/* Center Content */}
        <div className="hadith-content text-center px-6 max-w-4xl mx-auto">
          {/* Crescent Window with Image */}
          <div className="relative mb-12">
            <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] rounded-[50%_50%_12px_12px/28%_28%_12px_12px] overflow-hidden border-2 border-[#C9A45C]/30">
              <img 
                src="/mosque_sky.jpg" 
                alt="Mosque at dawn"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3A2C]/60 to-transparent" />
            </div>
          </div>

          {/* Hadith Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl lg:text-4xl text-[#C9A45C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Hadith of the Day
              </h2>
              <p className="text-lg lg:text-2xl text-[#F6F7F4]/90 leading-relaxed italic">
                "The best among you are those who learn the Qur'an and teach it."
              </p>
              <p className="text-sm text-[#C9A45C]/80 mt-3">
                — Narrated by Abu Huraira (RA) —
              </p>
            </div>

            <div className="w-24 h-[1px] bg-[#C9A45C]/40 mx-auto" />

            <div>
              <h2 className="text-2xl lg:text-4xl text-[#C9A45C] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Verse of the Day
              </h2>
              <p className="text-lg lg:text-xl text-[#F6F7F4]/90 leading-relaxed">
                "Read in the name of your Lord who created—created man from a clinging clot. Read, and your Lord is the most Generous."
              </p>
              <p className="text-sm text-[#C9A45C]/80 mt-3">
                — Surah Al-Alaq (96:1-3) —
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Current Campaigns */}
      <section 
        id="campaigns"
        ref={campaignsRef}
        className="min-h-screen w-full bg-[#F6F7F4] py-20"
      >
        <div className="campaigns-content px-6 lg:px-[8vw]">
          <div className="text-center mb-12">
            <span className="text-eyebrow text-[#6B6F5A] block mb-3">Support Our Cause</span>
            <h2 className="text-3xl lg:text-[clamp(32px,3.2vw,52px)] text-[#111111] mb-4">
              Current Campaigns
            </h2>
            <p className="text-base lg:text-lg text-[#6B6F5A] max-w-2xl mx-auto">
              Help us build a foundation of knowledge and faith for future generations
            </p>
          </div>

          {/* Campaign Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#C9A45C]/20">
                <img 
                  src="/campaign1.png" 
                  alt="Al-Aarif Campaign - Building Foundation of Knowledge"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#C9A45C]/20">
                <img 
                  src="/campaign2.png" 
                  alt="Al-Aarif Campaign - Support Our Vision"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Fundraising Goal Highlight */}
          <div className="mt-12 max-w-4xl mx-auto bg-[#0B3A2C] rounded-2xl p-8 lg:p-12 text-center">
            <DollarSign className="w-12 h-12 text-[#C9A45C] mx-auto mb-4" />
            <h3 className="text-2xl lg:text-3xl text-[#C9A45C] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
              Fundraising Goal for Coming Year
            </h3>
            <p className="text-4xl lg:text-5xl text-[#F6F7F4] font-bold mb-4">$75,000</p>
            <p className="text-[#F6F7F4]/80 max-w-xl mx-auto">
              Your support helps us provide quality Islamic education, hire qualified teachers, 
              and create a nurturing learning environment for our students.
            </p>
            <button 
              onClick={scrollToDonate}
              className="mt-6 btn-gold-filled"
            >
              <Heart className="w-4 h-4 mr-2" />
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: Programs */}
      <section 
        id="programs"
        ref={programsRef}
        className="min-h-screen w-full bg-[#F6F7F4] py-20"
      >
        <div className="programs-content px-6 lg:px-[8vw]">
          <div className="text-center mb-12">
            <span className="text-eyebrow text-[#6B6F5A] block mb-3">What We Offer</span>
            <h2 className="text-3xl lg:text-[clamp(32px,3.2vw,52px)] text-[#111111] mb-4">
              Our Programs
            </h2>
            <p className="text-base lg:text-lg text-[#6B6F5A] max-w-2xl mx-auto">
              Alhamdullilah, by the Grace of Allah, we are currently offering quality Islamic education
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Quran Program */}
            <div className="bg-white/60 rounded-2xl p-8 border border-[#C9A45C]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0B3A2C] rounded-full flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-[#C9A45C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#111111]">Qur'an Program</h3>
                  <p className="text-sm text-[#6B6F5A]">Daily & Weekend Classes</p>
                </div>
              </div>
              <p className="text-[#6B6F5A] leading-relaxed mb-4">
                Students are first taught to read Qur'an, with an emphasis on correct pronunciation and Tajweed. 
                Students may then move on to memorization with the goal of memorizing the entire Qur'an.
              </p>
              <ul className="space-y-2 text-sm text-[#6B6F5A]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C9A45C]" />
                  Daily revision read to the teacher
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C9A45C]" />
                  Lessons must be read fluently before progressing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C9A45C]" />
                  Students of all ages benefit from this program
                </li>
              </ul>
            </div>

            {/* Aalim Program */}
            <div className="bg-white/60 rounded-2xl p-8 border border-[#C9A45C]/20 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0B3A2C] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-[#C9A45C]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#111111]">Aalim Class Program</h3>
                  <p className="text-sm text-[#6B6F5A]">Dars-e-Nizami Curriculum</p>
                </div>
              </div>
              <p className="text-[#6B6F5A] leading-relaxed mb-4">
                A traditional Islamic educational curriculum where students master Arabic language, 
                grammar, and rhetoric, along with classical books of Hanafi Fiqh and Usool.
              </p>
              <ul className="space-y-2 text-sm text-[#6B6F5A]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C9A45C]" />
                  Arabic, Grammar & Rhetoric
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C9A45C]" />
                  Hanafi Fiqh & Usool-ul-Fiqh
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C9A45C]" />
                  Aqeedah, Tafseer & Hadith Studies
                </li>
              </ul>
            </div>
          </div>

          {/* Achievement Banner */}
          <div className="mt-12 max-w-4xl mx-auto bg-[#C9A45C]/10 rounded-2xl p-8 border border-[#C9A45C]/30">
            <div className="flex flex-col lg:flex-row items-center gap-6 text-center lg:text-left">
              <div className="w-16 h-16 bg-[#C9A45C] rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-[#0B3A2C]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B3A2C] mb-2">Alhamdulillah!</h3>
                <p className="text-[#6B6F5A]">
                  Our first class of <strong className="text-[#0B3A2C]">9 students</strong> in the Aalim program have successfully 
                  completed their first year and are moving on to the second level of their Aalim studies. 
                  We are now receiving applications for students intending to begin a new first-year class.
                </p>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-12">
            <h3 className="text-2xl text-[#111111] text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Future Goals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {[
                { icon: Building, text: 'Purchase a building for full-time classes' },
                { icon: School, text: 'Expand with morning & full-time programs' },
                { icon: Bed, text: 'Acquire boarding facilities for male students' },
                { icon: BookMarked, text: 'Quran classes for women' },
                { icon: GraduationCap, text: 'Establish elementary & high school' },
                { icon: Target, text: 'Higher Islamic education for women' },
              ].map((goal, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white/50 rounded-lg">
                  <goal.icon className="w-5 h-5 text-[#C9A45C] flex-shrink-0" />
                  <span className="text-sm text-[#6B6F5A]">{goal.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Donate */}
      <section 
        id="donate"
        ref={donateRef}
        className="min-h-screen w-full bg-[#0B3A2C] py-20"
      >
        <div className="donate-content px-6 lg:px-[8vw]">
          <div className="text-center mb-12">
            <span className="text-eyebrow text-[#C9A45C] block mb-3">Support Us</span>
            <h2 className="text-3xl lg:text-[clamp(32px,3.2vw,52px)] text-[#F6F7F4] mb-4">
              Donate to Al-Aarif
            </h2>
            <p className="text-lg text-[#F6F7F4]/80 max-w-2xl mx-auto italic">
              "The example of those who spend their wealth in the way of Allah is like a seed of grain 
              that sprouts seven ears; in every ear, there are a hundred grains."
            </p>
            <p className="text-sm text-[#C9A45C] mt-2">— Surah Al-Baqarah 2:261 —</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Donation Methods */}
            <div className="bg-[#F6F7F4]/10 rounded-2xl p-8 border border-[#C9A45C]/30">
              <h3 className="text-xl font-semibold text-[#C9A45C] mb-6 flex items-center gap-3">
                <DollarSign className="w-6 h-6" />
                Ways to Donate
              </h3>
              
              <div className="space-y-6">
                <div className="p-4 bg-[#F6F7F4]/5 rounded-lg">
                  <p className="font-medium text-[#F6F7F4] mb-2">E-Transfer</p>
                  <p className="text-[#C9A45C] text-lg font-mono">alaarifislamicins@gmail.com</p>
                </div>

                <div className="p-4 bg-[#F6F7F4]/5 rounded-lg">
                  <p className="font-medium text-[#F6F7F4] mb-2">Cheques Payable To</p>
                  <p className="text-[#F6F7F4]/80">Al-Aarif Islamic Institute</p>
                  <p className="text-sm text-[#F6F7F4]/60 mt-1">
                    Mail to: 6837 Rae Road, RR1, Cornwall ON K6H 5R5
                  </p>
                </div>

                <div className="p-4 bg-[#F6F7F4]/5 rounded-lg">
                  <p className="font-medium text-[#F6F7F4] mb-2">Charity Number</p>
                  <p className="text-[#C9A45C]">81184 5189 RR0001</p>
                  <p className="text-sm text-[#F6F7F4]/60 mt-1">All donations are tax deductible</p>
                </div>
              </div>
            </div>

            {/* Pledge Form & Email Signup */}
            <div className="space-y-6">
              {/* Pledge Form Download */}
              <div className="bg-[#F6F7F4]/10 rounded-2xl p-8 border border-[#C9A45C]/30">
                <h3 className="text-xl font-semibold text-[#C9A45C] mb-4 flex items-center gap-3">
                  <FileText className="w-6 h-6" />
                  Pledge Form
                </h3>
                <p className="text-[#F6F7F4]/80 mb-6">
                  Download our pledge form to set up a one-time or monthly donation. 
                  Fill it out and send it back to us via email or mail.
                </p>
                <a 
                  href="/Pledge%20Form%20v3%20Combined%20with%20Introduction.pdf"
                  download
                  className="btn-gold w-full justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Pledge Form
                </a>
              </div>

              {/* Email Signup */}
              <div className="bg-[#F6F7F4]/10 rounded-2xl p-8 border border-[#C9A45C]/30">
                <h3 className="text-xl font-semibold text-[#C9A45C] mb-4 flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  Stay Updated
                </h3>
                <p className="text-[#F6F7F4]/80 mb-6">
                  Sign up to receive our fundraising letter and be notified about future campaigns.
                </p>
                <button 
                  onClick={() => setIsEmailSignupOpen(true)}
                  className="btn-gold w-full justify-center"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Sign Up for Updates
                </button>
              </div>
            </div>
          </div>

          {/* Sadaqah Jariyah Note */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-[#F6F7F4]/70 italic">
              Supporting Al-Aarif Islamic Institute is a form of <strong className="text-[#C9A45C]">Sadaqah Jariyah</strong>, 
              benefiting future generations. Your donations help provide resources to hire teachers and create a nurturing learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Registration Info */}
      <section 
        id="register"
        ref={registrationRef}
        className="min-h-screen w-full bg-[#F6F7F4] py-20 lg:py-0 lg:pt-[10vh]"
      >
        <div className="px-6 lg:px-[8vw]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              {/* Heading */}
              <div className="registration-heading mb-8">
                <span className="text-eyebrow text-[#6B6F5A] block mb-3">Registration</span>
                <h2 className="text-3xl lg:text-[clamp(32px,3.2vw,52px)] text-[#111111] mb-4">
                  Registration Information
                </h2>
                <p className="text-base lg:text-lg text-[#6B6F5A] leading-relaxed">
                  Dear Parents and Guardians, registration for Class 1 and Class 2 for the upcoming academic year is now open at Al-Aarif Islamic Institute. Classes will commence in September, and we are excited to offer a learning experience that combines religious and secular education.
                </p>
              </div>

              {/* Details List */}
              <div className="details-list space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-[#111111] mb-4">Registration Details:</h3>
                
                <div className="detail-item flex items-start gap-4 p-4 bg-white/50 rounded-lg">
                  <Calendar className="w-5 h-5 text-[#C9A45C] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#111111]">Start Date</p>
                    <p className="text-[#6B6F5A]">Registration begins <strong className="text-[#0B3A2C]">now</strong>.</p>
                  </div>
                </div>

                <div className="detail-item flex items-start gap-4 p-4 bg-white/50 rounded-lg">
                  <Calendar className="w-5 h-5 text-[#C9A45C] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#111111]">Class Commencement</p>
                    <p className="text-[#6B6F5A]">Classes will start on <strong className="text-[#0B3A2C]">March 2026</strong>.</p>
                  </div>
                </div>

                <div className="detail-item flex items-start gap-4 p-4 bg-white/50 rounded-lg">
                  <Building className="w-5 h-5 text-[#C9A45C] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-[#111111]">Venue</p>
                    <p className="text-[#6B6F5A]">Classes will be held at <strong className="text-[#0B3A2C]">Darul Arqum, 4269 Limebank Rd, Ottawa, ON K1V 1G5</strong></p>
                  </div>
                </div>
              </div>

              {/* Required Documents */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#111111] mb-4">Required Documents:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Birth Certificate (photocopy)',
                    'Immunization Records',
                    'Proof of Residence (utility bill, lease agreement, etc.)',
                    'Previous School Records (if applicable)'
                  ].map((doc, index) => (
                    <div key={index} className="detail-item flex items-center gap-3 p-3 bg-white/50 rounded-lg">
                      <FileText className="w-4 h-4 text-[#C9A45C] flex-shrink-0" />
                      <span className="text-sm text-[#6B6F5A]">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="btn-gold-filled"
                >
                  Register Now
                </button>
                <a 
                  href="/Pledge%20Form%20v3%20Combined%20with%20Introduction.pdf"
                  download
                  className="btn-gold"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Checklist (PDF)
                </a>
              </div>
            </div>

            {/* Right Image Card */}
            <div className="lg:w-[34vw] flex-shrink-0">
              <div className="registration-card sticky top-[12vh] relative">
                {/* Crescent outline behind */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#C9A45C]/30 rounded-[50%_50%_12px_12px/28%_28%_12px_12px]" />
                
                <div className="relative rounded-[50%_50%_12px_12px/28%_28%_12px_12px] overflow-hidden aspect-[4/5]">
                  <img 
                    src="/classroom.jpg" 
                    alt="Classroom"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Contact */}
      <section 
        id="contact"
        ref={contactRef}
        className="min-h-[80vh] w-full bg-[#F6F7F4] py-20"
      >
        <div className="px-6 lg:px-[6vw]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:w-[40vw] flex-shrink-0 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A45C]/30 rounded-lg" />
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <img 
                  src="/students_group.jpg" 
                  alt="Students in classroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="contact-content flex-1 max-w-xl">
              <span className="text-eyebrow text-[#6B6F5A] block mb-3">Contact</span>
              <h2 className="text-3xl lg:text-[clamp(32px,3.2vw,52px)] text-[#111111] mb-4">
                Have questions?
              </h2>
              <p className="text-base lg:text-lg text-[#6B6F5A] leading-relaxed mb-8">
                We're here to help. Reach out for enrollment support, campus visits, or general inquiries.
              </p>

              {/* Contact Items */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg">
                  <Mail className="w-5 h-5 text-[#C9A45C] flex-shrink-0" />
                  <span className="text-[#111111]">alaarifislamicins@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg">
                  <Phone className="w-5 h-5 text-[#C9A45C] flex-shrink-0" />
                  <span className="text-[#111111]">+1 (613) 662-7043</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#C9A45C] flex-shrink-0" />
                  <span className="text-[#6B6F5A]">4269 Limebank Rd, Ottawa, ON K1V 1G5</span>
                </div>
              </div>

              {/* CTA */}
              <button 
                onClick={openGmailDraft}
                className="btn-gold"
              >
                <Send className="w-4 h-4 mr-2" />
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Footer */}
      <footer className="w-full bg-[#0B3A2C] py-12">
        <div className="px-6 lg:px-[8vw]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Logo & Copyright */}
            <div className="text-center lg:text-left">
              <div className="text-2xl text-[#C9A45C] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Al-Aarif
              </div>
              <p className="text-sm text-[#F6F7F4]/60">
                © Al-Aarif Islamic Institute
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 text-[#C9A45C] hover:text-[#F6F7F4] transition-colors"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm">Home</span>
              </button>
              <button 
                onClick={scrollToDonate}
                className="flex items-center gap-2 text-[#C9A45C] hover:text-[#F6F7F4] transition-colors"
              >
                <Heart className="w-4 h-4" />
                <span className="text-sm">Donate</span>
              </button>
              <button 
                onClick={openGmailDraft}
                className="flex items-center gap-2 text-[#C9A45C] hover:text-[#F6F7F4] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">Contact Us</span>
              </button>
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm text-[#F6F7F4]/60">
              <span className="text-[#C9A45C]/80">Charity #: 81184 5189 RR0001</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <RegistrationModal 
        isOpen={isRegisterModalOpen} 
        onClose={() => setIsRegisterModalOpen(false)} 
      />
      <EmailSignupModal 
        isOpen={isEmailSignupOpen} 
        onClose={() => setIsEmailSignupOpen(false)} 
      />
    </div>
  );
}

export default App;
