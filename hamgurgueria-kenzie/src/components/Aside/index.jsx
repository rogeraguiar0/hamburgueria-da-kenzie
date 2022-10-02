import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Card, Empty } from "./style.js";
import Total from "./Total";

function Aside({ cart, setCart, total, setTotal }) {
  function handleRemove(index) {
    toast.success("Item removido com sucesso!", {
      position: "top-center",
      autoClose: 1500,
      theme: "colored",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    setCart(cart.filter((elem, elemIndex) => elemIndex !== index));
    setTotal(total - cart[index].price);
  }

  return (
    <Container>
      <div className="title">
        <h2>Carrinho de compras</h2>
      </div>
      {cart.length ? (
        <>
          <ul>
            {cart.map((elem, index) => (
              <Card key={index}>
                <div className="content">
                  <img src={elem.img} alt="" />
                  <div className="description">
                    <h4>{elem.name}</h4>
                    <span>{elem.category}</span>
                  </div>
                </div>
                <button onClick={() => handleRemove(index)}>Remover</button>
              </Card>
            ))}
          </ul>
          <Total setCart={setCart} total={total} setTotal={setTotal} />
          <ToastContainer />
        </>
      ) : (
        <Empty>
          <h3>Sua sacola está vazia</h3>
          <p>Adicione itens</p>
        </Empty>
      )}
    </Container>
  );
}

export default Aside;
