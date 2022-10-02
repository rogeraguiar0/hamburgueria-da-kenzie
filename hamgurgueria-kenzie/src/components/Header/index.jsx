import logo from "../../assets/logo.svg";
import Search from "./Search";
import Container from "./style.js";

function Header({ setSearch }) {
  return (
    <Container>
      <div>
        <img src={logo} alt="Burguer Kenzie Logo" />
        <Search setSearch={setSearch} />
      </div>
    </Container>
  );
}

export default Header;
