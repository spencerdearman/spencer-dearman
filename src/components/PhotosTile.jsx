import React from 'react';
import PropTypes from 'prop-types';

// --- SVG Icon Components for the Menu Bar ---

const GridIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const PawPrintIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="4" r="2"></circle>
    <circle cx="18" cy="8" r="2"></circle>
    <circle cx="20" cy="16" r="2"></circle>
    <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-7 0V15a5 5 0 0 1 5-5z"></path>
    <path d="M6 14.25V16a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-1.75"></path>
  </svg>
);

// --- Helper Component for a Single Menu Button ---

const PhotoMenuButton = ({ icon, isActive }) => {
  return (
    <button
      className={`p-3 rounded-full transition-colors duration-300 focus:outline-none ${
        isActive
          ? 'bg-white text-black'
          : 'bg-transparent text-white hover:bg-white/20'
      }`}
    >
      {icon}
    </button>
  );
};

PhotoMenuButton.propTypes = {
  icon: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
};

// --- The Main Photos Tile Component ---

const PhotosTile = () => {
  // Define the items for the menu bar
  const menuItems = [
    { icon: <GridIcon />, isActive: true },
    { icon: <MapPinIcon /> },
    { icon: <HeartIcon /> },
    { icon: <PawPrintIcon /> },
  ];

  return (
    // The main container needs 'group' for hover effects on children
    <div className="group w-full h-full relative overflow-hidden rounded-3xl">
      {/* Background Image: Scales up on hover */}
      <img
        src="https://images.unsplash.com/photo-1615751072497-5f5169225a1f?q=80&w=2000&auto=format&fit=crop"
        alt="Person walking a dog on a path to the beach"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      {/* Optional: A subtle dark overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* App Icon in top right corner */}
      <div className="absolute top-4 right-4 w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-md">
        <img
          src="/images/photos.svg"
          alt="Photos App Icon"
          className="w-12 h-12"
        />
      </div>

      {/* Hover Menu Bar */}
      <div
        className="
          absolute bottom-4 left-1/2 -translate-x-1/2 /* Center the bar */
          flex items-center gap-2
          bg-black/20 backdrop-blur-md /* blurred glass effect */
          p-2 rounded-full
          opacity-0 translate-y-4 /* Start hidden and slightly down */
          group-hover:opacity-100 group-hover:translate-y-0 /* Appear on hover */
          transition-all duration-300 ease-in-out
        "
      >
        {menuItems.map((item, index) => (
          <PhotoMenuButton
            key={index}
            icon={item.icon}
            isActive={item.isActive}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotosTile;
