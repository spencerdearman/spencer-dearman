/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import PropTypes from "prop-types";


const SkillIcon = ({
  imgSrc,
  label,
  desc,
  classes
}) => {
  return (
    <div className="app-icon group relative">
      <img
        src={imgSrc}
        alt={label}
        className="w-full h-auto p-2"
      />

      <span className="app-tooltip">
        {label}
      </span>
    </div>
  )
}

SkillIcon.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default SkillIcon