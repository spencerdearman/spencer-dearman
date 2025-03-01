/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: 'images/project-1.jpg',
    title: 'PintOS x86 OS',
    tags: ['Operating Systems', 'C', 'Low-Level', 'Protected'],
    projectLink: 'https://web.stanford.edu/class/cs140/projects/pintos/pintos_1.html'
  },
  {
    imgSrc: 'images/project-2.jpg',
    title: 'Adrenaline iOS App',
    tags: ['Amazon Web Services', 'Swift', 'Apple Developer'],
    projectLink: 'https://github.com/spencerdearman/adrenaline-app'
  },
  {
    imgSrc: 'images/project-3.jpg',
    title: 'Internet Relay Chat',
    tags: ['Networks', 'C', 'Systems Design', 'Protected'],
    projectLink: 'https://chi.cs.uchicago.edu/chirc/intro.html'
  },
  {
    imgSrc: 'images/project-4.jpg',
    title: 'Mininet IPv4 Router',
    tags: ['Networks', 'C', 'Systems Design', 'Protected'],
    projectLink: 'https://chi.cs.uchicago.edu/chirouter/intro.html'
  },
  {
    imgSrc: 'images/project-5.jpg',
    title: 'Quantum Benchmarking',
    tags: ['Quantum Computing', 'Azure','Resource Estimation', 'k-SAT'],
    projectLink: 'https://github.com/Infleqtion/client-superstaq/tree/f0108407c0440401bf452d92141cfbaa05e564e1/docs/source/apps/supermarq/examples/qre-challenge'
  },
  {
    imgSrc: 'images/project-6.jpg',
    title: 'Data Cleaning Pipeline',
    tags: ['Data Processing', 'Python', 'React', 'Flask'],
    projectLink: 'https://github.com/spencerdearman/data-cleaning-pipeline'
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Work Portfolio
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Reach out to see source code for protected projects, or to learn more about my work.
        </p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work