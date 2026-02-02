import { useState, useRef } from 'react';

const InfleqtionTile = () => {
  const [style, setStyle] = useState({});
  const listenerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!listenerRef.current) return;
    const { width, height, left, top } =
      listenerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = -(y / height - 0.5) * 15;
    const rotateY = (x / width - 0.5) * 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'none',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    });
  };

  return (
    <div className="w-full h-full relative">
      <div
        className="w-full h-full"
        style={{ ...style, transformStyle: 'preserve-3d' }}
      >
        <img
          src={'/images/explore/infleqtion-greyed.png'}
          alt={'Grey Infleqtion Logo'}
          className="absolute inset-0 w-full h-full object-contain p-12 opacity-80"
        />
        <img
          src={'/images/explore/infleqtion.png'}
          alt={'Color Infleqtion Logo'}
          className="absolute inset-0 w-full h-full object-contain p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
        />
      </div>

      <div
        ref={listenerRef}
        className="absolute inset-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default InfleqtionTile;
