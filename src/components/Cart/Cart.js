import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import { useStore, actions } from '../../store'

const Cart = ({ onCloseCart }) => {
    const [state, dispatch] = useStore();         // tạo ra store mà có thể sử dụng đc ở tất cả các file 

    // them so luong san pham 
    const handleOnAddToCart = (item) => {           
        dispatch(actions.addItemCart({...item, amount: 1}))
    }
    // giam so luong sp
    const handleOnRemoveToCart = (item) => {
        dispatch(actions.removeItemCart(item))
    }
    // tinh gia
    const totalAmount = `$${state.totalAmount.toFixed(2)}`

    const hasItems = state.items.length > 0

    return (
        <Modal onCloseModal={onCloseCart}>
            <ul className={classes['cart-items']}>
                {state.items.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onAdd={handleOnAddToCart}
                        onRemove={handleOnRemoveToCart}
                    >
                    </CartItem>
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onCloseCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;