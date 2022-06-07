import { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import MealItem from "./components/Meals/MealItem/MealItem";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";

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
			<MealsSummary></MealsSummary>
			<AvailableMeals></AvailableMeals>
		</CartProvider>
	);
}

export default App;
