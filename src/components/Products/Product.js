import "./Product.scss"
const Product = () => {
    return (
        <div className="product-container">
            <div className="content-left">
                Content Left
            </div>
            <div className="content-right">
                <div className="product-title">Title Product</div>
                <div className="product-prize"> 3.200.100 đ</div>
                <div className="product-size">Size</div>
                <div>
                    <input className="product-quantity" min={1} type="number"></input>
                    <button className="product-buy-now">Buy Now</button>
                </div>
            </div>
        </div>
    )
}
export default Product