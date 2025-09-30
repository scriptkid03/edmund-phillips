"use client";

import { motion } from "framer-motion";
// import PageTransition from "@/components/PageTransition";

export default function ResumePage() {
  return (
    // <PageTransition>
    <section className='max-w-3xl mx-auto px-6 py-16'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        className='text-4xl font-bold mb-6'
      >
        Resume
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
        }}
        className='space-y-8'
      >
        {/* Example Resume Sections */}
        <div>
          <h2 className='text-xl font-semibold'>Experience</h2>
          <ul className='mt-2 space-y-4'>
            <li>
              <p className='font-medium'>Mobile Developer – Prime-Flow CMS</p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Built the React Native mobile app with Auth0 integration,
                dark/light mode, and Expo Router v5.
              </p>
            </li>
            <li>
              <p className='font-medium'>Frontend Developer – Freelance</p>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Developed responsive web apps with Next.js, TailwindCSS, and
                MongoDB.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className='text-xl font-semibold'>Education</h2>
          <p className='mt-2'>
            BSc. Computer Science – Academic City University College
          </p>
        </div>
      </motion.div>
    </section>
    // </PageTransition>
  );
}
