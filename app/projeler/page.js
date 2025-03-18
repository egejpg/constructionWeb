"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12"
        >
          Projelerimiz
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-sm md:max-w-none mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-900 font-medium">
                    {project.location}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center pb-20"
        >
          <Link 
            href="/"
            className="inline-flex items-center text-cyan-900 hover:text-cyan-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
