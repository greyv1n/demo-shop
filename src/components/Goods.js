
function Goods({category, image, title, price, articul}) {
    
    return (
        <>
             <div className="p-box" data-key={articul}>
                <b>{category.toUpperCase()}</b>
                <img alt={category} src={image} />
                <p>{title}</p>
                <p className="price"><b>{price} $</b></p>
                <a className="buy-btn" href="/" id={articul}>Add To Cart</a>
            </div>
        </>
    )
}

export default Goods;