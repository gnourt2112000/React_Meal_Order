import { 
    ADD_ITEM_CART,
    REMOVE_ITEM_CART
} from './constants'

export const addItemCart = payload => ({
    type: ADD_ITEM_CART,
    payload
})

export const removeItemCart = payload => ({
    type: REMOVE_ITEM_CART,
    payload
})