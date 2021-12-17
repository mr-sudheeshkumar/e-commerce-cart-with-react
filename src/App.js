import Header from "./components/Header";
import Main from "./components/Main";
import Baksket from "./components/Basket";
import data from "./data";
import { useState } from "react";
import Product from "./components/Product";

function App() {
  const { products } = data;
  const [cartItems, setcartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setcartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setcartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setcartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setcartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className="row">
        <Main onAdd={onAdd} products={products}></Main>
        <Baksket
          onAdd={onAdd}
          onRemove={onRemove}
          cartItems={cartItems}
        ></Baksket>
      </div>
    </div>
  );
}

export default App;
