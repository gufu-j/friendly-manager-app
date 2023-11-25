import React, { useState } from "react";
import { ProductContext } from "./context/products";
import { OrderContext } from "./context/order";
import { StoreContext } from "./context/store";


import { useContext } from "react";
import './Product.css';



function ProductsAdmin(){

    const {products, setProducts} = useContext(ProductContext)
    const {setOrders} = useContext(OrderContext)
    const {setStores} = useContext(StoreContext)
    

    const [newProduct, setNewProduct] = useState("")
    const [errors, setErrors] = useState([])

    // console.log(products)

    let product_list = products.map((p) =>

    <div key={p.id}>
        <div className="row_admin">
                    <div className="column_admin">
                        <div className="content">
                        <div className="cards_admin">
                        <div className="card_admin">
                                <h3>{p.name}</h3>
                                <button>🚮</button>
                                <button>✍</button>
                            </div>
                        </div>
                        </div>
                    </div>
        </div>
    </div>
             
    )

    function handleSubmitNewProduct(e){
        e.preventDefault()
        const itemData ={
            name: newProduct,
        }
        fetch("/products",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),
        })
        .then((r) => r.json())
        .then((data) =>{
            if(!data.errors){
                onAddProduct(data)
                setNewProduct("")
                // alert (`${data.name} has been added` );
                console.log(data)
                console.log(products)
            }else{
                const errorList = data.errors.map((e) => (
                    <div key={e}>
                    <ul style={{color: "red"}}>{e}</ul>
                 </div>
                ))

                setErrors(errorList)
            }

        } )
    }

    
function onAddProduct(newProduct){
    let newArr = products
    newArr.push(newProduct)    
    setProducts(newArr)
}

    return(
        <div>
            <h1>Active Products </h1>
            <form onSubmit={handleSubmitNewProduct}>
                <input type= "text" id= "product" value={newProduct} onChange={(e) => setNewProduct(e.target.value)} placeholder="Name of Product"/>
                <button type="submit" id="submitBtn" className="button" > add product </button>
                {errors}
            </form>
               {product_list}
        </div>
    )
}

export default ProductsAdmin