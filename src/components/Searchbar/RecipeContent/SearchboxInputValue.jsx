import { useContext } from "react";
import { SearchContext } from "../../../contexts/Search-Context";
import { Link } from "react-router-dom";

const RecipeInputValue = () => {
  const { inputData, handleDeleteData, handleExitGrocery } =
    useContext(SearchContext);

  return (
    <div style={{ paddingTop: "3rem" }}>
      {inputData.map((data) => {
        const { id, inputValue } = data;

        return (
          <div key={id}>
            <article className="grocery--item">
              <Link to="/product" onClick={handleExitGrocery}>
                <p className="title">{inputValue}</p>
              </Link>

              <button
                type="button"
                className="delete--btn"
                onClick={() => handleDeleteData(id)}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeInputValue;
