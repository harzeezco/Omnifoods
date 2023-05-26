import "./Searchbar.styles.scss";

import SearchbarDropdown from "./SearchDropdown/SearchDropdown-component";
import SearchInput from "./SearchInput/SearchInput";

const Searchbar = () => {
  return (
    <section className="section--center">
      <SearchInput />
      <SearchbarDropdown />
    </section>
  );
};

export default Searchbar;
