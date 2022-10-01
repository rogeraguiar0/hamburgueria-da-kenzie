import logo from "../../assets/logo.svg";
import Search from "./Search";
import Container from "./style.js";

function Header() {
  return (
    <Container>
      <div>
        <img src={logo} alt="Burguer Kenzie Logo" />
        <Search />
      </div>
    </Container>
  );
}

export default Header;
