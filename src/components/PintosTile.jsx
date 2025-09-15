import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PiCpu, PiUsersThree, PiMemory, PiFiles, PiX } from 'react-icons/pi';


const pintosProjects = [
  { id: 'threads', title: 'Project 1: Threads', filename: 'thread.c', Icon: PiCpu, commentary: 'let’s fucking go' },
  { id: 'userprog', title: 'Project 2: User Program', filename: 'userprog.bin', Icon: PiUsersThree, commentary: 'halfway bitches (suffering)' },
  { id: 'vm', title: 'Project 3: Virtual Memory', filename: 'vm.mem', Icon: PiMemory, commentary: '62 hours….enough said' },
  { id: 'fs', title: 'Project 4: File System', filename: 'filesystem.fs', Icon: PiFiles, commentary: 'time tracker: 20 hours' },
];

const ProjectWindow = ({ project, onClose }) => {
  // ... (No changes to this component)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: 'easeInOut', duration: 0.2 }}
      className="absolute inset-0 z-20 flex flex-col justify-center items-center p-4 bg-slate-700/50 backdrop-blur-lg"
    >
      <div className="w-full text-center">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-4 font-mono text-lg text-slate-300">"{project.commentary}"</p>
      </div>
      <button onClick={onClose} className="absolute top-2 right-2 p-1 text-slate-400 hover:bg-red-500 rounded-full">
        <PiX />
      </button>
    </motion.div>
  );
};

const PintosTile = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenProject = (project) => setActiveProject(project);
  const handleCloseProject = () => setActiveProject(null);

  return (
    // 1. PADDING REMOVED from this outer div. It now only controls the background.
    <div
      className="absolute inset-0 text-white rounded-xl
                 bg-transparent group-hover:bg-slate-900 
                 transition-colors duration-300 ease-in-out"
    >
      {/* 2. NEW INNER WRAPPER added to handle the padding for the content. */}
      <div className="w-full h-full flex flex-col justify-between p-4 md:p-6">
        <div>
          <h2 className="text-lg font-bold text-cyan-400">PintOS x86 Operating System</h2>
          <p className="text-xs text-slate-400">Sep. 2024 – Dec. 2024</p>
          <div className="mt-2 space-y-1 text-slate-300 text-xs hidden md:block">
            <p>● Engineered a comprehensive virtual memory system for a multitasking kernel, implementing on-demand paging, a frame eviction policy, and a system call interface.</p>
            <p>● Designed a high-performance, Unix-like filesystem with a write-behind buffer cache, extensible files, and fine-grained locks to protect concurrent accesses.</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-4">
          {pintosProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => handleOpenProject(project)}
              className="flex flex-col items-center gap-1 p-2 text-center transition-colors bg-white/5 hover:bg-white/10 rounded-md"
            >
              <project.Icon className="w-6 h-6 text-cyan-400" />
              <span className="font-mono text-[10px] text-slate-300">{project.filename}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && <ProjectWindow project={activeProject} onClose={handleCloseProject} />}
      </AnimatePresence>
    </div>
  );
};

export default PintosTile;