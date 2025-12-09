import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Star, Instagram, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import "./index.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Data produk (tanpa logika pesanan)
  const products = [
    {
      id: 1,
      name: 'Shadow Puff Roll',
      description: 'Lumpia dengan isi ubi ungu yang manis dan keju yang cheesy',
      price: 'Rp 10.000',
      image: 'https://placehold.co/300x200/8B5CF6/FFFFFF?text=Shadow+Puff+Roll',
      category: 'single'
    },
    {
      id: 2,
      name: 'Mystic Mana Bowl',
      description: 'Dessert bowl ubi ungu dengan paduan vla vanilla dan keju yang manis dan lembut',
      price: 'Rp 8.000',
      image: 'https://placehold.co/300x200/A78BFA/FFFFFF?text=Mystic+Mana+Bowl',
      category: 'single'
    },
    {
      id: 3,
      name: 'Potion of Elixir',
      description: 'Minuman rasa Taro dengan es batu yang menyegarkan',
      price: 'Rp 8.000',
      image: 'https://placehold.co/300x200/C084FC/FFFFFF?text=Potion+of+Elixir',
      category: 'single'
    },
    {
      id: 4,
      name: 'Shadow Feasts Pack',
      description: 'Lumpia ubi ungu + Dessert Bowl ubi ungu',
      price: 'Rp 18.000',
      image: 'https://placehold.co/300x200/D8B4FE/FFFFFF?text=Shadow+Feasts+Pack',
      category: 'combo'
    },
    {
      id: 5,
      name: 'Crunch & Chill Set',
      description: 'Lumpia ubi ungu + Minuman es taro',
      price: 'Rp 18.000',
      image: 'https://placehold.co/300x200/E9D5FF/FFFFFF?text=Crunch+%26+Chill',
      category: 'combo'
    },
    {
      id: 6,
      name: 'Winter Purple Pack',
      description: 'Dessert bowl ubi ungu + Minuman es taro',
      price: 'Rp 16.000',
      image: 'https://placehold.co/300x200/F3E8FF/FFFFFF?text=Winter+Purple+Pack',
      category: 'combo'
    },
    {
      id: 7,
      name: 'Purple Paradise Pack',
      description: 'Lumpia ubi ungu + Dessert Bowl ubi ungu + Minuman es taro',
      price: 'Rp 23.000',
      image: 'https://placehold.co/300x200/EDE9FE/FFFFFF?text=Purple+Paradise',
      category: 'combo'
    }
  ];

  const teamMembers = [
    { name: 'Fadlila Zahra Achdalina', role: 'CEO', image: 'https://placehold.co/200x200/9333EA/FFFFFF?text=FZA' },
    { name: 'Decka Hardiana', role: 'CMO', image: 'https://placehold.co/200x200/7E22CE/FFFFFF?text=DH' },
    { name: 'Chelsa Alya Salvasta', role: 'COO', image: 'https://placehold.co/200x200/8B5CF6/FFFFFF?text=CAS' },
    { name: 'Nurfitria Dynda Camelia', role: 'CDO', image: 'https://placehold.co/200x200/A78BFA/FFFFFF?text=NDC' },
    { name: 'Hanum Febriyani', role: 'CFO', image: 'https://placehold.co/200x200/C084FC/FFFFFF?text=HF' },
    { name: 'Aldy Astira', role: 'CPO', image: 'https://placehold.co/200x200/D8B4FE/FFFFFF?text=AA' },
    { name: 'Rangga Pratama Wiradinata', role: 'CTO', image: 'https://placehold.co/200x200/E9D5FF/FFFFFF?text=RPW' }
  ];

  // Animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const PageTransition = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );

  // --- Komponen Navigation ---
  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-sm' : 'bg-white/90 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img
              src={require('src/Assets/Images/png.jpg')}>
              alt="KawaiiBit Logo"
              className="w-10 h-10 rounded-full shadow-md object-cover"
            />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              KawaiiBit
            </span>
          </motion.div>

          <div className="hidden md:flex space-x-6">
            {['home', 'menu', 'about', 'contact'].map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePage(page)}
                className={`capitalize font-semibold text-sm md:text-base ${
                  activePage === page 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {page}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-purple-600" /> : <Menu size={24} className="text-purple-600" />}
          </motion.button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-purple-100 shadow-lg"
        >
          <div className="px-4 py-3 space-y-2">
            {['home', 'menu', 'about', 'contact'].map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setActivePage(page);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left capitalize font-medium py-3 text-base ${
                  activePage === page 
                    ? 'text-purple-600 bg-purple-50 rounded-lg px-3' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {page}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );

  // --- Halaman Home ---
  const HomePage = () => (
    <PageTransition>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-24 h-24 bg-purple-300 rounded-full opacity-15 animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h1 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent block">
              Sweet Purple
            </span>
            <span className="text-gray-800 block mt-2">Delights</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Handcrafted taro and purple sweet potato treats that bring joy to every bite
          </motion.p>
          
          <motion.button
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setActivePage('menu')}
          >
            Explore Our Menu
          </motion.button>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mx-auto"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Signature Creations</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each bite is a perfect blend of traditional flavors and modern creativity
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
          >
            {products.slice(0, 4).map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 rounded-xl overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                  {product.category === 'combo' && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Combo
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="text-purple-600 font-bold text-lg">{product.price}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quality ingredients, crafted with love
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '✨', title: 'Premium Ingredients', desc: 'Fresh purple sweet potatoes and taro sourced daily' },
              { icon: '👩‍🍳', title: 'Handcrafted', desc: 'Each item made with care and attention to detail' },
              { icon: '🚚', title: 'Fast Delivery', desc: 'Fresh delivery in Telkom area' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );

  // --- Halaman Menu ---
  const MenuPage = () => (
    <PageTransition>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mx-auto"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Menu</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our handcrafted selection of purple sweet potato and taro delights
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0 relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-28 h-28 rounded-xl object-cover shadow-sm"
                    />
                    {product.category === 'combo' && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Combo
                      </div>
                    )}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="font-bold text-purple-600 text-xl">{product.price}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Action ke Google Form */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="https://forms.gle/nniL1RQbP6HjmFTBA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Order Now via Google Form
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );

  // --- Halaman About ---
  const AboutPage = () => (
    <PageTransition>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mx-auto"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Story</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passion for purple sweet potatoes and taro 
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">From Farm to Table</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                At KawaiiBit, we believe in the magic of purple sweet potatoes and taro. 
                Our journey began with a simple love for these vibrant ingredients and 
                their incredible health benefits.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Every recipe is crafted with care, using only the freshest ingredients 
                sourced from local farms. We combine traditional techniques with 
                modern creativity to bring you unique treats that delight the senses.
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-purple-600 font-semibold">
                <Star size={24} />
                <span className="text-lg">Loved by over 100 customers</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-200 to-purple-400 rounded-2xl w-full h-80 shadow-md"></div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-purple-100">
                <img 
                  src="https://placehold.co/200x150/8B5CF6/FFFFFF?text=Fresh" 
                  alt="Fresh Ingredients"
                  className="rounded-lg w-full h-24 object-cover"
                />
                <p className="text-center text-xs text-gray-600 mt-1">Freshly sourced daily</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Meet Our Magical Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="relative mb-3">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 rounded-full mx-auto shadow-sm"
                    />
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                      <Star size={10} className="text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-sm text-gray-800">{member.name}</h3>
                  <p className="text-purple-600 text-xs font-medium">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );

  // --- Halaman Contact ---
  const ContactPage = () => (
    <PageTransition>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full mx-auto"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get in Touch</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We'd love to hear from you! Visit us or reach out with any questions.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div>
              <div className="space-y-5 mb-8">
                {[
                  { icon: <Phone size={22} />, title: 'Phone', value: '(+62) 851-8350-7875' },
                  { icon: <Mail size={22} />, title: 'Email', value: 'kawaiibit910@gmail.com' },
                  { icon: <Instagram size={22} />, title: 'Instagram', value: '@kawaiibit.official' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 6 }}
                    className="flex items-start space-x-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="bg-purple-100 p-3 rounded-full">
                      <span className="text-purple-600">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
          
            </div>
            
            <div>
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  ></textarea>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage />;
      case 'menu': return <MenuPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Navigation />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      
      <footer className="bg-gradient-to-r from-purple-100 to-purple-50 border-t border-purple-200 py-10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src={require('src/Assets/Images/png.jpg')} 
                  alt="KawaiiBit Logo"
                    className="w-10 h-10 rounded-full shadow-md object-cover"
                      />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                KawaiiBit
              </span>
            </div>
            <div className="text-gray-600 text-sm">
              © 2025 KawaiiBit. All rights reserved.
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500 text-sm">
            Crafting magical purple treats with love in Telkom
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
