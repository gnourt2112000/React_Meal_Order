import { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const handleShowCart = () => {
    setCartIsShown(true);
  };
  const handleCloseCart = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={handleCloseCart}></Cart>}
      <Header onShowCart={handleShowCart}></Header>
    </CartProvider>
  );
}

export default App;
