import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Phone, Mail, Globe, MapPin, 
  Target, Eye, Award, Lightbulb, Shield, 
  CheckCircle, Users, Headphones, BadgeCheck,
  Facebook, Twitter, Instagram, Youtube, Linkedin,
  Flame, Radio, Video, Lock, Settings, Gauge
} from 'lucide-react';
import './App.css';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Projects', href: '#projects' },
    { name: 'Partners', href: '#partners' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SCI</span>
            </div>
            <span className={`font-bold text-lg hidden sm:block ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              S.C. INTERNATIONAL
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-sm"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// Hero Section
function Hero() {
  const diamondImages = [
    { src: '/images/asset_2.png', alt: 'Access Control' },
    { src: '/images/asset_3.png', alt: 'CCTV Systems' },
    { src: '/images/asset_4.png', alt: 'Fire Safety' },
    { src: '/images/asset_5.png', alt: 'Electrical Panels' },
    { src: '/images/asset_6.png', alt: 'Fire Alarm' },
    { src: '/images/asset_7.png', alt: 'PA System' },
  ];

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-screen flex flex-col justify-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
            <span className="text-white font-bold text-2xl">SCI</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4"
        >
          S.C. INTERNATIONAL
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white/90 text-center mb-8 tracking-wider"
        >
          AN ISO 9001 - 2015 CERTIFIED COMPANY
        </motion.p>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full px-6 py-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm">FSAI Member</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full px-6 py-3 flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm">MSME Registered</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full px-6 py-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm">ISO 45001:2018</span>
          </div>
        </motion.div>

        {/* 20 Years Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          className="flex justify-center mb-12"
        >
          <div className="relative animate-pulse-slow">
            <img 
              src="/images/asset_1.png" 
              alt="20 Years Experience" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <span className="text-xs font-bold">TRUST</span>
              <span className="text-2xl md:text-3xl font-bold">20</span>
              <span className="text-xs font-bold">YEARS</span>
              <span className="text-[10px]">EXPERIENCE</span>
            </div>
          </div>
        </motion.div>

        {/* Diamond Images Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {diamondImages.map((img, index) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="relative aspect-square animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-white rounded-2xl rotate-45 overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover -rotate-45 scale-[1.42]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Message Section
function Message() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title underline decoration-primary decoration-4 underline-offset-8">
            Message
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We take this opportunity in introducing ourselves as a leading approved service provider in the area of supply, 
              Installation, testing, commissioning and maintenance of electrical, CCTV, Access Control System, PA System, 
              FDA System, Instrumentation, Automation etc work.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              In order to give you some idea of the line in which we specially deal with, we enclose herewith a list of 
              <span className="text-primary font-semibold"> &quot;OUR PRODUCT & SOLUTIONS&quot;</span>.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We are registered service provider in numerous National undertakings, Steel Plant, Power Plant, Cement Plant, 
              Hospitals, Oxygen Plant, Chemical, Electrical Constructions companies and utility services. A list of our valued 
              <span className="text-primary font-semibold"> &apos;Business Partners&apos;</span> is mentioned for your reference.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We trust on being given the opportunity of some service to you, you will find our service 
              <span className="text-primary font-semibold"> &quot;Quality&quot;</span> and 
              <span className="text-primary font-semibold"> &quot;Standard&quot;</span> within the given time frame as compare to any other service provider. 
              We enclosed herewith a list of <span className="text-primary font-semibold">&apos;OUR MAJOR PROJECT&apos;</span>.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Further please find the enclosed herewith the following document for your reference and perusal:
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-right"
          >
            <p className="text-primary font-bold text-lg">Abhay Kumar</p>
            <p className="text-gray-600">Proprietor</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// About Us Section
function AboutUs() {
  const values = [
    { icon: Shield, title: 'Reliable', color: 'text-blue-500' },
    { icon: Award, title: 'Excellence', color: 'text-amber-500' },
    { icon: CheckCircle, title: 'Satisfaction', color: 'text-green-500' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Us:-
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto text-gray-700 leading-relaxed mb-12"
        >
          <p className="mb-4">
            Founded in 2004, by Late Birendra Kumar Sharma his vision is to provides Quality services to our customers, 
            today the Company boasts over <span className="text-primary font-semibold">20 years of experience</span> in ELV and has a truly presence, 
            directly and indirectly in supplying and servicing sector our customer base across <span className="text-primary font-semibold">50+ cities</span> spread over 
            the country in the area of Electrical, Electronics & Instrumentation, CCTV & PA system in many of the 
            project job as well as Annual maintenance Contract, we maintain exceptional standards of performance and services.
          </p>
          <p className="mb-4">
            We are <span className="text-primary font-semibold">Certified System Integrator</span> for Known Brands like 
            Honeywell, BOSCH, SIEMENS, SIMPLEX, SCHRACK, Hochiki, Apollo, EST, RAVEL etc. We Offer Turnkey Solutions for 
            Offices, Commercial Complexes, Industrial Units and Commercial Market Segments.
          </p>
          <p>
            Our Specialities Services are AMC of various types of Fire Alarm System, Gas Suppression Systems, 
            VESDA Systems, Fire Fighting Systems, Public Address System, CCTV surveillance system Rodent 
            Repellent Systems, Access control Systems. Our Specialised Engineer Team Provides 
            <span className="text-primary font-semibold"> 24 x 7</span> round the clock services to deliver our Client&apos;s a Complete Peace of Mind.
          </p>
        </motion.div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Target, title: 'Mission', text: 'Our mission is to provide premium quality products and services through the selected resources and commit to exceed expectations.' },
            { icon: Eye, title: 'Vision', text: "To become trusted and respected 'Improvement Partner' of our customers." },
            { icon: Award, title: 'Core Values', text: 'As an organisation it is truly important for us that what core value reflect. They do not change from time to time, situation to situation, or person to person, but rather they underpin our culture.' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}:-</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-primary mb-6">Our Core Values</h3>
          <div className="flex justify-center gap-8 md:gap-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 rotate-45 overflow-hidden">
                  <value.icon className={`w-10 h-10 ${value.color} -rotate-45`} />
                </div>
                <p className="font-semibold text-gray-700">{value.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Goal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
            <Lightbulb className="w-8 h-8 text-secondary" />
            <div className="text-left">
              <span className="text-secondary font-bold text-lg">GOAL</span>
              <p className="text-gray-600 text-sm">Our goal is to become one of the leading supplier and service providers in globally.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUs() {
  const reasons = [
    { 
      number: 1, 
      title: 'Professionalism', 
      icon: Shield,
      description: 'S. C. INTERNATIONAL comply with stringent Health and Safety regulations, which is essential both to our clients and the safety of our workforce.' 
    },
    { 
      number: 2, 
      title: 'Qualified and Certified team', 
      icon: BadgeCheck,
      description: 'Professional solution by our certified trained engineers and sales support guarantees all functional and technical aspect are addressed in accordance to the standard.' 
    },
    { 
      number: 3, 
      title: 'Experienced Team', 
      icon: Users,
      description: 'Our team is very experienced and can offer a wide range of ideas from contemporary to traditional, innovative. Their expertise ensures that each client can be confident about choice of materials and accessories.' 
    },
    { 
      number: 4, 
      title: 'Best Quality Services', 
      icon: Award,
      description: 'S. C. INTERNATIONAL is an ISO 9001: 2015 as well as ISO 45001: 2018 certify company, that committees to provide you best quality service with-in safety in their work.' 
    },
    { 
      number: 5, 
      title: 'Support', 
      icon: Headphones,
      description: 'S. C. INTERNATIONAL provides to our clients 24x7 support, to earn the respect (and eventually love) of your customers, you first have to respect those customers.' 
    },
    { 
      number: 6, 
      title: 'Warranty & Guaranty', 
      icon: CheckCircle,
      description: 'We work closely deal with trusted and reputed OEM. That they will provides standards warranty/guaranty.' 
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title underline decoration-primary decoration-4 underline-offset-8"
        >
          Why You Can Choose Us
        </motion.h2>

        <div className="relative">
          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 card-hover border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{reason.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                      <reason.icon className="w-5 h-5" />
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Products Section
function Products() {
  const products = [
    {
      title: 'Fire Alarm System',
      icon: Flame,
      image: '/images/asset_6.png',
      description: 'A fire alarm system warns people when smoke, or carbon monoxide, or other fire-related or general notification emergencies are detected. These alarms may be activated automatically from smoke detectors and heat detectors or may also be activated via manual or alarm activation devices such as manual call points or pull stations.',
    },
    {
      title: 'Fire Suppression System',
      icon: Shield,
      image: '/images/fire-suppression.png',
      description: 'Those responsible for managing and protecting high-value assets, processes, and facilities demand the quality fire suppression offered by the FM-200 Clean Agent Fire Suppression System. FM-200 systems are internationally accepted as providing reliable, effective, affordable fire protection solutions.',
    },
    {
      title: 'VESDA',
      icon: Gauge,
      image: '/images/vesda.png',
      description: 'VESDA aspirating smoke detection solutions with continuous air sampling provide the earliest possible warning of an impending fire hazard. VESDA aspirating smoke detectors buy the critical time needed to investigate an alarm and initiate an appropriate response to prevent injury, property damage or business disruption.',
    },
    {
      title: 'Public Address System',
      icon: Radio,
      image: '/images/pa-system.png',
      description: 'Public Address System increases the apparent volume of vocals, musical instruments, other sound sources, or recorded sounds or music. The sound enhancement system can be used in public places where announcers, performers, etc. and need to hear in a remote or large area.',
    },
    {
      title: 'CCTV Surveillance System',
      icon: Video,
      image: '/images/cctv-product.png',
      description: 'CCTV stands for closed-circuit television and is commonly known as video surveillance. CCTV networks are commonly used to detect and deter criminal activities, and record traffic infractions, but they have other uses. CCTV technology has given rise to the video surveillance industry.',
    },
    {
      title: 'Access Control System',
      icon: Lock,
      image: '/images/access-control.png',
      description: 'An Access Control system typically includes locked gates, doors or barriers which can be opened using identity authentication methods such RFID access cards, pin codes, face recognition, finger prints or smartphones to allow entry to a building or certain area.',
    },
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Our Product & Solutions:-
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          S. C. International not only supplies and serve in ELV sector but also designs automation control for 
          industries, we have been in this field for more than 20 Years catering to the need&apos;s customer to their entire satisfaction.
        </motion.p>

        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <product.icon className="w-6 h-6 text-white" />
                    <span className="text-white font-bold">{product.title}</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <product.icon className="w-5 h-5 text-primary" />
                  </span>
                  {index + 1}. {product.title}:-
                </h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      title: 'TATA Main Hospital',
      client: 'TATA Steel',
      description: 'Operation and Maintenance of Fire alarm detection system and fire Hydrant System in TATA Main Hospital, Jamshedpur. We are operating and maintaining the entire system of fire alarm system and fire hydrant system.',
    },
    {
      title: 'TATA Steel - Coke Plant',
      client: 'TATA Steel Limited',
      description: 'SITC Fire Alarm System, CCTV surveillance system, CO Monitoring system in Coke Plant canteen. Successfully completed electrical job through Siemens Limited.',
    },
    {
      title: 'TATA Steel - Mill Area',
      client: 'TATA Steel Limited',
      description: 'Maintenance of CCTV and Public Address system in entire mill area in Tata Steel Limited, Jamshedpur.',
    },
    {
      title: 'Medanta Hospital Patna',
      client: 'Medanta',
      description: 'SITC of Access control system in Medanta Superspecialist Hospital Patna. Scope Project through Siemens India.',
    },
    {
      title: 'NMDC Steel Plant',
      client: 'NMDC',
      description: 'SITCH of Fire Alarm System and CCTV surveillance System in Maa Danteshwari Blast Furnace, NMDC STEEL PLANT Nagarnar, Bastar, C.G.',
    },
    {
      title: 'SAIL Meghahataburu',
      client: 'SAIL',
      description: 'SITC of Laser level transmitter in SAIL Meghahataburu Plant. Job scope is SITC of Abb Make (formally known as K-Tek) Laser level Transmitter.',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Our Major Projects:-
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          We are taking many of the major projects in numerous National undertakings, Steel Plant, 
          Electrical Constructions companies and utility services.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 card-hover border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-primary font-medium">{project.client}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Partners Section
function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Channel Partners */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Our Channel Partner / Promoter:-
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
            <img
              src="/pdf_images/page_10.png"
              alt="Channel Partners Logos"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Business Partners */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Our Satisfied Business Partners:-
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 overflow-hidden">
            <img
              src="/pdf_images/page_11.png"
              alt="Satisfied Business Partners Logos"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Certifications & Memberships Section
function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Certifications & Memberships
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-gray-700 text-center mb-12 text-lg">
            SC International is proud to be:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* FSAI Membership */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-50 rounded-2xl p-8 shadow-lg card-hover border-2 border-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">FSAI Member</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A registered member of the <span className="font-semibold">Fire and Security Association of India (FSAI)</span>, 
                    actively contributing to industry safety standards and best practices.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* MSME Registration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-50 rounded-2xl p-8 shadow-lg card-hover border-2 border-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <BadgeCheck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">MSME Registered</h3>
                  <p className="text-gray-700 leading-relaxed">
                    An <span className="font-semibold">MSME (Udyam) Registered Enterprise</span> under the Ministry of Micro, 
                    Small & Medium Enterprises, Government of India.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 italic">
              These affiliations reflect our commitment to quality, compliance, and professional excellence in the fire and security industry.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 gradient-footer overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
            <span className="text-white font-bold text-2xl">SCI</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            S.C. INTERNATIONAL
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            S. C. INTERNATIONAL Has A Blazing Track Record That Inspires Confidence.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <p className="text-white/80">9263404056</p>
            <p className="text-white/80">9234603374</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-white/80 text-sm">scint_jsr@rediffmail.com</p>
            <p className="text-white/80 text-sm">info@scinternational.in</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Website</h3>
            <p className="text-white/80">www.scinternational.in</p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { icon: Facebook, href: '#' },
            { icon: Twitter, href: '#' },
            { icon: Instagram, href: '#' },
            { icon: Youtube, href: '#' },
            { icon: Linkedin, href: '#' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <social.icon className="w-5 h-5 text-white" />
            </a>
          ))}
        </motion.div>

        {/* Addresses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-white" />
              <h3 className="text-white font-bold text-lg">Corporate Address</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              8th Floor, Room A No 807, Astra Towers Barasat Sadar, New Town, 
              North 24 Parganas, Kolkata - 700161 West Bengal - India
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-white" />
              <h3 className="text-white font-bold text-lg">Registered Address</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              H. No.- 125/b, Rd. No.-04, Adarsh Colony, Post Office Rd Mango, 
              Jamshedpur, Jharkhand, Pin - 831012
            </p>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/20 text-center"
        >
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} S.C. INTERNATIONAL. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Message />
      <AboutUs />
      <WhyChooseUs />
      <Products />
      <Projects />
      <Partners />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
