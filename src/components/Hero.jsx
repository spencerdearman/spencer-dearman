/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
    >
      {/* MODIFIED THIS CONTAINER: 
        - Switched from Grid to Flexbox on large screens.
        - Added flex-col for mobile stacking.
        - Added justify-center to center the content.
        - Increased the gap for better visual balance.
      */}
      <div className="container flex flex-col lg:flex-row items-center justify-center lg:gap-32">
        
        {/*
          MODIFIED THIS DIV:
          - Added text alignment classes to center text on mobile and left-align on desktop.
        */}
        <div className="text-center lg:text-left">
          {/* Name */}
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-2 mx-auto lg:mx-0">
            Spencer Dearman
          </h2>

          {/* Subheadings with reduced margins */}
          <p className="headline-sub mb-1">
            University of Chicago Student
          </p>
          <p className="headline-sub mb-6">
            Google Software Engineering Intern
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <ButtonOutline
              href="#explore"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block">
          <figure className="profile-image">
            <img
              src="images/spencer-dearman.png"
              width={650}
              height={650}
              alt="Spencer Dearman"
              className="w-full"
            />
          </figure>
        </div>

      </div>
    </section>
  );
};

export default Hero;