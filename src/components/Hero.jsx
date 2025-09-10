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
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        
        <div>
          {/* Name */}
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-2">
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
          <div className="flex items-center gap-3">
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block">
          <figure className="profile-image">
            <img
              src="images/spencer-dearman.jpg"
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