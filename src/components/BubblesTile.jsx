/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

const BubblesTile = () => {
  return (
    <div className="w-full h-full p-6 flex items-center justify-center">
      <div className="w-full aspect-square rounded-[50px] overflow-hidden shadow-2xl bg-black/20 backdrop-blur-md relative">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/images/bubbles/close-bubble.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default BubblesTile;
