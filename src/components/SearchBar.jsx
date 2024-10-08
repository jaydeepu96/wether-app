import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() === "") return;
    onSearch(query); // Pass the searched city back to the parent component
  };

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search for places..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
