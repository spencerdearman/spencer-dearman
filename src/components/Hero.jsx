/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from './Button';

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container flex flex-col lg:flex-row items-center justify-center lg:gap-32">
        {/* Image Section */}
        <div className="block md:hidden">
          <figure className="profile-image">
            <img
              src="images/spencer-dearman.png"
              width={400}
              height={400}
              alt="Spencer Dearman"
              className="w-full"
            />
          </figure>
        </div>

        <div className="text-left lg:text-left">
          {/* Name */}
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-2 mx-auto lg:mx-0">
            Spencer Dearman
          </h2>

          {/* Subheadings with reduced margins */}
          <p className="text-2xl font-medium text-left mb-1">
            University of Chicago Student
          </p>
          <p className="text-2xl font-medium text-left mb-6">
            Incoming Google Software Engineer
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-start lg:justify-start gap-3">
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
