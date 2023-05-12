import PropTypes from "prop-types";


const SearchboxInputValue = ({ inputData }) => {
  return (
    <div style={{paddingTop: '3rem'}}>
      {inputData.map((data) => {
        const { id, inputValue } = data;

        return (
          <div key={id}>
            <article className="grocery--item">
              <p className="title">{inputValue}</p>

              <button type="button" className="delete--btn">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </article>
          </div>
        );
      })}
    </div>
  );
};

SearchboxInputValue.propTypes = {
  inputData: PropTypes.array.isRequired,
};

export default SearchboxInputValue;
