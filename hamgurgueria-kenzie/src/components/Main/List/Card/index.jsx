import { Container, ImageContainer, DescriptionContainer } from "./style.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ updateProducts, cart, setCart, total, setTotal }) {
  function handleCart(index) {
    if (cart.includes(updateProducts[index])) {
      toast.error("Não é permitido adicionar itens duplicados no carrinho!", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Item adicionado ao carrinho!", {
        position: "top-center",
        autoClose: 1500,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      setCart([...cart, updateProducts[index]]);
      setTotal(total + updateProducts[index].price);
    }
  }

  return updateProducts.map((elem, index) => {
    return (
      <Container key={index}>
        <ImageContainer>
          <img src={elem.img} alt="" />
        </ImageContainer>
        <DescriptionContainer>
          <h4>{elem.name}</h4>
          <p>{elem.category}</p>
          <span>
            {elem.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <button onClick={() => handleCart(index)} className="btn-df">
            Adicionar
          </button>
        </DescriptionContainer>
        <ToastContainer />
      </Container>
    );
  });
}

export default Card;
