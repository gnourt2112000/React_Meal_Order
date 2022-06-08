import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import { useStore, actions } from '../../../store'

const MealItem = ({meal}) => {
    const [state, dispatch] = useStore();

    const price = `$${meal.price.toFixed(2)}`;

    const handleOnAddToCart = (amount) => {
        dispatch(actions.addItemCart({...meal, amount: amount}))
    }
    
    return (
        <li className={classes.meal}>
            <h3>{meal.name}</h3>
            <div className={classes.description}>{meal.description}</div>
            <div className={classes.price}>{price}</div>
            <MealItemForm id={meal.id} onAddToCart={handleOnAddToCart}></MealItemForm>
        </li>
    )
}
export default MealItem