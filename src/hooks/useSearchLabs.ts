import { useState, useEffect } from "react";
import { useQueryLabCategories, useQueryLabs } from "./labs";

const useSearchLabs = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [totalLabs, setTotalLabs] = useState(3);
  const [isSearching, setIsSearching] = useState(false);
  const [currentSearchWord, setCurrentSearchWord] = useState("");
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [searchValue, setSearchValue] = useState("");

  const {
    data: labs,
    isLoading,
    isError,
    refetch,
  } = useQueryLabs({
    category: selectedCategory,
    keywords: searchValue,
    total: totalLabs,
  });

  const {
    data: categories,
    isLoading: isLoadingC,
    isError: isErrorC,
  } = useQueryLabCategories();

  useEffect(() => {
    refetch();
  }, [selectedCategory, totalLabs, refetch]);

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
    setSearchValue(event.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
    setShowClearIcon("none");
  };

  const handleRefetch = (event) => {
    if ((event && event.key === "Enter") || !event) {
      refetch();
      setIsSearching(true);
      setCurrentSearchWord(searchValue);
    }
    if (event && event.key === "Backspace" && event.target.value.length === 1) {
      resetSearch();
    }
  };

  const resetSearch = () => {
    handleClear();
    setIsSearching(false);
    setTimeout(() => {
      refetch();
    }, 100);
  };

  const loadMoreLabs = () => {
    setTotalLabs((prev) => prev + 3);
  };

  return {
    handleChange,
    handleRefetch,
    resetSearch,
    categories,
    labs,
    isSearching,
    currentSearchWord,
    showClearIcon,
    isLoading: isLoading || isLoadingC,
    isError: isError || isErrorC,
    handleClear,
    selectedCategory,
    setSelectedCategory,
    searchValue,
    loadMoreLabs,
    totalLabs,
  };
};

export default useSearchLabs;
