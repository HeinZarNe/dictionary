import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    search.length !== 0 && onSearch(search);
  };
  const handleEnter = (e) => {
    e.key === "Enter" && handleSearch();
  };
  return (
    <div className="relative pb-4">
      <input
        type="text"
        className="w-full  bg-gray-200 text-black font-bold dark:bg-zinc-900 dark:text-white px-[15px] py-2 rounded-xl focus-visible:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleEnter}
        placeholder="apple"
      />
      <div
        className="absolute top-2 right-4 text-purple-500 cursor-pointer"
        onClick={handleSearch}
      >
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <BiSearch />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default SearchBar;
