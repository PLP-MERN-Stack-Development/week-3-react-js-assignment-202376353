import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../contexts/ThemeContext';

/**
 * Navbar component for site navigation.
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the website.
 * @returns {JSX.Element} - Navbar component
 */
const Navbar = ({ title }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">{title}</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              {/* Add more navigation links here */}
            </div>
          </div>
          <div className="ml-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                // Sun icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-15.66l-.707.707M4.34 19.66l-.707.707m15.66 0l-.707-.707M4.34 4.34l-.707-.707m16.363 7.323h-1M4 12H3m16.03-4.47l-1.061-1.061M6.53 18.47l-1.06-1.061m13.001-1.06l-1.06 1.06-1.06-1.06" />
                </svg>
              ) : (
                // Moon icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar; 