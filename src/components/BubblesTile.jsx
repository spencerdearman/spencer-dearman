/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

const BubblesTile = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover"
      >
        <source src="/images/explore/explore-bubble.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BubblesTile;
