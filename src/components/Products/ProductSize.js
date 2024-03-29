import "./ProductSize.scss"
import { useState } from "react"
const ProductSize = () => {
    const [isSize, setisSize] = useState("")
    // const clickSize = () => {
    //     setisSize = (value)
    // }
    return (
        <div className="product-size">
            <div> Size</div>
            <div className="list-size">
                <div className={isSize === "31" ? "active-size" : ""} onClick={() => setisSize("31")}>31</div>
                <div className={isSize === "32" ? "active-size" : ""} onClick={() => setisSize("32")}>33</div>
                <div className={isSize === "33" ? "active-size" : ""} onClick={() => setisSize("33")}>34</div>
                <div className={isSize === "34" ? "active-size" : ""} onClick={() => setisSize("34")}>35</div>
                <div className={isSize === "35" ? "active-size" : ""} onClick={() => setisSize("35")}>36</div>
                <div className={isSize === "36" ? "active-size" : ""} onClick={() => setisSize("36")}>37</div>
                <div className={isSize === "37" ? "active-size" : ""} onClick={() => setisSize("37")}>38</div>
                <div className={isSize === "38" ? "active-size" : ""} onClick={() => setisSize("38")}>32</div>
            </div>
        </div >
    )
}
export default ProductSize