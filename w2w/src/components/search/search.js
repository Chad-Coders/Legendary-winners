import React from "react";
import './search.css';

const SearchBar = () => (
    <form action="/" method="get" id="search-form">
        <input
            type="text"
            id="header-search"
            placeholder="Search movie or tv show"
            name="s"
        />
    </form>
);

export default SearchBar;