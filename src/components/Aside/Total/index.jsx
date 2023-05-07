import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "./style.js";

function Total({ setCart, total, setTotal }) {
  function handleRemoveAll() {
    toast("Carrinho limpo!", {
      position: "top-center",
      autoClose: 1500,
      theme: "colored",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
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
      <ToastContainer />
    </Container>
  );
}

export default Total;
