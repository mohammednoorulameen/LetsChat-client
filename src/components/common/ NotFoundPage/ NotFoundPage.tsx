import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.h1
          className="text-8xl font-extrabold text-red-500 mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          404
        </motion.h1>

        <h2 className="text-3xl font-semibold mb-3">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-400 mb-6">
          The page you’re looking for doesn’t exist in LetsChat. Maybe you followed a broken link or mistyped the URL.
        </p>

        <Link
          to="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;

