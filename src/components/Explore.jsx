/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import Adrenaline from './Adrenaline';
import InlaidTile from './InlaidTile';
import SkillsTile from './SkillsTile';
import ArrowButton from './ArrowButton';
import PintosTile from './PintosTile';
import InfleqtionTile from './InfleqtionTile';
import { useState, useEffect } from 'react';

const Explore = () => {
  const [focusedTile, setFocusedTile] = useState(null);
  const [camLightOn, setCamLightOn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCamLightOn((prev) => !prev);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="explore" className="section">
      <div className="container mx-auto px-4 py-16">
        <div
          onClick={() => setFocusedTile(null)}
          className={`fixed inset-0 bg-gray-100/80 backdrop-blur-sm z-10 transition-opacity duration-500 ease-in-out ${
            focusedTile ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Tile 1: Google Home */}
          <div className="md:col-span-2 px-4 sm:px-12 py-4 md:p-2 relative group">
            <div
              className={`tile-style aspect-square md:aspect-[2/1] relative overflow-hidden ${
                focusedTile === 'google-home' ? 'z-30' : ''
              }`}
            >
              <div className="absolute hidden md:block top-6 left-6 w-16 md:w-16 xl:w-20 z-20">
                <div className="app-icon group relative">
                  <img
                    src={'/images/explore/google-home.png'}
                    alt={'/images/explore/google-home.png'}
                    className="w-full h-auto p-1"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-start pt-12 md:justify-center md:pt-0 h-full md:pl-6 md:pr-72 items-center md:items-start text-center md:text-left relative z-20 pointer-events-none">
                <p className="text-xl xl:text-3xl font-bold text-gray-800 font-['Open_Sans']">
                  Google Home Internship
                </p>
                <p className="text-base md:text-lg text-gray-500 font-['Open_Sans'] mt-2">
                  More information coming soon.
                </p>
              </div>

              <img
                src={
                  camLightOn
                    ? '/images/explore/nest-cam.png'
                    : '/images/explore/nest-cam-off.png'
                }
                alt="Nest Cam"
                className="absolute -bottom-0 md:-right-8 w-[250px] md:w-[420px] object-contain z-10 opacity-90 transition-opacity duration-300"
              />

              <div
                onMouseEnter={() => setFocusedTile('google-home')}
                onMouseLeave={() => setFocusedTile(null)}
              >
                <ArrowButton href="https://home.google.com/welcome/" />
              </div>
            </div>

            <div
              className={`absolute -bottom-[40px] left-0 right-0 pt-2 text-center transition-opacity duration-600 ease-in-out ${
                focusedTile === 'google-home'
                  ? 'opacity-100 z-30'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="font-semibold text-gray-800">Google</p>
              <p className="text-sm text-gray-500">
                Software Engineering Internship
              </p>
            </div>
          </div>

          {/* Tile 2: Skills */}
          <div className="px-4 sm:px-12 py-4 md:p-2">
            <div className="tile-style aspect-square">
              <SkillsTile />
            </div>
          </div>

          {/* Tile 3: Inlaid App */}
          <div className="md:row-span-2 px-4 sm:px-12 py-4 md:p-2 group relative">
            <div
              className={`tile-style aspect-[1/2] relative overflow-hidden ${
                focusedTile === 'inlaid' ? 'z-30' : ''
              }`}
            >
              <div className="canopy-rotation">
                <InlaidTile />
              </div>
              <div
                onMouseEnter={() => setFocusedTile('inlaid')}
                onMouseLeave={() => setFocusedTile(null)}
              >
                <ArrowButton href="https://spencerdearman.com/inlaid" />
              </div>
            </div>
            <div
              className={`absolute -bottom-[40px] left-0 right-0 pt-2 text-center transition-opacity duration-300 ease-in-out ${
                focusedTile === 'inlaid'
                  ? 'opacity-100 z-30'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="font-semibold text-gray-800">Inlaid</p>
              <p className="text-sm text-gray-500">Smart Storage and NFC</p>
            </div>
          </div>

          {/* Tile 4: Infleqtion */}
          <div className="px-4 sm:px-12 py-4 md:p-2 relative">
            <div
              className={`tile-style aspect-square md:aspect-square relative group ${
                focusedTile === 'infleqtion' ? 'z-30' : ''
              }`}
            >
              <InfleqtionTile />
              <div
                onMouseEnter={() => setFocusedTile('infleqtion')}
                onMouseLeave={() => setFocusedTile(null)}
              >
                <ArrowButton href="https://github.com/Infleqtion/client-superstaq/tree/f0108407c0440401bf452d92141cfbaa05e564e1/docs/source/apps/supermarq/examples/qre-challenge" />
              </div>
            </div>
            <div
              className={`absolute -bottom-[40px] left-0 right-0 pt-2 text-center transition-opacity duration-300 ease-in-out ${
                focusedTile === 'infleqtion'
                  ? 'opacity-100 z-30'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="font-semibold text-gray-800">Infleqtion</p>
              <p className="text-sm text-gray-500">
                Quantum Software Engineering Internship
              </p>
            </div>
          </div>

          {/* Tile 5: Canopy App */}
          <div className="px-4 sm:px-12 py-4 md:p-2 group relative">
            <div
              className={`tile-style aspect-square relative overflow-hidden ${
                focusedTile === 'canopy' ? 'z-30' : ''
              }`}
            >
              <div className="prism-animation">
                <div className="w-full max-w-sm mx-auto aspect-[9/18] md:aspect-[9.5/20]">
                  <div className="w-full h-full relative">
                    <img
                      src="/images/explore/canopy.png"
                      alt="Adrenaline"
                      className="absolute h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div
                onMouseEnter={() => setFocusedTile('canopy')}
                onMouseLeave={() => setFocusedTile(null)}
              >
                <ArrowButton href="https://www.figma.com/design/1liAsrBRRRzo7uffeZORRN/Project---v2?node-id=2022-2768&t=ymuLdsWWJalVszAH-1" />
              </div>
            </div>
            <div
              className={`absolute -bottom-[40px] left-0 right-0 pt-2 text-center transition-opacity duration-300 ease-in-out ${
                focusedTile === 'canopy'
                  ? 'opacity-100 z-30'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="font-semibold text-gray-800">Canopy</p>
              <p className="text-sm text-gray-500">
                Plant Care App Design
              </p>
            </div>
          </div>

          {/* Tile 6: Coming Soon */}
          <div className="px-4 sm:px-12 py-4 md:p-2 relative">
            <div
              className={`tile-style aspect-square md:aspect-square relative group ${
                focusedTile === 'test2' ? 'z-30' : ''
              }`}
            >
              <div
                onMouseEnter={() => setFocusedTile('test2')}
                onMouseLeave={() => setFocusedTile(null)}
              >
                <ArrowButton href="https://github.com/Infleqtion/client-superstaq/tree/f0108407c0440401bf452d92141cfbaa05e564e1/docs/source/apps/supermarq/examples/qre-challenge" />
              </div>
            </div>
            <div
              className={`absolute -bottom-[40px] left-0 right-0 pt-2 text-center transition-opacity duration-300 ease-in-out ${
                focusedTile === 'test2'
                  ? 'opacity-100 z-30'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="font-semibold text-gray-800">Coming Soon</p>
              <p className="text-sm text-gray-500">...</p>
            </div>
          </div>

          {/* Tile 7: Adrenaline App */}
          <div className="md:row-span-2 px-4 sm:px-12 py-4 md:p-2 group relative">
            <div
              className={`tile-style aspect-[1/2] relative overflow-hidden ${
                focusedTile === 'adrenaline' ? 'z-30' : ''
              }`}
            >
              <div className="adrenaline-rotation">
                <Adrenaline />
              </div>
              <div
                onMouseEnter={() => setFocusedTile('adrenaline')}
                onMouseLeave={() => setFocusedTile(null)}
              >
                <ArrowButton href="https://github.com/spencerdearman/adrenaline-app" />
              </div>
            </div>
            <div
              className={`absolute -bottom-[40px] left-0 right-0 pt-2 text-center transition-opacity duration-300 ease-in-out ${
                focusedTile === 'adrenaline'
                  ? 'opacity-100 z-30'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="font-semibold text-gray-800">Adrenaline</p>
              <p className="text-sm text-gray-500">
                Diving Statistics & Results
              </p>
            </div>
          </div>

          {/* Tile 8: PintOS */}
          <div className="md:col-span-2 px-4 sm:px-12 py-4 md:p-2 group">
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
