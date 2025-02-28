/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import CourseTile from "./CourseTile";

// Example array of courses with full names and course codes
const courses = [
  { courseName: "Systems Programming I", courseCode: "CMSC 14300" },
  { courseName: "Systems Programming II", courseCode: "CMSC 14400" },
  { courseName: "Discrete Mathematics", courseCode: "CMSC 27100" },
  { courseName: "Theory of Algorithms", courseCode: "CMSC 27200" },
  { courseName: "Operating Systems", courseCode: "CMSC 23000" },
  { courseName: "Foundations of Networks", courseCode: "CMSC 23200" },
  { courseName: "Computer Architecture", courseCode: "CMSC 22240" },
  { courseName: "Machine Learning for Systems", courseCode: "CMSC 25422" },
];

const Review = () => {
  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: 3.5
      },
      x: '-1000'
    });
  });

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Relevant Coursework
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {courses.map(({ courseName, courseCode }, key) => (
            <CourseTile
              key={key}
              courseName={courseName}
              courseCode={courseCode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;