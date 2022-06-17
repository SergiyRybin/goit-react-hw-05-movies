// import PropTypes from 'prop-types';
import s from '../Container/Container.module.css';

const Container = ({ children }) => {
  return <div className={s.Container}>{children}</div>;
};

Container.propTypes = {
  // title: PropTypes.string.isRequired,
  // children: PropTypes.object.isRequired,
};

export default Container;
