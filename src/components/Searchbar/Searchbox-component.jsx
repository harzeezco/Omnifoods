import "./Searchbox-components.scss";
import SearchboxContent from "./RecipeContent/Recipe-content";
import SearchInput from "./RecipeInput/RecipeInput";

const Searchbox = () => {
  return (
    <section className="section--center">
      <SearchInput />
      <SearchboxContent />
    </section>
  );
};

export default Searchbox;
