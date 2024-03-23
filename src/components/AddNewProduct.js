import { useState } from "react";
const AddNewProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState("");
    const [showDetail, setShowDetail] = useState(false);
    const handleClickButton = () => {
        let object = { name, price, size, color }
        console.log(">>Check Data", object)

        let productList = localStorage.getItem("productList")
        if (productList) {
            let array = JSON.parse(productList)
            array.push(object)
            localStorage.setItem("productList", JSON.stringify(array))
        }
        else {
            localStorage.setItem("productList", JSON.stringify([object]))

        }
        setName("")
        setPrice(0)
        setSize(0)
        setColor("")
    }
    const handleHideShow = () => {
        setShowDetail(!showDetail)
        console.log(">Show Detail: ", !showDetail)
    }

    return (
        <div>
            {
                showDetail === true &&
                <fieldset >
                    <legend>Add New Product</legend>
                    <div className="input-product">
                        <label>Product's Name</label>
                        <input value={name} type="text" onChange={(event) => { setName(event.target.value) }}></input>
                    </div>
                    <div className="input-product">
                        <label>Price</label>
                        <input value={price} type="text" onChange={(event) => { setPrice(event.target.value) }}></input>
                    </div>
                    <div className="input-product">
                        <label>Size</label>
                        <input value={size} type="text" onChange={(event) => { setSize(event.target.value) }}></input>
                    </div>
                    <div className="input-product">
                        <label>Color</label>
                        <input value={color} type="text" onChange={(event) => { setColor(event.target.value) }}></input>
                    </div> <br />
                    <div>
                        <button onClick={() => handleClickButton()}> Add Product</button>
                    </div>

                </fieldset>
            }
            {
                showDetail === true ?
                    <button onClick={() => { handleHideShow() }}>Hide Detail </button>
                    :
                    <button onClick={() => { handleHideShow() }}>Show Detail </button>

            }
            <fieldset>
                <legend>List Product</legend>
                <div> {localStorage.getItem("productList")}</div>
            </fieldset>

        </div>
    )
}
export default AddNewProduct