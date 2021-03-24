import { createSlice } from '@reduxjs/toolkit'
import goodsArr from '../data/goods.json'

const goodSlice = createSlice({
    name: 'Goods',
    initialState: {
        goods: goodsArr,
        filterBy: 'popular',
        filterAll: ['popular', 'high', 'low'],
        categoryBy: 'books'
    },
    reducers: {
        chengeFilter: (state, data) => {
            state.filterBy = data.payload;
        },
        chengeCategory: (state, data) => {
            state.categoryBy = data.payload;
        }
    }
})
export const { chengeFilter, chengeCategory } = goodSlice.actions;
export const selectGoods = state => state.goods.goods;
export const selectFilterAll = state => state.goods.filterAll;
export const selectFilterBy = state => state.goods.filterBy;
export const selectCategoryBy = state => state.goods.categoryBy;
export default goodSlice.reducer;