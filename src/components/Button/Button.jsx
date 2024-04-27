import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, onClick, type, style }) => {
  return (
    <button
      className={`button button-${style || 'primary'}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.string,
  type: PropTypes.string.isRequired
};

export default Button;
