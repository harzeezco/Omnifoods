import "./Image-component.scss";
import PropTypes from "prop-types";

const Image = ({ img, className }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <img className={`${className} hero--img`} src={img} alt="" />
    </div>
  );
};

Image.propTypes = {
  img: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Image;
