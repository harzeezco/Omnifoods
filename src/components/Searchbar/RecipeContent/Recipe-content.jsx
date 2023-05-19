import { useContext } from "react";

import { SearchContext } from "../../../contexts/Search-Context";

import Button from "../../Button/Button-component";
import "./Recipe-content.scss";

import RecipeSuggestion from "../Recipe-suggestion-component.jsx/Recipe-suggestion";
import RecipeInputValue from "./SearchboxInputValue";

const SearchboxContent = () => {
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
     
        <RecipeInputValue />
 
        <hr />

        <RecipeSuggestion />
      </div>
    </div>
  );
};

export default SearchboxContent;
