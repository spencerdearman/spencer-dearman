import PropTypes from "prop-types";

// ... (Your MeetListItem component and meetsData array are perfect, no changes needed)
const MeetListItem = ({ title }) => (
    <div className="bg-neutral-600/80 rounded-[22px] backdrop-blur-md flex items-center justify-between p-4 border border-white/10">
      <span className="font-medium text-[10px] text-white/90">{title}</span>
      <span className="text-blue-400 text-md">›</span>
    </div>
  );
  
MeetListItem.propTypes = {
    title: PropTypes.string.isRequired,
};

const meetsData = [
    { id: 1, title: "2023 NCAA Division III Mens and Womens Swimming and Diving" },
    { id: 2, title: "2023 NCAA Division III Region 1 Diving Championships" },
    { id: 3, title: "2023 UAA Swimming and Diving Championships" },
    { id: 4, title: "UIC Diving Invite @ University of Illinois at Chicago" },
];

const Adrenaline = () => {
  return (
    // 1. ADDED A WRAPPER to control the overall size and shape.
    // `aspect-[9/19.5]` maintains the phone's proportions.
    // `max-w-sm` prevents it from becoming too large on desktop.
    <div className="w-full max-w-sm mx-auto aspect-[9/18.5]">
      {/* 2. Your main container now uses `relative` to fill this new wrapper. */}
      <div className="w-full h-full relative">
        {/*
          The rest of your code is nested inside and remains the same.
          It will now correctly scale within the proportionally-correct frame.
        */}
        <div className="absolute top-0 left-0 w-full h-full overflow-y-auto no-scrollbar rounded-[30px] p-4 pt-8">
          {/* Header Section */}
          <div className="relative h-1/3">
            <img 
              src="/images/adrenaline-bg.png"
              alt="Header Background" 
              className="absolute -top-20 left-0 w-[250%] h-[250%] object-cover"
            />
            <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
              <button className="text-white bg-black/30 rounded-full w-6 h-6 text-sm flex items-center justify-center">✕</button>
              <div className="flex items-center gap-2">
                <button className="text-white bg-black/30 rounded-[10px] w-6 h-6 p-1 text-sm flex items-center justify-center">
                  <img src="/images/sf-symbols/magnifyingglass.png" alt="Search" className="w-full h-full object-cover" />
                </button>
                <button className="text-white bg-black/30 rounded-[10px] w-6 h-6 p-1 text-sm flex items-center justify-center">
                  <img src="/images/sf-symbols/gear.png" alt="Settings" className="w-full h-full rounded-full object-cover" />
                </button>
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
              <div className="w-30 h-30 rounded-full bg-white p-1">
                <img src="/images/spencer-dearman.png" alt="Profile" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </div>

          {/* Profile Info Card */}
          <div className="p-3">
            <div className="relative z-10 bg-neutral-800/40 backdrop-blur-md rounded-[26px] p-2 border border-white/10 text-white text-center">
              <div className="flex items-center justify-center gap-2">
                <h1 className="text-xs">Spencer Dearman</h1>
                <span className="text-xs text-white/60">Athlete</span>
                <span className="text-yellow-400">
                  <img src="/images/sf-symbols/star.png" alt="Star" className="w-4 h-4 object-cover" />
                </span>
              </div>
              <hr className="border-white/10 my-1" />
              <div className="flex justify-around items-center text-xs text-white/80">
                <span>📍 Oakton</span>
                <span>👤 19</span>
                <span>🌊 56961</span>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="relative z-10 bg-neutral-800/40 backdrop-blur-md rounded-[30px] px-4 pb-8 pt-2">
            <div className="flex items-center justify-center gap-6 text-white/60 font-semibold my-4 text-xs">
              <button className="text-white relative">Meets</button>
              <button>Metrics</button>
              <button>Results</button>
            </div>
            <div className="flex flex-col gap-2">
              {meetsData.map(meet => (
                <MeetListItem key={meet.id} title={meet.title} />
              ))}
            </div>
          </div>
        </div>

        {/* The phone frame now sits inside the aspect-ratio controlled container */}
        <img 
          src="/images/phone.png"
          alt="Phone Frame" 
          className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Adrenaline;