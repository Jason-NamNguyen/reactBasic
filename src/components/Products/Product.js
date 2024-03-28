import "./Product.scss"
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import ProductSize from "./ProductSize";
import chair1 from "../../assets/images/chair1.jpeg"
import chair2 from "../../assets/images/chair2.jpeg"
import chair3 from "../../assets/images/chair3.jpeg"
import chair4 from "../../assets/images/chair4.jpeg"
const Product = () => {
    const [ImageUp, setImageUp] = useState(chair1)
    const [OpenLightBox, setOpenLightBox] = useState(false)
    const [PhotoIndex, setPhotoIndex] = useState(0)
    const slides = [
        { src: chair1 },
        { src: chair2 },
        { src: chair3 },
        { src: chair4 },

    ]
    const handleClickPreviewImage = () => {
        let index = slides.findIndex(item => item === ImageUp);
        setPhotoIndex(index);
        setOpenLightBox(true);
        console.log("check PhotoIndex: ", PhotoIndex + " OpenLightBox: ", OpenLightBox + " index ", index)
    }
    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="image-up">
                        <img src={ImageUp} onClick={() => handleClickPreviewImage()}></img>
                    </div>
                    <div className="image-list">
                        <div className="image-small">
                            <img className={ImageUp === chair1 ? "active-image" : ""} src={chair1} onClick={() => setImageUp(chair1)}></img>
                        </div>
                        <div className="image-small">
                            <img className={ImageUp === chair2 ? "active-image" : ""} src={chair2} onClick={() => setImageUp(chair2)}></img>
                        </div>
                        <div className="image-small">
                            <img className={ImageUp === chair3 ? "active-image" : ""} src={chair3} onClick={() => setImageUp(chair3)}></img>
                        </div>
                        <div className="image-small">
                            <img className={ImageUp === chair4 ? "active-image" : ""} src={chair4} onClick={() => setImageUp(chair4)}></img>
                        </div>
                    </div>
                </div>
                <div className="content-right">
                    <div className="product-title">Ghế Công Thái Học Lumbar 03</div>
                    <div className="product-prize"> 3.200.100 đ</div>
                    <div className="product-size">
                        <ProductSize />
                    </div>
                    <div>
                        <div className="procduct-quantity">Quantity</div>
                        <input className="product-quantity" min={1} type="number"></input>
                    </div>
                    <button className="product-buy-now">Buy Now</button>
                </div>
            </div>
            {OpenLightBox &&
                <Lightbox
                    open={PhotoIndex}
                    close={() => setOpenLightBox(false)}
                    slides={slides}
                    plugins={[Thumbnails]}

                />

            }

        </div>
    )
}
export default Product