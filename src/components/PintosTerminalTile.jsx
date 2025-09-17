import { useState } from 'react';
import {
  PiCpu,
  PiUsersThree,
  PiMemory,
  PiFiles,
  PiX,
  PiMinus,
  PiPlus,
  PiTerminalWindow,
} from 'react-icons/pi';
import { AnimatePresence, motion } from 'framer-motion';

const pintosProjects = [
  {
    id: 'threads',
    title: 'Project 1: Threads',
    filename: 'thread.c',
    Icon: PiCpu,
    commentary: [
      'Implemented an efficient alarm clock to manage sleeping threads using a sorted list to minimize wake-up latency.',
      'Developed a priority scheduler to ensure that higher-priority threads are executed first.',
      'Solved priority inversion by implementing priority donation, including support for nested and chained donations.',
      'Ensured thread safety and prevented race conditions in critical sections using locks and by disabling interrupts.',
    ],
  },
  {
    id: 'userprog',
    title: 'Project 2: User Program',
    filename: 'userprog.c',
    Icon: PiUsersThree,
    commentary: [
      'Enabled the kernel to load and execute user programs from disk.',
      "Implemented command-line argument passing by parsing strings and setting up the program's initial stack.",
      'Built a robust system call handler to process requests for file operations, process control, and I/O.',
      'Guaranteed system stability by validating user memory pointers and safely handling memory access between the kernel and user processes.',
    ],
  },
  {
    id: 'vm',
    title: 'Project 3: Virtual Memory',
    filename: 'vm.c',
    Icon: PiMemory,
    commentary: [
      'Designed a virtual memory system using demand paging to load data from disk only as needed.',
      'Managed physical frames and virtual pages using a frame table and a supplemental page table.',
      'Implemented a swapping mechanism to move pages to a disk partition when physical memory is full.',
      'Developed a page eviction algorithm to select and evict pages under memory pressure.',
    ],
  },
  {
    id: 'fs',
    title: 'Project 4: File System',
    filename: 'filesys.c',
    Icon: PiFiles,
    commentary: [
      'Replaced the original simple file system with an extensible one using a multilevel indexed inode structure.',
      'Enabled support for dynamically growing files up to several megabytes, far exceeding the original limit.',
      'Introduced a hierarchical directory structure, allowing for nested subdirectories.',
      'Implemented path resolution for both absolute and relative paths and tracked the current working directory for each process.',
    ],
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
      <div
        className="absolute inset-0 backdrop-blur-xs"
        onClick={onClose}
      ></div>

      {/* Main Window: flex-col with a max-height */}
      <div className="relative w-full max-w-md flex flex-col max-h-[90vh] rounded-lg bg-slate-700/50 ring-1 ring-white/20 shadow-2xl backdrop-blur-lg overflow-hidden">
        {/* Title Bar: flex-shrink-0 prevents it from shrinking */}
        <div className="flex-shrink-0 flex items-center justify-between bg-slate-800/70 p-2 text-sm">
          <p className="font-mono text-slate-300">{project.filename}</p>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:bg-red-500 rounded-full"
          >
            <PiX />
          </button>
        </div>

        {/* MODIFIED THIS LINE with flex-grow and min-h-0 */}
        <div className="flex-grow min-h-0 p-6 text-left overflow-y-auto">
          <h3 className="text-xl font-bold text-white text-center">
            {project.title}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside font-mono">
            {project.commentary.map((point, index) => (
              // ADDED responsive classes to the <li> element
              <li 
                key={index} 
                className="md:not-first:hidden lg:not-first:block"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const PintosTerminalTile = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimizeToggle = () => {
    setIsMinimized(!isMinimized);
  };

  const springTransition = { type: 'spring', stiffness: 400, damping: 40 };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 1. This is now a SINGLE animated container */}
      <motion.div
        layout
        transition={springTransition}
        // 2. The component's entire style changes based on state
        className={
          isMinimized
            ? 'flex flex-col items-center justify-center w-24 h-24 cursor-pointer'
            : 'w-full h-full flex flex-col font-mono bg-neutral-100/80 rounded-xl overflow-hidden shadow-lg cursor-text'
        }
        // 3. The click handler also changes based on state
        onClick={isMinimized ? handleMinimizeToggle : undefined}
      >
        {/* 4. AnimatePresence now fades the CONTENT inside the container */}
        <AnimatePresence mode="wait">
          {isMinimized ? (
            <motion.div
              key="minimized-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, delay: 0.1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              className="flex flex-col items-center p-2
                bg-white 
                rounded-[24px]
                sm:rounded-[28px]
                lg:rounded-[24px]
                p-4
                aspect-square 
                items-center 
                justify-center
                transition-all
                duration-200
                ease-in-out
                hover:scale-105
                hover:shadow-lg;
              "
            >
              <PiTerminalWindow className="w-8 h-8 text-neutral-900" />
              <span className="font-mono text-xs text-neutral-900">PintOS</span>
            </motion.div>
          ) : (
            <motion.div
              key="full-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, delay: 0.1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              className="w-full h-full flex flex-col overflow-hidden"
            >
              {/* Title Bar */}
              <div className="flex items-center p-3 bg-neutral-400/30">
                <div className="flex items-center space-x-2">
                  <div className="group w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                    <PiX className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <button
                    onClick={handleMinimizeToggle}
                    className="group w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center"
                  >
                    <PiMinus className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <div className="group w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                    <PiPlus className="w-2 h-2 text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <p className="flex-grow text-center text-sm text-neutral-900/60">
                  user@spencer: ~/pintos
                </p>
              </div>
              {/* Terminal Content */}
              <div className="p-6 text-neutral-300 flex-grow flex flex-col">
                <div className="flex text-neutral-900/60 items-center">
                  <span>~/pintos/projects $ ls</span>
                  <span className="w-2 h-4 bg-neutral-400 ml-2 cursor-blink"></span>
                </div>
                <div
                  className="mt-4 flex-grow 
                             flex flex-col space-y-1
                             md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-2 md:space-y-0
                             lg:flex lg:flex-col lg:space-y-1"
                >
                  {pintosProjects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => setActiveProject(project)}
                      className="flex items-center text-left transition-colors w-full hover:bg-slate-700/50 p-1 rounded"
                    >
                      <div className="flex items-center gap-3 text-neutral-900/60">
                        <project.Icon className="w-5 h-5" />
                        <span>{project.filename}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {activeProject && (
          <ProjectWindow
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PintosTerminalTile;
