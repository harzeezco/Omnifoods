import "./SearchSuggestion.styles.scss";

import { useContext } from "react";
import { SearchContext } from "../../../../contexts/Search-Context";
import { useNavigate } from "react-router-dom";

import Button from "../../../Button/Button-component";

import { SearchSuggestionImages } from "../../../../utils/Expenses";

const SearchSuggestion = () => {
  const { handleExitGrocery } = useContext(SearchContext);

  const navigate = useNavigate();

  const handleNavigateRecipe = (name) => {
    navigate(`product/${name}`);
    handleExitGrocery();
  };

  return (
    <>
      <div className="search--suggestion--heading">
        <p className="search--suggestion__text">Suggestions</p>
        <Button type="button" buttonType="seeAll">
          See All &rarr;
        </Button>
      </div>

      <div className="search__image--container">
        {SearchSuggestionImages.map((image) => {
          const { id, name, img } = image;

          return (
            <div
              style={{ cursor: "pointer" }}
              key={id}
              className="search__image--content"
              onClick={() => handleNavigateRecipe(name)}
            >
              <div className="search__image--content--overlay"></div>
              <img className="search__image" src={img} alt={`search ${name}`} />
              <p className="search__image--paragraph">{name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchSuggestion;
