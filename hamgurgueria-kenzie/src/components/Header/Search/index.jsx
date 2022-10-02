import { useState } from "react";
import SearchBar from "./style.js";

function Search({ setSearch }) {
  const [searchName, setSearchName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setSearch(searchName);

    setSearchName("");
  }

  return (
    <SearchBar onSubmit={handleSubmit}>
      <input
        onChange={(event) => setSearchName(event.target.value)}
        value={searchName}
        placeholder="Digitar pesquisa"
        type="text"
      />
      <button className="btn-df" type="submit">
        Pesquisar
      </button>
    </SearchBar>
  );
}

export default Search;
