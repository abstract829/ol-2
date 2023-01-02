import { useState, useEffect } from "react";
import { useQueryLabCategories, useQueryLabs } from "./labs";

const useSearchPathCareers = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [totalPaths, setTotalPaths] = useState(3);
  const [isSearching, setIsSearching] = useState(false);
  const [currentSearchWord, setCurrentSearchWord] = useState("");
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [searchValue, setSearchValue] = useState("");

  //   const {
  //     data: labs,
  //     isLoading,
  //     isError,
  //     refetch,
  //   } = useQueryLabs({
  //     category: selectedCategory,
  //     keywords: searchValue,
  //     total: totalLabs,
  //   });
  const paths = {
    data: [
      {
        _id: 1,
        title: "Career Path Name",
        description:
          "Path Career description. Aliquam a ex sed turpis tincidunt gravida.",
        tags: ["Technologies", "Difficulty", "Level"],
        icon: "https://images.unsplash.com/photo-1602525250008-8b8b0b0b5b1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0aCUyMGNhcmVlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        image:
          "https://images.unsplash.com/photo-1602525250008-8b8b0b0b5b1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0aCUyMGNhcmVlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        category: "Category 1",
      },
      {
        _id: 2,
        title: "Career Path Name",
        description:
          "Path Career description. Aliquam a ex sed turpis tincidunt gravida.",
        tags: ["Technologies", "Difficulty", "Level"],
        icon: "https://images.unsplash.com/photo-1602525250008-8b8b0b0b5b1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0aCUyMGNhcmVlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        image:
          "https://images.unsplash.com/photo-1602525250008-8b8b0b0b5b1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0aCUyMGNhcmVlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        category: "Category 1",
      },
      {
        _id: 3,
        title: "Career Path Name",
        description:
          "Path Career description. Aliquam a ex sed turpis tincidunt gravida.",
        tags: ["Technologies", "Difficulty", "Level"],
        icon: "https://images.unsplash.com/photo-1602525250008-8b8b0b0b5b1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0aCUyMGNhcmVlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        image:
          "https://images.unsplash.com/photo-1602525250008-8b8b0b0b5b1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0aCUyMGNhcmVlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        category: "Category 1",
      },
    ],
  };
  const categories = {
    data: ["Category 1", "Category 2", "Category 3", "Category 4"],
  };
  //   const {
  //     data: categories,
  //     isLoading: isLoadingC,
  //     isError: isErrorC,
  //   } = useQueryLabCategories();

  //   useEffect(() => {
  //     refetch();
  //   }, [selectedCategory, totalLabs, refetch]);

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
      //   refetch();
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
      //   refetch();
    }, 100);
  };

  const loadMorePaths = () => {
    setTotalPaths((prev) => prev + 3);
  };

  return {
    handleChange,
    handleRefetch,
    resetSearch,
    categories,
    paths,
    isSearching,
    currentSearchWord,
    showClearIcon,
    // isLoading: isLoading || isLoadingC,
    // isError: isError || isErrorC,
    handleClear,
    selectedCategory,
    setSelectedCategory,
    searchValue,
    loadMorePaths,
    totalPaths,
  };
};

export default useSearchPathCareers;
