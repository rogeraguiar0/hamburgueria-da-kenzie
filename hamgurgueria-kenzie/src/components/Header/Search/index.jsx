import SearchBar from "./style.js";

function Search() {
  return (
    <SearchBar>
      <input placeholder="Digitar pesquisa" type="text" />
      <button className="btn-df" type="submit">
        Pesquisar
      </button>
    </SearchBar>
  );
}

export default Search;
