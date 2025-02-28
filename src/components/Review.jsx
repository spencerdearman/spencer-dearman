// /**
//  * @copyright 2025 spencerdearman
//  * @license Apache-2.0
//  */


// /**
//  * Node modules
//  */
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from '@gsap/react';


// /**
//  * Register gsap plugins
//  */
// gsap.registerPlugin(useGSAP, ScrollTrigger);


// /**
//  * Components
//  */
// import ReviewCard from "./ReviewCard";


// const reviews = [
//   {
//     content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
//     name: 'Sophia Ramirez',
//     imgSrc: '/images/people-1.jpg',
//     company: 'PixelForge'
//   },
//   {
//     content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
//     name: 'Ethan Caldwell',
//     imgSrc: '/images/people-2.jpg',
//     company: 'NexaWave'
//   },
//   {
//     content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
//     name: 'Liam Bennett',
//     imgSrc: '/images/people-3.jpg',
//     company: 'CodeCraft'
//   },
//   {
//     content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
//     name: 'Noah Williams',
//     imgSrc: '/images/people-4.jpg',
//     company: 'BrightWeb'
//   },
//   {
//     content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
//     name: 'Ava Thompson',
//     imgSrc: '/images/people-5.jpg',
//     company: 'TechMosaic'
//   },
//   {
//     content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
//     name: 'Jonathan',
//     imgSrc: '/images/people-6.jpg',
//     company: 'Skyline Digital'
//   }
// ];


// const Review = () => {

//   useGSAP(() => {
//     gsap.to('.scrub-slide', {
//       scrollTrigger: {
//         trigger: '.scrub-slide',
//         start: '-200% 80%',
//         end: '400% 80%',
//         scrub: true
//       },
//       x: '-1000'
//     })
//   });

//   return (
//     <section
//       id="reviews"
//       className="section overflow-hidden"
//     >
//       <div className="container">

//         <h2 className="headline-2 mb-8 reveal-up">
//           Relevant Coursework
//         </h2>

//         <div className="scrub-slide flex items-stretch gap-3 w-fit">
//           {reviews.map(({ content, name, imgSrc, company }, key) => (
//             <ReviewCard
//               key={key}
//               name={name}
//               imgSrc={imgSrc}
//               company={company}
//               content={content}
//             />
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Review

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