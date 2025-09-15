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

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import Header from './components/Header';
import Hero from './components/Hero';
import Explore from './components/Explore';
import Contact from './components/Contact';

const App = () => {
  /**
   * Reveals
   */
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      });
    });
  });

  /**
   * Navigation bubble auto-movement
   */
  useGSAP(() => {
    const sections = gsap.utils.toArray('main > section');
    const navLinks = gsap.utils.toArray('.nav-link');

    const setActiveLink = (sectionId) => {
      navLinks.forEach((link) => link.classList.remove('active'));
      const activeLink = navLinks.find(
        (link) => link.getAttribute('href') === `#${sectionId}`
      );

      if (activeLink) {
        activeLink.classList.add('active');
        gsap.to('.active-box', {
          top: activeLink.offsetTop,
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          height: activeLink.offsetHeight,
          duration: 0.2,
          ease: 'power2.inOut',
        });
      }
    };

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveLink(section.id),
        onEnterBack: () => setActiveLink(section.id),
      });
    });
  }, []);

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <Explore />
        <Contact />
      </main>
    </ReactLenis>
  );
};

export default App;
