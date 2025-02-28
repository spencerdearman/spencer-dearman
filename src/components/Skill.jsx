/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/c.svg',
    label: 'C',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/swift.svg',
    label: 'Swift',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/aws.svg',
    label: 'AWS',
    desc: 'Cloud Platform'
  },
  {
    imgSrc: '/images/gcp.svg',
    label: 'GCP',
    desc: 'Cloud Platform'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/git.svg',
    label: 'Git',
    desc: 'Version Control'
  },
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Essential Skills
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill