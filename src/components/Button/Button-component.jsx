import "./Button-component.scss";
import PropTypes from "prop-types";

const Button = ({ btnInnerText, btnClassName }) => {
  return (
    <>
      <button className={`${btnClassName} btn`}>{btnInnerText}</button>
    </>
  );
};

Button.propTypes = {
  btnClassName: PropTypes.string.isRequired,
  btnInnerText: PropTypes.string.isRequired,
};

export default Button;
