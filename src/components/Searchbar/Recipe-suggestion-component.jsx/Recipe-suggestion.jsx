import { SearchImage } from "../../../utils/Expenses";
import Button from "../../Button/Button-component";
import "./Recipe-suggestion.scss";

const RecipeSuggestion = () => {
  return (
    <>
      <div className="search--suggestion--heading">
        <p className="search--suggestion__text">Suggestions</p>
        <Button type='button' buttonType="seeAll">
          See All &rarr;
        </Button>
      </div>

      <div className="search__image--container">
        {SearchImage.map((image) => {
          const { id, name, img } = image;

          return (
            <div key={id} className="search__image--content">
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

export default RecipeSuggestion;
