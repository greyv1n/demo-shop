
function Category(props) {
    const categoryArr = props.categoryArr;
    const count = props.count;

    return (
        <>
            <nav>
                <div className="social-call">
                    <div className="phone">
                        <span>Call: +123456789</span>
                    </div>
                </div>
                <div className="navigation">
                   <ul className='menu'>
                   {categoryArr.map((item, index) =><li key={index} className='menu_link'><a href="/" data-name={item}>{item.toUpperCase()}</a></li>)}

                   </ul>

                    <a href="/" className="add-cart">
                        <i className="fas fa-shopping-cart">
                            <span className="num-cart-product">{count}</span>
                        </i>
                    </a>

                </div>
            </nav>
        </>
    )
}

export default Category;