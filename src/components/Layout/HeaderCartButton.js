import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useEffect, useState } from 'react'
import { useStore } from '../../store'

const HeaderCartButton = ({ onClick }) => {
    const [state] = useStore();

    const [buttonIsHightLighted, setButtonIsHightLighted] = useState(false)

    useEffect(() => {
        if (state.items.length === 0)
            return
        setButtonIsHightLighted(true)
        const timer = setTimeout(() => {
            setButtonIsHightLighted(false)
        }, 300)
        return () => {
            clearTimeout(timer)
        }       
    },[state.items])

    const numberOfCartItems = state.items.reduce((total, currentItem) => { 
        return total + currentItem.amount 
    }, 0)

    const btnClasses = `${classes.button} ${buttonIsHightLighted && classes.bump}`
   
    return (
        <button className={btnClasses} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton