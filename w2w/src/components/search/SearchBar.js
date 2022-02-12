import React from "react";
import { useState } from "react";
import './search.css';

function Searchbar(props) {
  const {
    onSearch
  } = props;

  const [searchText, setSearchText] = useState('')

  const handleInput = (e) => {
    const text = e.target.value
    setSearchText(text)
  }

  const handleEnterKeyPressed = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchText)
    }
  }

  return (
    <div>
      <div>

        <input
          type="text"
          id="header-search"
          placeholder="Search Movie or TV Show"
          name="s"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          value={searchText}
        />

      </div>
    </div>
  );
}

export default Searchbar;