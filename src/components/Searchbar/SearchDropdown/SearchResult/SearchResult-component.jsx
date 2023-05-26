import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./SearchResult.styles.scss";

import { SearchContext } from "../../../../contexts/Search-Context";
import Button from "../../../Button/Button-component";

const SearchResult = () => {
  const { inputData, handleDeleteData, handleExitGrocery } =
    useContext(SearchContext);

  const navigate = useNavigate();

  function handleInputResult(inputValue) {
    handleExitGrocery();

    navigate(`/${inputValue}`);
  }

  return (
    <div style={{ paddingTop: "3rem" }}>
      {inputData.map((data) => {
        const { id, cleanTextResult } = data;

        return (
          <div key={id}>
            <article className="grocery--item">
              <Button
                buttonType="clearAll"
                onClick={() => handleInputResult(cleanTextResult)}
              >
                <p className="title">{cleanTextResult}</p>
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

export default SearchResult;
