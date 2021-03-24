import GoodsList from './GoodsList'

import React from 'react'
import { useSelector } from 'react-redux'
import { selectGoods, selectFilterBy, selectCategoryBy } from '../store/goodSlice'

function SortList() {
    const goods = useSelector(selectGoods);
    const filter = useSelector(selectFilterBy);
    const category = useSelector(selectCategoryBy);

    let goodsObj = goods.filter(item => item.category === category);

    function lowFilter() {
        goodsObj.sort((a, b) => a.price - b.price);
    }
    function highFilter() {
        goodsObj.sort((a, b) => b.price - a.price);
    }
 
    function compare(chengeFilter, func) {
        if (filter === chengeFilter) func();
    }

    compare('low', lowFilter);
    compare('high', highFilter);


    return (
        <>
            <GoodsList goods={goodsObj} />
        </>
    )

}

export default SortList;