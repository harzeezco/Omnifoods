import { useState } from "react";

import "./Searchbox-components.scss";
import SearchboxContent from "./Searchbox-Content/Searchbox-content";
import SearchInput from "./SearchbarInput/SearchInput";

const Searchbox = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputData, setInputData] = useState([]);
  const [showSearchContent, setShowSearchContent] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (inputValue.length >= 3) {
      const id = new Date().getTime();
      const searchData = { id, inputValue };
      setInputData([...inputData, searchData]);

      setShowSearchContent("show--content");

      setInputValue("");
    }
  };

  return (
    <section className="section--center">
      <SearchInput
        setInputValue={setInputValue}
        inputValue={inputValue}
        handleSearch={handleSearch}
      />
      <SearchboxContent
        inputData={inputData}
        showSearchContent={showSearchContent}
        inputValue={inputValue}
      />
    </section>
  );
};

export default Searchbox;
