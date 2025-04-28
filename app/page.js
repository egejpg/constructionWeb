"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useContactModal } from '@/context/ContactModalContext';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleContactClick } = useContactModal();
  const router = useRouter();

  const menuItems = ['Ana Sayfa', 'Hakkımızda', 'Projeler', 'Hizmetler', 'İletişim'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
            className="text-3xl md:text-4xl font-bold text-gray-800 text-center mt-5 mb-12"
          >
            Hizmetlerimiz
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-lg md:max-w-none mx-auto">
            {[
              { 
                title: 'Konut Projeleri',
                desc: 'Modern ve konforlu yaşam alanları tasarlıyor, yüksek kalite standartlarında inşa ediyoruz.'
              },
              { 
                title: 'Ticari Yapılar',
                desc: 'İşlevsellik ve mimari estetiği bir araya getirerek işletmelere değer katan ticari yapılar tasarlıyoruz ve inşa ediyoruz.'
              },
              { 
                title: 'Mimari Tasarım',
                desc: 'Özgün ve sürdürülebilir tasarımlarla projelerinize değer katıyoruz.'
              },
              { 
                title: 'Vinç Kiralama',
                desc: 'Çeşitli kapasitelere sahip vinç seçeneklerimizle, ihtiyacınıza uygun pratik çözümler sunuyoruz.'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
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
                  {service.title}
                </motion.h3>
                <motion.p 
                  className="text-sm md:text-base text-gray-600"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                  {service.desc}
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
                Beykonak İnşaat ve Mimarlık, konut projelerinden endüstriyel yapılara kadar farklı ölçek ve ihtiyaçlara hitap eden, kapsamlı bir tasarım ve uygulama hizmeti sunmaktadır.
                </p>
                <p>
                Mimari tasarımı mühendislik bilgisiyle birleştirerek hem sağlam hem de kullanışlı yapılar ortaya koyuyoruz. Fabrika, şantiye gibi teknik yapılarda sahaya uygun çözümler sunarken, konut projelerinde ise rahat ve yaşanabilir alanlar tasarlamaya özen gösteriyoruz.

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
                  <span className="text-3xl md:text-4xl text-cyan-900">10+</span>
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

      {/* Footer */}
      
    </div>
  );
}
