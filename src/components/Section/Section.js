import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return <section>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
