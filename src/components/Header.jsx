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
    <header>
      <div class="header-background"></div>
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

          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> */}
          <div
            className="
            /* --- Mobile styles (default) --- */
            fixed bottom-4 left-1/2 -translate-x-1/2
            flex justify-center p-2
            
            /* --- Desktop styles (lg breakpoint and up) --- */
            md:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2
            md:w-auto lg:bg-transparent lg:backdrop-blur-none lg:shadow-none lg:p-0
            md:bottom-auto lg:rounded-none"
          >
            <Navbar navOpen={navOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
