import Goods from '../components/Goods'

import { useDispatch } from 'react-redux'
import { addGoods, addCount } from '../store/cartSlice'



function GoodsList(props) {
    const goods = props.goods;
    const dispatch = useDispatch();
    let count = 0;

    function handlerClick(event) {
        event.preventDefault();
        if (!event.target.classList.contains('buy-btn')) return false;
        count++;
        dispatch(addGoods(event.target.id));
        dispatch(addCount(count))
    }

    return (
        <section className="product">
            <div className="p-heading">
                <h3>Trendy<font>Arri</font>vals</h3>
            </div>
            <div className="product-container">
                {goods.map((item, index) => <div onClick={handlerClick} key={index} ><Goods {...item} /></div>)}
            </div>
        </section>
    )
}

export default GoodsList;