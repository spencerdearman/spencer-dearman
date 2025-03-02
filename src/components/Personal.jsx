/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */


/**
 * Components
 */
import PersonalCard from "./PersonalCard";


const works = [
  {
    imgSrc: 'images/personal-1.jpg',
    title: 'Chicago Marathon',
  },
  {
    imgSrc: 'images/personal-2.jpg',
    title: 'Berlin Marathon',
  },
  {
    imgSrc: 'images/personal-3.jpg',
    title: 'Diving',
  },
];


const Personal = () => {
  return (
    <section
      id="personal"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Personal Interests
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          A little bit more about me!
        </p>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title }, key) => (
            <PersonalCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Personal