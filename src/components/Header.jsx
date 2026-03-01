/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useState } from 'react';

/**
 * Components
 */
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="relative z-50">
      <div className="header-background !h-20"></div>
      <div className="header-content">
        <div className="max-w-screen-2xl w-full mx-auto flex justify-between items-center px-6 relative lg:grid lg:grid-cols-[1fr,auto,1fr]">
          <h1>
            <a href="/" className="logo">
              <img
                src="images/logo.svg"
                width={40}
                height={40}
                alt="Spencer Dearman"
              />
            </a>
          </h1>

          <div className="flex items-center gap-4">
            <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
            
            <button
              className="menu-btn md:hidden"
              onClick={() => setNavOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-rounded">
                {navOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
