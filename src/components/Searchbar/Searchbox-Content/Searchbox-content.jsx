import Button from "../../Button/Button-component";
import "./SearchboxContent-component.scss";
import SearchbarSuggestion from "../Searchbar-suggestion-component.jsx/Searchbar-suggestion";
import PropTypes from "prop-types";
import SearchboxInputValue from "./SearchboxInputValue";

const SearchboxContent = ({ inputData, showSearchContent }) => {
  return (
    <div className={`grocery--container ${showSearchContent}`}>
      <div className="grocery-list">
        <div className="grocery--header">
          <div className="history">
            <span className="history__icon">
              <i className="fa-regular fa-clock"></i>
            </span>
            history
          </div>
          <Button btnClassName="clear__btn" btnInnerText="Clear All" />
        </div>

        <SearchboxInputValue inputData={inputData} />

        <hr />

        <SearchbarSuggestion />
      </div>
    </div>
  );
};

SearchboxContent.propTypes = {
  inputData: PropTypes.array.isRequired,
  showSearchContent: PropTypes.string.isRequired,
};

export default SearchboxContent;
