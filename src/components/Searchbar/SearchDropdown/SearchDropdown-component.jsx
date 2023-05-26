import { useContext } from "react";
import { SearchContext } from "../../../contexts/Search-Context";

import Button from "../../Button/Button-component";

import SearchResult from "./SearchResult/SearchResult-component";
import SearchSuggestion from "./SearchSuggestion-component.jsx/SearchSuggestion-component.jsx";

const SearchbarDropdown = () => {
  const { showSearchContent, handleClearAll } = useContext(SearchContext);

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
          <Button onClick={handleClearAll} buttonType="clearAll">
            Clear All
          </Button>
        </div>

        <SearchResult />

        <hr />

        <SearchSuggestion />
      </div>
    </div>
  );
};

export default SearchbarDropdown;
