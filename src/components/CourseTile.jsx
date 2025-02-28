/**
 * @copyright 2025 spencerdearman
 * @license Apache-2.0
 */

import PropTypes from 'prop-types';

const CourseTile = ({ courseName, courseCode }) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col items-center justify-center">
      <p className="text-white text-xl font-semibold">
        {courseName}
      </p>
      <p className="text-zinc-400 text-sm tracking-wider">
        {courseCode}
      </p>
    </div>
  );
};

CourseTile.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseCode: PropTypes.string.isRequired,
};

export default CourseTile;