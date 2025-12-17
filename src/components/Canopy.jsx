const Canopy = () => {
  return (
    <div className="w-full max-w-sm mx-auto aspect-[9.5/20]">
      <div className="w-full h-full relative">
        <img
          src="/images/canopy.png"
          alt="Canopy"
          className="absolute h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Canopy;
