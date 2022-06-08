import { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import { StoreProvider } from './store';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const handleShowCart = () => {
    setCartIsShown(true);
  };
  const handleCloseCart = () => {
    setCartIsShown(false);
  };

  return (
    <StoreProvider>
      {cartIsShown && <Cart onCloseCart={handleCloseCart}></Cart>}
      <Header onShowCart={handleShowCart}></Header>
      <main>
        <Meals></Meals>
      </main>
    </StoreProvider>
  );
}

export default App;
