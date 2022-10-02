import Container from "./style.js";

function Total() {
  return (
    <Container>
      <div>
        <p>Total</p>
        <span>R$ 40,00</span>
      </div>
      <button className="btn-vr">Remover todos</button>
    </Container>
  );
}

export default Total;
