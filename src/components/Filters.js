

function FiltersProduct(props) {
    
    const filters = props.filters;

    return (
        <>
            <section className="product">
                <h3 className='product__title'> Filter <span className='blue'>Goods</span></h3>
                <div>
                    <ul className='product__wrap'>
                       { filters.map((item, index) => <li key={index} className='product__link' name={item}>{item.toLowerCase()}</li>)}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default FiltersProduct;