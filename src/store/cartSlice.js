import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        item: {},
        count: 0,
        cartStatus: false
    },
    reducers: {
        addGoods: (state, data) => {
            let good = data.payload;
            state.item[good] === undefined ? state.item[good] = 1 : state.item[good]++;
        },
        deleteGoods: (state, data) => {
            delete state.item[data.payload];
        },
        addCount: state => {
            state.count++;
        },
        minusCount: (state, data) => {
            state.count = +state.count - +data.payload;
        },
        chengeStatus: (state) => {
            state.cartStatus ? state.cartStatus = false : state.cartStatus = true;
        }
    }
})

export const {addGoods, addCount, minusCount, deleteGoods, chengeStatus} = cartSlice.actions;
export const selectItem = state => state.cart.item;
export const selectCount = state => state.cart.count;
export const selectCartStatus = state => state.cart.cartStatus;

export default cartSlice.reducer;