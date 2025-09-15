/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import SkillIcon from './SkillIcon';
import Adrenaline from './Adrenaline';
import ArrowButton from './ArrowButton';
import PhotosTile from './PhotosTile';

const works = [
  {
    imgSrc: 'images/project-1.jpg',
    title: 'PintOS x86 OS',
    tags: ['Operating Systems', 'C', 'Low-Level', 'Protected'],
    projectLink:
      'https://web.stanford.edu/class/cs140/projects/pintos/pintos_1.html',
  },
  {
    imgSrc: 'images/project-2.jpg',
    title: 'Adrenaline iOS App',
    tags: ['Amazon Web Services', 'Swift', 'Apple Developer'],
    projectLink: 'https://github.com/spencerdearman/adrenaline-app',
  },
  {
    imgSrc: 'images/project-3.jpg',
    title: 'Internet Relay Chat',
    tags: ['Networks', 'C', 'Systems Design', 'Protected'],
    projectLink: 'https://chi.cs.uchicago.edu/chirc/intro.html',
  },
  {
    imgSrc: 'images/project-4.jpg',
    title: 'Mininet IPv4 Router',
    tags: ['Networks', 'C', 'Systems Design', 'Protected'],
    projectLink: 'https://chi.cs.uchicago.edu/chirouter/intro.html',
  },
  {
    imgSrc: 'images/project-5.jpg',
    title: 'Quantum Benchmarking',
    tags: ['Quantum Computing', 'Azure', 'Resource Estimation', 'k-SAT'],
    projectLink:
      'https://github.com/Infleqtion/client-superstaq/tree/f0108407c0440401bf452d92141cfbaa05e564e1/docs/source/apps/supermarq/examples/qre-challenge',
  },
  {
    imgSrc: 'images/project-6.jpg',
    title: 'Data Cleaning Pipeline',
    tags: ['Data Processing', 'Python', 'React', 'Flask'],
    projectLink: 'https://github.com/spencerdearman/data-cleaning-pipeline',
  },
];

const skillIcons = [
  {
    imgSrc: 'images/c.svg',
    label: 'C',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'images/swift.svg',
    label: 'Swift',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'images/python.svg',
    label: 'Python',
    desc: 'Programming Language',
  },
  {
    imgSrc: 'images/aws.svg',
    label: 'AWS',
    desc: 'Cloud Platform',
  },
  {
    imgSrc: 'images/gcp.svg',
    label: 'GCP',
    desc: 'Cloud Platform',
  },
  {
    imgSrc: 'images/react.svg',
    label: 'React',
    desc: 'Framework',
  },
  {
    imgSrc: 'images/git.svg',
    label: 'Git',
    desc: 'Version Control',
  },
  {
    imgSrc: 'images/widgetkit.png',
    label: 'WidgetKit',
    desc: 'Framework',
  },
  {
    imgSrc: 'images/app-intents.png',
    label: 'App Intents',
    desc: 'Framework',
  },
];

const Explore = () => {
  return (
    <section id="explore" className="section">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Tile 1: XL Tile 2x2 */}
          {/* Google Tile */}
          <div className="md:col-span-2 px-12 py-4 md:p-2">
            <div className={`tile-style aspect-[2/1]`}>
              <p className="about-content">
                Welcome! I&apos;m Spencer Dearman, a rising fourth-year student
                pursuing a joint BS/MS degree in Computer Science with a
                specialization in Computer Systems at the University of Chicago.
                I have a strong interest in low-level programming, operating
                systems, and the algorithms that make systems run efficiently.
                Currently, I&apos;m a Software Engineering Intern at Google in
                Mountain View.
              </p>
            </div>
          </div>

          {/* Tile 2: Standard Tile 1x1 */}
          <div className="px-12 py-4 md:p-2">
            <div className="tile-style aspect-square">
              {/* This is the new 3x3 grid for your app icons */}
              <div className="w-full h-full grid grid-cols-3 gap-6">
                {skillIcons.map((icon, key) => (
                  <SkillIcon
                    key={key}
                    imgSrc={icon.imgSrc}
                    label={icon.label}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Tile 3: Final Corrected Version */}
          <div className="md:row-span-2 px-12 py-4 md:p-2 group">
            <div className="tile-style aspect-[1/2] relative overflow-hidden">
              <div className="adrenaline-rotation">
                <Adrenaline />
              </div>
              <ArrowButton href="https://github.com/spencerdearman/adrenaline-app" />
            </div>
          </div>

          {/* Tile 6: Wide Tile 1x2 */}
          <div className="md:col-span-2 px-12 py-4 md:p-2">
            {/* Add the "relative" class here */}
            <div className="tile-style aspect-square md:aspect-[2/1] relative">
              <div className="w-1/6">
                <SkillIcon
                  imgSrc={'/images/google-home.svg'}
                  label={'Google Home'}
                />
              </div>
              {/* Add the ArrowButton component */}
              <ArrowButton href="https://home.google.com/welcome/" />
            </div>
          </div>

          {/* Tile 5: Standard Tile 1x1 */}
          <div className="px-12 py-4 md:p-2">
            <div className={`tile-style aspect-[2/2]`}>
              <p className="text-neutral-400">SM Tile 5 (1x1)</p>
            </div>
          </div>

          {/* Tile 4: Tall Tile 2x1 \\\ */}
          <div className="md:row-span-2 px-12 py-4 md:p-2">
            <div className={`tile-style aspect-[1/2]`}>
              <p className="text-neutral-400">SM Tile 4 (2x1)</p>
            </div>
          </div>

          {/* Tile 5: Standard Tile 1x1 */}
          <div className="md:md:col-span-2 px-12 py-4 md:p-2">
            <div className={`tile-style aspect-[2/1]`}>
              <p className="text-neutral-400">SM Tile 5 (1x1)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
