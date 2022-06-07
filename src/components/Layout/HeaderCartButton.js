import classes from './HeaderCartButton.module.css'
import { useState } from 'react'

const HeaderCartButton = (props) => {
    const [buttonIsHightLighted, setButtonIsHightLighted] = useState(false)
    const btnClasses = `${classes.button} ${buttonIsHightLighted && classes.bump}`
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>10</span>
        </button>
    )
}
export default HeaderCartButton