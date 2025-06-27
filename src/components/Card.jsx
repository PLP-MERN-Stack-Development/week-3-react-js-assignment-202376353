import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout.
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to be displayed inside the card
 * @param {string} props.className - Additional classes for customization
 * @returns {JSX.Element} - Card component
 */
const Card = ({ children, className = '' }) => {
  const cardClasses = `bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden ${className}`;

  return (
    <div className={cardClasses}>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card; 