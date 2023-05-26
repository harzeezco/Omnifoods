import "./Button-component.scss";
import PropTypes from "prop-types";

const BUTTON_TYPE_CLASSES = {
  seeAll: "see-all",
  clearAll: "clear-all",
  delete: "delete",
  callToAction: "call-to-action",
  search: "search",
  productBtn: "productBtn",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <>
      <button
        className={`${BUTTON_TYPE_CLASSES[buttonType]} btn`}
        {...otherProps}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  // children: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
};

export default Button;
