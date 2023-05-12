import PropTypes from "prop-types";
import "./SearchInput-component.scss";

const SearchInput = ({ setInputValue, handleSearch, inputValue }) => {
  return (
    <form className="">
      <div className="input--wrapper">
        <i className="fa-solid fa-magnifying-glass fa-2xs Search__icon"></i>
        <input
          className="text__box"
          placeholder="Quick Search..."
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="search__btn" onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass fa-2xs Search__icon"></i>
        </button>
      </div>
    </form>
  );
};

SearchInput.propTypes = {
  setInputValue: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default SearchInput;
