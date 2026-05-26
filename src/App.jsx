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
import Inlaid from './components/inlaid/Inlaid';
import Privacy from './components/inlaid/Privacy';
import Swatch from './components/swatch/Swatch';
import SwatchPrivacy from './components/swatch/Privacy';
import Bubbles from './components/bubbles/Bubbles';
import ContextOS from './components/contextos/ContextOS';
import ContextOSPrivacy from './components/contextos/Privacy';

import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <ReactLenis root>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inlaid" element={<Inlaid />} />
          <Route path="/inlaid/privacy" element={<Privacy />} />
          <Route path="/swatch" element={<Swatch />} />
          <Route path="/swatch/privacy" element={<SwatchPrivacy />} />
          <Route path="/bubbles" element={<Bubbles />} />
          <Route path="/contextos" element={<ContextOS />} />
          <Route path="/contextos/privacy" element={<ContextOSPrivacy />} />
        </Routes>
      </Router>
    </ReactLenis>
  );
};

export default App;
