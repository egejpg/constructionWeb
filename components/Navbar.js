"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useContactModal } from '@/context/ContactModalContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { handleContactClick } = useContactModal();
  const router = useRouter();

  const menuItems = ['Ana Sayfa', 'Hakkımızda', 'Projeler', 'Hizmetler', 'İletişim'];

  return (
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
                               item === 'İletişim' ? '#' :
                               `/${item.toLowerCase()}`}
                          onClick={(e) => {
                            if (item === 'İletişim') {
                              e.preventDefault();
                              handleContactClick();
                            } else if (item !== 'Ana Sayfa' && item !== 'Projeler') {
                              e.preventDefault();
                              router.push(`/#${item.toLowerCase()}`);
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
                                `/#${item.toLowerCase()}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-navy-800 rounded-lg transition-colors"
                            onClick={(e) => {
                              if (item === 'İletişim') {
                                e.preventDefault();
                                handleContactClick();
                              } else if (item !== 'Ana Sayfa' && item !== 'Projeler') {
                                e.preventDefault();
                                router.push(`/#${item.toLowerCase()}`);
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
  );
}
