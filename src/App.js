import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="text-center py-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold"
        >
          Growth Engineer Pro
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600">
          Engineering Revenue Growth for Modern SaaS Companies
        </p>
      </header>
    </div>
  );
}

export default App;
