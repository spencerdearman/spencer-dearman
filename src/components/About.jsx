/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Classes Taken',
    number: 35
  },
  {
    label: 'Programming Languages',
    number: 4
  },
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Spencer Dearman, a third-year student pursuing a joint BS/MS degree in Computer Science with a specialization in Computer Systems at the University of Chicago. I have a strong interest in low-level programming, operating systems, and the algorithms that make systems run efficiently. When I&apos;m away from my keyboard, I love running, HIIT, reformer pilates, matcha, cooking, and exploring new restaurants.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About