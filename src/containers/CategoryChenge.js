import Category from '../components/Category'

import { useSelector, useDispatch } from 'react-redux'
import { selectGoods, chengeCategory } from '../store/goodSlice'
import { selectCount, chengeStatus } from '../store/cartSlice'


function CategoryChenge() {
    const dispatch = useDispatch();
    const allGoods = useSelector(selectGoods);
    const count = useSelector(selectCount);


    let setCategory = new Set();
    allGoods.map(item => setCategory.add(item.category));
    let categoryArr = Array.from(setCategory);


    function handlerClick(event) {
        event.preventDefault();
        if (event.target.dataset.name) {
            let categoryActive = event.target.dataset.name;
            dispatch(chengeCategory(categoryActive));
        }
        if (event.target.classList.contains('fa-shopping-cart') ||
            event.target.classList.contains('num-cart-product')) {
            dispatch(chengeStatus());
        }
    }

    return (
        <>
            <div onClick={handlerClick}>
                <Category categoryArr={categoryArr} count={count} />
            </div>
        </>
    )
}

export default CategoryChenge;