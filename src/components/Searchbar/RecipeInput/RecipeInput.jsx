import "./RecipeInput.scss";

import { useContext } from "react";
import { SearchContext } from "../../../contexts/Search-Context";

import Button from "../../Button/Button-component";

const SearchInput = () => {
  const {
    inputValue,
    setInputValue,
    handleSearch,
    handleExitGrocery,
    showSearchContent,
  } = useContext(SearchContext);

  return (
    <form className="">
      <div className="input--wrapper">
        <i
          className={`fa-solid fa-magnifying-glass fa-2xs Search__icon ${
            showSearchContent && "disabled"
          }`}
        ></i>
        <input
          className={`text__box ${
            showSearchContent ? "padding-remove" : "padding"
          }`}
          placeholder="Quick Search..."
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {showSearchContent && (
          <Button buttonType="delete" type="button" onClick={handleExitGrocery}>
            <i className="fa-solid fa-xmark"></i>
          </Button>
        )}
        <Button buttonType="search" onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass fa-2xs Search__icon"></i>
        </Button>
      </div>
    </form>
  );
};

export default SearchInput;
