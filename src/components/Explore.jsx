/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

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
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[20rem] gap-4">

          {/* Grid Items:
            - Use `col-span-*` to define how many columns an item should span.
            - Use `row-span-*` to define how many rows an item should span.
            - I'm using placeholder styles for now. You'll replace these divs with your project cards.
          */}

          {/* Tile 1: XL Tile 2x2 */}
          <div className={`tile-style md:col-span-2 md:row-span-2 reveal-up`}>
            <p className="text-neutral-400">XL Tile 1 (2x2)</p>
          </div>
          
          {/* Tile 2: Standard Tile 1x1 */}
          <div className={`tile-style reveal-up`}>
            <p className="text-neutral-400">SM Tile 2 (1x1)</p>
          </div>

          {/* Tile 3: Tall Tile 2x1 */}
          <div className={`tile-style md:row-span-2 reveal-up`}>
            <p className="text-neutral-400">MD Tile 3 (2x1)</p>
          </div>

          {/* Tile 4: Tall Tile 2x1 \\\ */}
          <div className={`tile-style md:row-span-2 reveal-up`}>
            <p className="text-neutral-400">SM Tile 4 (2x1)</p>
          </div>

          {/* Tile 5: Standard Tile 1x1 */}
          <div className={`tile-style reveal-up`}>
            <p className="text-neutral-400">SM Tile 5 (1x1)</p>
          </div>

          {/* Tile 6: Wide Tile 1x2 */}
          <div className={`tile-style md:col-span-2 reveal-up`}>
            <p className="text-neutral-400">MD Tile 6 (1x2)</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Explore