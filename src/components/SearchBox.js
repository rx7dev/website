import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <label for="search">
        Search technologies:&nbsp;&nbsp;
        <input
          id="search"
          className="pa2 ba b--blue bg-white"
          type="search"
          placeholder=""
          onChange={searchChange}
        />
      </label>
    </div>
  );
};

export default SearchBox;
