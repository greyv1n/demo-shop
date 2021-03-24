import { configureStore } from '@reduxjs/toolkit'
import goodSlice from './goodSlice'
import cartSlice from './cartSlice'

export default configureStore ({
    reducer: {
        goods: goodSlice,
        cart: cartSlice,
    }
})