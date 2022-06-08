import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import { useRef } from 'react'

const MealItemForm = ({id, onAddToCart}) => {
    const amountInputRef = useRef()
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const amount = +amountInputRef.current.value
        onAddToCart(amount)
    }

    return (
        <form className={classes.form} onSubmit={handleOnSubmit}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    'id': 'amount' + id,
                    'type': 'number',
                    'min': '1',
                    'max': '5',
                    'defaultValue': '1',
                    'step': '1'
                }}
            >     
            </Input>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm