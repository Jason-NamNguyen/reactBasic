import "./ProductSize.scss"
import { useState } from "react"
const ProductSize = () => {
    const [isSize, setisSize] = useState("")
    // const clickSize = () => {
    //     setisSize = (value)
    // }
    return (
        <div className="product-size">
            <div className="title-size"> Size</div>
            <div className="list-size">
                <div className={isSize === "31" ? "active-size" : ""} onClick={() => setisSize("31")}>31</div>
                <div className={isSize === "32" ? "active-size" : ""} onClick={() => setisSize("32")}>32</div>
                <div className={isSize === "33" ? "active-size" : ""} onClick={() => setisSize("33")}>33</div>
                <div className={isSize === "34" ? "active-size" : ""} onClick={() => setisSize("34")}>34</div>
                <div className={isSize === "35" ? "active-size" : ""} onClick={() => setisSize("35")}>35</div>
                <div className={isSize === "36" ? "active-size" : ""} onClick={() => setisSize("36")}>36</div>
                <div className={isSize === "37" ? "active-size" : ""} onClick={() => setisSize("37")}>37</div>
                <div className={isSize === "38" ? "active-size" : ""} onClick={() => setisSize("38")}>38</div>
            </div>
        </div >
    )
}
export default ProductSize