import { useState, useEffect } from "react";
import "./styles/index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const updateProducts = products.filter((elem) => {
    return search === ""
      ? true
      : elem.name.includes(search) || elem.category.includes(search);
  });

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((resp) => resp.json())
      .then((resp) => setProducts(resp))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <div className="container">
        <Main
          updateProducts={updateProducts}
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
        />
        <Aside
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
          updateProducts={updateProducts}
        />
      </div>
    </div>
  );
}

export default App;
