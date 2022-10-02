import {
  Container,
  Card,
  ImageContainer,
  DescriptionContainer,
  NotFound,
} from "./style.js";

function Main({ updateProducts, cart, setCart, total, setTotal }) {
  function handleCart(index) {
    setCart([...cart, updateProducts[index]]);
    setTotal(total + updateProducts[index].price);
  }

  return (
    <Container>
      {updateProducts.length ? (
        <ul>
          {updateProducts.map((elem, index) => (
            <Card key={elem.id}>
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
            </Card>
          ))}
        </ul>
      ) : (
        <NotFound>
          <h3>Nenhum item foi encontrado!</h3>
        </NotFound>
      )}
    </Container>
  );
}

export default Main;
