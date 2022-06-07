import { useState } from "react";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import MealItem from "./components/Meals/MealItem/MealItem";
import MealsSummary from "./components/Meals/MealsSummary";

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

			<MealItem
				id="m1"
				name="Sushi"
				description="Finest fish and veggies"
				price={22.99}
			></MealItem>
		</CartProvider>
	);
}

export default App;
