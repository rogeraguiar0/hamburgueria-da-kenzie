import Container from "./style.js";
import Total from "./Total";

function Aside() {
  return (
    <Container>
      <div className="title">
        <h2>Carrinho de compras</h2>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Total />
    </Container>
  );
}

export default Aside;
