import Container from "./style.js";

function Total({ setCart, total, setTotal }) {
  function handleRemoveAll() {
    setCart([]);
    setTotal(0);
  }

  return (
    <Container>
      <div>
        <p>Total</p>
        <span>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button onClick={handleRemoveAll} className="btn-vr">
        Remover todos
      </button>
    </Container>
  );
}

export default Total;
