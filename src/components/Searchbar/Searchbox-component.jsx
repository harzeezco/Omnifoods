import "./Searchbox-components.scss";

const Searchbox = () => {
  return (
    <form className="">
      <div className="input--wrapper">
        <i className="fa-solid fa-magnifying-glass fa-2xs Search__icon"></i>
        <input
          className="text__box"
          placeholder="search for cuisine"
          type="search"
        />
      </div>
    </form>
  );
};

export default Searchbox;
