import { Container } from "./style.js";
import Card from "./Card";

function List({ updateProducts, cart, setCart, total, setTotal }) {
  return (
    <Container>
      <Card
        updateProducts={updateProducts}
        cart={cart}
        setCart={setCart}
        total={total}
        setTotal={setTotal}
      />
    </Container>
  );
}

export default List;
