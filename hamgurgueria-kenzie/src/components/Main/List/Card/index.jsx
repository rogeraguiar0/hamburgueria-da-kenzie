import { Container, ImageContainer, DescriptionContainer } from "./style.js";

function Card({ updateProducts, cart, setCart, total, setTotal }) {
  function handleCart(index) {
    setCart([...cart, updateProducts[index]]);
    setTotal(total + updateProducts[index].price);
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
      </Container>
    );
  });
}

export default Card;
