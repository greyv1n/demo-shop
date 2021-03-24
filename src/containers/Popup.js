import Cart from '../components/Cart'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chengeStatus, selectCartStatus, deleteGoods, minusCount } from '../store/cartSlice'

function Popup(props) {
    const dispatch = useDispatch();
    const cartStatus = useSelector(selectCartStatus);


    function handlerClickPopup(event) {
        if(!event.target.classList.contains('popup') && 
        !event.target.classList.contains('popup_close')) return false;
        dispatch(chengeStatus());
    }

    function handlerClickContent(event) {
        event.preventDefault();

        if(event.target.classList.contains('cart-trash') || event.target.parentNode.classList.contains('cart-trash')) {
            let data = event.target.dataset.key;
            let count = event.target.dataset.count;
            if(data === undefined) {
                data = event.target.parentNode.dataset.key;
                count = event.target.parentNode.dataset.count
            }
            dispatch(deleteGoods(data));
            dispatch(minusCount(count));
        }   
    }


    return (
        <>
            <div className='popup' 
            style={cartStatus? {display:'block'} : {display:'none'}}
            onClick={handlerClickPopup}>
                <div className='popup_content' onClick={handlerClickContent}>
                    <div className='popup_close'>x</div>
                    <Cart goods={props.goods} goodsObj={props.goodsObj} />
                </div>
            </div>
        </>
    )
}

export default Popup;