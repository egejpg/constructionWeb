"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useContactModal } from "@/context/ContactModalContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/schema";
import { useState } from "react";

export default function ContactModal() {
  const { isContactModalOpen, setIsContactModalOpen } = useContactModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Gönderim başarısız');

      setSubmitStatus('success');
      reset();
      setTimeout(() => {
        setIsContactModalOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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

              {submitStatus === 'success' ? (
                <div className="text-green-600 text-center py-8">
                  <p className="text-xl font-semibold">Mesajınız başarıyla gönderildi!</p>
                  <p className="mt-2">En kısa sürede size dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input type="text" name="website" style={{ display: "none" }} tabIndex="-1" autoComplete="off" {...register("website")}/>

                      <label className="block text-gray-700 font-medium mb-2">Ad Soyad</label>
                      <input
                        {...register('name')}
                        className={`w-full px-4 py-3 rounded-lg border text-gray-900 ${errors.name ? 'border-red-500' : 'border-gray-300'
                          } focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">E-posta</label>
                      <input
                        {...register('email')}
                        className={`w-full px-4 py-3 rounded-lg border text-gray-900 ${errors.email ? 'border-red-500' : 'border-gray-300'
                          } focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Telefon</label>
                    <input
                      {...register('phone')}
                      className={`w-full px-4 py-3 rounded-lg border text-gray-900 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                        } focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Mesajınız</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border text-gray-900 ${errors.message ? 'border-red-500' : 'border-gray-300'
                        } focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-cyan-900 to-cyan-800 text-white py-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                  </motion.button>
                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-center mt-2">
                      Bir hata oluştu. Lütfen tekrar deneyin.
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
