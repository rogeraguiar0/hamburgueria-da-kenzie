import { Container, NotFound } from "./style.js";
import List from "./List";

function Main({ updateProducts, cart, setCart, total, setTotal }) {
  return (
    <Container>
      {updateProducts.length ? (
        <List
          updateProducts={updateProducts}
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
        />
      ) : (
        <NotFound>
          <h3>Nenhum item foi encontrado!</h3>
        </NotFound>
      )}
    </Container>
  );
}

export default Main;
