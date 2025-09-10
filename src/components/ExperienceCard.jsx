/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import PropTypes from 'prop-types';


const ExperienceCard = ({
  imgSrc,
  title,
  subtitle,
  projectLink,
}) => {
  return (
    <div className={"experience-card-container"}>

      <figure className="experience-card-img">
        <img
          src={imgSrc}
          alt={title}
          loading='lazy'
          className="img-cover"
        />
      </figure>

      <div className="flex items-center justify-between gap-4">

        <div>
          <h3 className="title-1 mb-3">
            {title}
          </h3>
          <h3 className="title-2 mb-3">
            {subtitle}
          </h3>
        </div>

        {/* Link button */}
        <div className="w-11 h-11 corner-radius grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
          >
            {/* Link button icon */}
            arrow_outward
          </span>
        </div>

      </div>

      <a
        href={projectLink}
        target='_blank'
        className="absolute inset-0"
      ></a>

    </div>
  )
}

ExperienceCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  projectLink: PropTypes.string
}

export default ExperienceCard