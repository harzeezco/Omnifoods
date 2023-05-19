import { useContext } from "react";
import { SearchContext } from "../../../contexts/Search-Context";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button-component";

const RecipeInputValue = () => {
  const { inputData, handleDeleteData, handleExitGrocery } =
    useContext(SearchContext);

  const navigate = useNavigate();

  function handleInputData(inputValue) {
    handleExitGrocery();
    navigate(`product/${inputValue}`);
  }

  return (
    <div style={{ paddingTop: "3rem" }}>
      {inputData.map((data) => {
        const { id, inputValue } = data;

        return (
          <div key={id}>
            <article className="grocery--item">
              <Button
                buttonType="clearAll"
                onClick={() => handleInputData(inputValue)}
              >
                <p className="title">{inputValue}</p>
              </Button>

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
