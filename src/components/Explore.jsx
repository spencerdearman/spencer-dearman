/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import Adrenaline from './Adrenaline';
import Canopy from './Canopy';
import SkillIcon from './SkillIcon';
import SkillsTile from './SkillsTile';
import ArrowButton from './ArrowButton';
import PintosTile from './PintosTile';
import InfleqtionTile from './InfleqtionTile';
import { useState } from 'react';

const Explore = () => {
  const [focusedTile, setFocusedTile] = useState(null);

  return (
    <section id="explore" className="section">
      <div className="container mx-auto px-4 py-16">
        {/* The overlay */}
        <div
          className={`fixed inset-0 bg-gray-100/80 backdrop-blur-sm z-10 transition-opacity duration-500 ease-in-out ${
            focusedTile ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Tile 1: Introduction */}
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

          {/* Tile 2: Skills */}
          <div className="px-12 py-4 md:p-2">
            <div className="tile-style aspect-square">
              <SkillsTile />
            </div>
          </div>

          {/* Tile 3: Adrenaline App */}
          <div className="md:row-span-2 px-12 py-4 md:p-2 group">
            <div className="tile-style aspect-[1/2] relative overflow-hidden">
              <div className="adrenaline-rotation">
                <Adrenaline />
              </div>
              <ArrowButton href="https://github.com/spencerdearman/adrenaline-app" />
            </div>
          </div>

          {/* Tile 4: Google Home */}
          <div className="md:col-span-2 px-12 py-4 md:p-2">
            <div className="tile-style aspect-square md:aspect-[2/1] relative">
              <div className="w-1/6">
                <SkillIcon
                  imgSrc={'/images/google-home.svg'}
                  label={'Google Home'}
                />
              </div>
              <ArrowButton href="https://home.google.com/welcome/" />
            </div>
          </div>

          {/* Tile 5: Infleqtion */}
          <div className="px-12 py-4 md:p-2 relative">
            <div
              className={`tile-style aspect-square md:aspect-square relative group z-10`}
            >
              <InfleqtionTile />
              <div
                onMouseEnter={() => setFocusedTile('infleqtion')}
                onMouseLeave={() => setFocusedTile(null)}
              >
                <ArrowButton href="https://github.com/Infleqtion/client-superstaq/tree/f0108407c0440401bf452d92141cfbaa05e564e1/docs/source/apps/supermarq/examples/qre-challenge" />
              </div>
            </div>
            {/* 2. THE TEXT IS HERE: Positioned absolutely so it does NOT affect the grid layout. */}
            <div
              className={`absolute -bottom-[40px] left-0 right-0 pt-2 text-center transition-opacity duration-300 ease-in-out ${
                focusedTile === 'infleqtion'
                  ? 'opacity-100 z-10'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="font-semibold text-gray-800">
                Quantum Benchmarking
              </p>
              <p className="text-sm text-gray-500">A project with Infleqtion</p>
            </div>
          </div>

          {/* Tile 6: Tall Tile 2x1 \\\ */}
          <div className="md:row-span-2 px-12 py-4 md:p-2 group">
            <div className="tile-style aspect-[1/2] relative overflow-hidden">
              <div className="canopy-rotation">
                <Canopy />
              </div>
              <ArrowButton href="https://www.figma.com/design/BQJLTXgtZy8YpgePxvmOx9/Assignment-5---Spencer-Dearman?node-id=85-5224&t=F5kGEKt38UUZNvFL-1" />
            </div>
          </div>

          {/* Tile 7: PintOS */}
          <div className="md:col-span-2 px-12 py-4 md:p-2 group">
            <div
              className={`aspect-square tile-style md:aspect-[2/1] relative overflow-hidden`}
            >
              <PintosTile />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
