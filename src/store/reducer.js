import { 
    ADD_ITEM_CART,
    REMOVE_ITEM_CART
} from './constants'

const initState = {
    items: [],
    totalAmount: 0
}

function reducer(state, action) {
    let updateItems, updateItem;
    let newTotalAmount;
    let existingCartIndex
    let existingCartItem

    switch (action.type) {
        case REMOVE_ITEM_CART: 
            existingCartIndex = state.items.findIndex(item => item.id === action.payload.id);
            existingCartItem = state.items[existingCartIndex];
            if (existingCartItem.amount > 1) {
                updateItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount -1
                }
                updateItems = [...state.items]
                updateItems[existingCartIndex] = updateItem
            } else if (existingCartItem.amount === 1) {
                updateItems = [...state.items].filter(item => {return item.id !== action.payload.id})
            }
            newTotalAmount = state.totalAmount - existingCartItem.price
            return {
                ...state,
                items: updateItems,
                totalAmount: newTotalAmount
            }
        case ADD_ITEM_CART: 
            existingCartIndex = state.items.findIndex(item => item.id === action.payload.id)
            existingCartItem = state.items[existingCartIndex]
            if (existingCartItem) {
                updateItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount
                }
                updateItems = [...state.items]
                updateItems[existingCartIndex] = updateItem
            } else {
                updateItems = [...state.items,action.payload]
            }
            newTotalAmount = state.totalAmount + action.payload.amount * action.payload.price
            return {
                ...state,
                items: updateItems,
                totalAmount: newTotalAmount
            }
        default:
            throw new Error('Invalid action')
    }
}

export {initState}
export default reducer