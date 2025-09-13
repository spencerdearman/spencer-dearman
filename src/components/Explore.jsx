/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import SkillIcon from "./SkillIcon";

const skillIcons = [
  {
    imgSrc: 'images/c.svg',
    label: 'C',
    desc: 'Programming Language'
  },
  {
    imgSrc: 'images/swift.svg',
    label: 'Swift',
    desc: 'Programming Language'
  },
  {
    imgSrc: 'images/python.svg',
    label: 'Python',
    desc: 'Programming Language'
  },
  {
    imgSrc: 'images/aws.svg',
    label: 'AWS',
    desc: 'Cloud Platform'
  },
   {
    imgSrc: 'images/gcp.svg',
    label: 'GCP',
    desc: 'Cloud Platform'
  },
  {
    imgSrc: 'images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: 'images/git.svg',
    label: 'Git',
    desc: 'Version Control'
  },
  {
    imgSrc: 'images/widgetkit.png',
    label: 'WidgetKit',
    desc: 'Framework'
  },
  {
    imgSrc: 'images/app-intents.png',
    label: 'App Intents',
    desc: 'Framework'
  },

];


const Explore = () => {

  return (
    <section
      id="explore"
      className="section"
    >
      <div className="container mx-auto px-4 py-16">
        {/* Grid container:
          - `grid`:  Sets the display to grid.
          - `grid-cols-3`: Creates a grid with 4 equal-width columns on medium screens and up.
          - `grid-cols-1`: Makes it a single column on small screens (mobile).
          - `gap-4`: Sets the spacing between all grid items.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* Grid Items:
            - Use `col-span-*` to define how many columns an item should span.
            - Use `row-span-*` to define how many rows an item should span.
            - I'm using placeholder styles for now. You'll replace these divs with your project cards.
          */}

          {/* Tile 1: XL Tile 2x2 */}
          {/* Google Tile */}
          <div className="md:col-span-2 md:row-span-2 p-2">
            <div className={`tile-style aspect-[2/2]`}>
              <p className="about-content">
                Welcome! I&apos;m Spencer Dearman, a rising fourth-year student pursuing a joint BS/MS degree in Computer Science with a specialization in Computer Systems at the University of Chicago. I have a strong interest in low-level programming, operating systems, and the algorithms that make systems run efficiently. Currently, I&apos;m a Software Engineering Intern at Google in Mountain View.
              </p>
            </div>
          </div>
          
          {/* Tile 2: Standard Tile 1x1 */}
          <div className="p-2">
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

          {/* Tile 3: Tall Tile 2x1 */}
          <div className="md:row-span-2 p-2">
          <div className={`tile-style aspect-[1/2]`}>
            <p className="text-neutral-400">MD Tile 3 (2x1)</p>
          </div>
          </div>

          {/* Tile 4: Tall Tile 2x1 \\\ */}
          <div className="md:row-span-2 p-2">
          <div className={`tile-style aspect-[1/2]`}>
            <p className="text-neutral-400">SM Tile 4 (2x1)</p>
          </div>
          </div>

          {/* Tile 5: Standard Tile 1x1 */}
          <div className="p-2">
          <div className={`tile-style aspect-[1/1]`}>
            <p className="text-neutral-400">SM Tile 5 (1x1)</p>
          </div>
          </div>

          {/* Tile 6: Wide Tile 1x2 */}
          <div className="md:col-span-2 p-2">
          <div className={`tile-style aspect-[2/1]`}>
            <p className="text-neutral-400">MD Tile 6 (1x2)</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore