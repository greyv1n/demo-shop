import Popup from './Popup'

import { useSelector } from 'react-redux'
import { selectGoods } from '../store/goodSlice'
import { selectItem } from '../store/cartSlice'

function CartList() {

    const arr = useSelector(selectGoods);
    const goods = useSelector(selectItem)

    const goodsObj = arr.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
    }, {})


    return (
        <div>
            <Popup goods={goods} goodsObj={goodsObj} />
        </div>
    )
}

export default CartList;