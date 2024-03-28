import "./ProductSize.scss"
import { useState } from "react"
const ProductSize = () => {
    const [isSize, setisSize] = useState("")
    const clickSize = () => {
        setisSize = (value)
    }
    return (
        <div className="product-size">
            <div> Size</div>
            <div className="list-size">
                <div className={isSize} onClick={() => clickSize()}>31</div>
                <div className={isSize} value="33" onClick={() => clickSize()}>33</div>
                <div className={isSize} onClick={() => clickSize()}>34</div>
                <div className={isSize} onClick={() => clickSize()}>35</div>
                <div className={isSize} onClick={() => clickSize()}>36</div>
                <div className={isSize} onClick={() => clickSize()}>37</div>
                <div className={isSize} onClick={() => clickSize()}>38</div>
                <div className={isSize} onClick={() => clickSize()}>32</div>
            </div>
        </div>
    )
}
export default ProductSize