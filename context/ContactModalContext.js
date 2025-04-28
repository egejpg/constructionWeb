"use client";
import { createContext, useContext, useState } from 'react';

const ContactModalContext = createContext();

export function ContactModalProvider({ children }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <ContactModalContext.Provider value={{ isContactModalOpen, setIsContactModalOpen, handleContactClick }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export const useContactModal = () => useContext(ContactModalContext);
