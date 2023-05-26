import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputData, setInputData] = useState([]);
  const [showSearchContent, setShowSearchContent] = useState("");
  const [loading, setLoading] = useState(true);

  const handleExitGrocery = () => {
    setShowSearchContent("");
    setInputData([]);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const cleanedText = inputValue.replace(/[^a-zA-Z\s]/g, "");
    const cleanTextResult = cleanedText.trim();

    if (inputValue.length >= 3) {
      const id = new Date().getTime();
      const searchData = { id, cleanTextResult };
      setInputData([...inputData, searchData]);

      setShowSearchContent("show--content");

      setInputValue("");
    }
  };

  const handleClearAll = () => {
    setInputData([]);
  };

  const handleDeleteData = (id) => {
    setInputData((prev) => {
      return prev.filter((data) => data.id !== id);
    });
  };

  const value = {
    inputValue,
    setInputValue,
    inputData,
    setInputData,
    showSearchContent,
    setShowSearchContent,
    handleExitGrocery,
    handleSearch,
    handleClearAll,
    handleDeleteData,
    loading,
    setLoading,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
