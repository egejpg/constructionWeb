"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const router = useRouter();

  const menuItems = ['Ana Sayfa', 'Hakkımızda', 'Projeler', 'Hizmetler', 'İletişim'];

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center"
            >
              <span 
                onClick={() => router.push('/')}
                className="text-2xl font-bold text-cyan-900 cursor-pointer hover:opacity-80 transition-opacity"
              >
                Beykonak
              </span>
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={item === 'Ana Sayfa' ? '/' : 
                         item === 'Projeler' ? '/projeler' : 
                         `#${item.toLowerCase()}`}
                    onClick={(e) => {
                      if (item === 'İletişim') {
                        e.preventDefault();
                        handleContactClick();
                      }
                    }}
                    className="text-gray-700 hover:text-cyan-900 transition-colors font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <motion.div
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  className="w-6 h-5 flex flex-col justify-between"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 9 },
                    }}
                    className="w-full h-0.5 bg-gray-600 block rounded-full"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    className="w-full h-0.5 bg-gray-600 block rounded-full"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -9 },
                    }}
                    className="w-full h-0.5 bg-gray-600 block rounded-full"
                  />
                </motion.div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-3 space-y-3 border-t border-gray-200">
                  {menuItems.map((item) => (
                    <motion.a
                      key={item}
                      href={item === 'Ana Sayfa' ? '/' : 
                          item === 'Projeler' ? '/projeler' : 
                          item === 'İletişim' ? '#' : 
                          `#${item.toLowerCase()}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy-800 rounded-lg transition-colors"
                      onClick={(e) => {
                        if (item === 'İletişim') {
                          e.preventDefault();
                          handleContactClick();
                        }
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section - Güncellendi */}
      <header className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="/construction-bg.jpg"
            alt="Modern construction site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 drop-shadow-lg"
          >
            <span className="text-cyan-900 drop-shadow-md">Beykonak</span> İnşaat
          </motion.h1>
          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/projeler')}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-900 to-cyan-800 text-white px-10 py-4 rounded-xl text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Projelerimizi Keşfedin
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-white text-cyan-900 px-10 py-4 rounded-xl text-lg border-2 border-cyan-900/20 hover:border-cyan-900 shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={handleContactClick}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                İletişime Geç
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l4-4m0 0l4 4m-4-4v12" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-cyan-50 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section id="hizmetler" className="py-20 px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
          >
            Hizmetlerimiz
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-lg md:max-w-none mx-auto">
            {[
              'Konut Projeleri', 
              'Ticari Yapılar', 
              'Mimari Tasarım',
              'Vinç Kiralama'
            ].map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="bg-white p-4 md:p-6 rounded-xl shadow-sm transition-all duration-300"
              >
                <motion.h3 
                  className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.3 }}
                >
                  {service}
                </motion.h3>
                <motion.p 
                  className="text-sm md:text-base text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  Profesyonel ekibimizle en kaliteli hizmeti sunuyoruz.
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="hakkımızda" className="py-20 px-4 md:px-8 bg-gray-50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                Yenilikçi <span className="text-cyan-900">Vizyonumuz</span>
              </h2>
              <div className="space-y-3 md:space-y-4 text-sm sm:text-base text-gray-600">
                <p>
                  2015 yılında kurulan Beykonak İnşaat, modern mimari ve sürdürülebilir yapı teknolojilerini harmanlayan yenilikçi bir inşaat şirketidir.
                </p>
                <p>
                  Kısa sürede sektörde önemli bir konuma gelen şirketimiz, her projede çevreye duyarlı, enerji verimli ve akıllı bina sistemlerini entegre ederek, yaşam alanlarının geleceğini şekillendirmektedir.
                </p>
                <p>
                  Genç ve dinamik ekibimizle, teknolojik gelişmeleri yakından takip ederek, müşterilerimize en yüksek kalitede hizmet sunmaya devam ediyoruz.
                </p>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl md:text-4xl text-cyan-900">8+</span>
                  <span className="text-sm md:text-base text-gray-600">Yıllık<br/>Deneyim</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl md:text-4xl text-cyan-900">75+</span>
                  <span className="text-sm md:text-base text-gray-600">Tamamlanan<br/>Proje</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-xl overflow-hidden order-1 lg:order-2"
            >
              <Image
                src="/modern-construction.jpg"
                alt="Modern construction site"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {[
              { number: 75, text: 'Tamamlanan Proje', icon: '🏗️' },
              { number: 45, text: 'Uzman Kadro', icon: '👥' },
              { number: 8, text: 'Devam Eden Proje', icon: '🏢' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 30px rgba(0,0,0,0.2)"
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-sm p-6 rounded-xl cursor-pointer"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.2
                  }}
                  className="text-5xl mb-3"
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-4xl font-bold mb-2 text-gray-900"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {stat.number}+
                  </motion.span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="text-gray-800 text-lg font-medium"
                >
                  {stat.text}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Form eklendi */}
      <section className="bg-gray-50 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center drop-shadow-md"
          >
            Bizimle İletişime Geçin
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors placeholder:text-gray-500"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors placeholder:text-gray-500"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors placeholder:text-gray-500"
                  placeholder="(5XX) XXX XX XX"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none placeholder:text-gray-500"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-cyan-900 to-cyan-800 text-white py-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Gönder
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-xl"
            >
              <div className="bg-white rounded-xl shadow-2xl p-6 m-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">İletişime Geç</h2>
                  <button
                    onClick={() => setIsContactModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors placeholder:text-gray-500"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors placeholder:text-gray-500"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors placeholder:text-gray-500"
                      placeholder="(5XX) XXX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none placeholder:text-gray-500"
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-900 to-cyan-800 text-white py-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    Gönder
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Beykonak İnşaat</h3>
              <p className="text-gray-400">Yenilikçi ve sürdürülebilir yapıların adresi</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <address className="text-gray-400 not-italic">
                <p>Merkez Ofis:</p>
                <p>İstanbul, Türkiye</p>
                <p>Tel: +90 (555) 123 45 67</p>
              </address>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projeler</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Sosyal Medya</h4>
              <div className="flex space-x-4">
                {['LinkedIn', 'Instagram', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Beykonak İnşaat. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
