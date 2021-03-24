
function Cart(props) {
    let goodsObj = props.goodsObj;
    let goods = props.goods;

    return (
        <>
             <h3 className='cart-title'>Shopping Cart</h3>
            <div className='cart-goods' >

                {Object.keys(goods).map(key =>
                    <div className="cart-item" key={key}>
                        <img src={goodsObj[key]['image']} alt="" className='cart-img' />
                        <div className='cart-name'>{goodsObj[key]['title']}</div>
                        <div className='cart-col'>
                            <span className='cart-input'>{goods[key]}</span>
                            <span className='cart-x'>X</span>
                            <span className='cart-price'> {+goodsObj[key]['price'] * +goods[key]}</span>
                        </div>
                        <button className='cart-trash' data-key={goodsObj[key]['articul']} data-count={goods[key]}><i className="fas fa-trash-alt "></i></button>
                    </div>
                )}
                <hr className='hr' />
                <div className="cart-footer">
                    <div className="cart-title"><span className='cart-price'></span> <span className='cart-delivery'> Delivery is free!</span> </div>
                    <button className='price-btn'>Buy a set</button>
                </div>
            </div>
        </>
    )
}

export default Cart;