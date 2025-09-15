import PropTypes from 'prop-types';

const ArrowButton = ({ href }) => {
  return (
    <a
      href={href}
      className="
        group 
        absolute bottom-4 left-4
        arrow-button
      "
    >
      {/* The inline SVG is replaced with an img tag */}
      <img
        src="/images/arrow.svg"
        alt="Arrow Icon"
        className="
        w-full h-auto p-0.5
        "
      />
    </a>
  );
};

ArrowButton.propTypes = {
  href: PropTypes.string,
  imgSrc: PropTypes.string.isRequired, // Added imgSrc prop
};

ArrowButton.defaultProps = {
  href: '#',
};

export default ArrowButton;
