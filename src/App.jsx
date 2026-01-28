/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import Home from './components/Home';
import Inlaid from './components/Inlaid';
import Privacy from './components/Privacy';

const App = () => {
  return (
    <ReactLenis root>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inlaid" element={<Inlaid />} />
          <Route path="/inlaid/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </ReactLenis>
  );
};

export default App;
