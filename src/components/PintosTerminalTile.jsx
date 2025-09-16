import { useState } from 'react';
import { PiCpu, PiUsersThree, PiMemory, PiFiles, PiX } from 'react-icons/pi';
import { AnimatePresence, motion } from 'framer-motion';

const pintosProjects = [
  {
    id: 'threads',
    title: 'Project 1: Threads',
    filename: 'thread.c',
    Icon: PiCpu,
    commentary: 'Threads Information',
  },
  {
    id: 'userprog',
    title: 'Project 2: User Program',
    filename: 'userprog.bin',
    Icon: PiUsersThree,
    commentary: 'User Programs Information',
  },
  {
    id: 'vm',
    title: 'Project 3: Virtual Memory',
    filename: 'vm.mem',
    Icon: PiMemory,
    commentary: 'Virtual Memory Information',
  },
  {
    id: 'fs',
    title: 'Project 4: File System',
    filename: 'filesystem.fs',
    Icon: PiFiles,
    commentary: 'File System Information',
  },
];

const ProjectWindow = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: 'easeInOut', duration: 0.2 }}
      className="absolute inset-0 z-20 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      {/* The Window */}
      <div className="relative w-full max-w-md overflow-hidden rounded-lg bg-slate-700/50 ring-1 ring-white/20 shadow-2xl backdrop-blur-lg">
        {/* Title Bar */}
        <div className="flex items-center justify-between bg-slate-800/70 p-2 text-sm">
          <p className="font-mono text-slate-300">{project.filename}</p>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:bg-red-500 rounded-full"
          >
            <PiX />
          </button>
        </div>
        {/* Content */}
        <div className="p-8 text-center">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <p className="mt-4 font-mono text-lg text-slate-300">
            "{project.commentary}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const PintosTerminalTile = () => {
  const [activeProject, setActiveProject] = useState(null);
  const handleOpenProject = (project) => setActiveProject(project);
  const handleCloseProject = () => setActiveProject(null);

  return (
    <div className="w-full h-full flex flex-col font-mono bg-slate-800 rounded-xl overflow-hidden">
      {/* --- Title Bar --- */}
      <div className="flex items-center p-3 bg-slate-900">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <p className="flex-grow text-center text-sm text-slate-400">
          user@spencer: ~/pintOS
        </p>
      </div>

      {/* --- Terminal Content --- */}
      <div className="p-6 text-slate-300">
        <div className="flex items-center">
          <span>~/pintOS/projects $</span>
          <span className="w-2 h-4 bg-cyan-400 ml-2 cursor-blink"></span>
        </div>

        {/* --- Clickable File List --- */}
        <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4">
          {pintosProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="flex items-center gap-3 text-left text-cyan-400 hover:text-white transition-colors"
            >
              <project.Icon className="w-5 h-5" />
              <span>{project.filename}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectWindow
            project={activeProject}
            onClose={handleCloseProject} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PintosTerminalTile;
