import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="searchBarArea">
      <span>Testo testo testo</span>
      <div className="InputArea">
        <input type="text" placeholder="Cerca il tuo articolo" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
