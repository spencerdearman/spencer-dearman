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

          {/* Tile 1: Spans 2 columns */}
          <div className={`tile-style md:col-span-2`}>
            <p className="text-neutral-400">XL Tile (2x1)</p>
          </div>
          
          {/* Tile 2: Standard 1x1 */}
          <div className={`tile-style`}>
            <p className="text-neutral-400">SM Tile (1x1)</p>
          </div>

          {/* Tile 3: Standard 1x1 */}
          <div className={`tile-style`}>
            <p className="text-neutral-400">SM Tile (1x1)</p>
          </div>

          {/* Tile 4: Spans 2 columns */}
          <div className={`tile-style md:col-span-2`}>
            <p className="text-neutral-400">MD Tile (2x1)</p>
          </div>

          {/* Tile 5: Spans 2 rows (Tall) */}
          <div className={`tile-style md:row-span-2`}>
            <p className="text-neutral-400">LG Tile (1x2)</p>
          </div>

          {/* Tile 6: Standard 1x1 */}
          <div className={`tile-style`}>
            <p className="text-neutral-400">SM Tile (1x1)</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Explore