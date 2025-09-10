/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */


/**
 * Components
 */
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    imgSrc: 'images/google.png',
    title: 'Google',
    subtitle: 'Software Engineering Intern',
    projectLink: 'https://web.stanford.edu/class/cs140/projects/pintos/pintos_1.html'
  },
  {
    imgSrc: 'images/google.png',
    title: 'Infleqtion',
    subtitle: 'Quantum Software Engineering Intern',
    projectLink: 'https://web.stanford.edu/class/cs140/projects/pintos/pintos_1.html'
  },
  {
    imgSrc: 'images/google.png',
    title: 'University of Chicago',
    subtitle: 'Researcher',
    projectLink: 'https://web.stanford.edu/class/cs140/projects/pintos/pintos_1.html'
  },
];


const Experience = () => {
  return (
    <section
      id="experience"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Experience
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Reach out to see source code for protected projects, or to learn more about my work.
        </p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {experiences.map(({ imgSrc, title, subtitle, projectLink }, key) => (
            <ExperienceCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              subtitle={subtitle}
              projectLink={projectLink}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience