/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types';

const PersonalCard = ({ imgSrc, classes }) => {
  return (
    <div
      className={
        'relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ' +
        classes
      }
    >
      <figure className="img-box aspect-square rounded-lg flex items-center justify-center">
        <img
          src={imgSrc}
          loading="lazy"
          className="img-cover object-cover object-center w-full h-full"
        />
      </figure>
    </div>
  );
};

PersonalCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default PersonalCard;
