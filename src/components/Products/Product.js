import "./Product.scss"
import { useState } from "react";
import chair1 from "../../assets/images/chair1.jpeg"
import chair2 from "../../assets/images/chair2.jpeg"
import chair3 from "../../assets/images/chair3.jpeg"
import chair4 from "../../assets/images/chair4.jpeg"
const Product = () => {
    const [ImageUp, setImageUp] = useState("")

    return (
        <div className="product-container">
            <div className="content-left">
                <div className="image-up">
                    <img src={ImageUp} ></img>
                </div>
                <div className="image-list">
                    <div className="image-small">
                        <img src={chair1} onClick={() => setImageUp(chair1)}></img>
                    </div>
                    <div className="image-small">
                        <img src={chair2} onClick={() => setImageUp(chair2)}></img>
                    </div>
                    <div className="image-small">
                        <img src={chair3} onClick={() => setImageUp(chair3)}></img>
                    </div>
                    <div className="image-small">
                        <img src={chair4} onClick={() => setImageUp(chair4)}></img>
                    </div>
                </div>
            </div>
            <div className="content-right">
                <div className="product-title">Title Product</div>
                <div className="product-prize"> 3.200.100 đ</div>
                <div className="product-size">Size</div>
                <div>
                    <div className="procduct-quantity">Quantity</div>
                    <input className="product-quantity" min={1} type="number"></input>
                </div>
                <button className="product-buy-now">Buy Now</button>
            </div>
        </div>
    )
}
export default Product