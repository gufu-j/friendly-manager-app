import React from "react";
import { useState } from "react";


function EditProductAdmin({product, handleUpdate}){

    const [productName, setProductName]= useState(product.name)
    const [errors, setErrors] = useState([])
    
    function handleSubmit(e){
        e.preventDefault();
        fetch(`/products/${product.id}`,{
              method: "PATCH",
              headers: {
                  "Content-Type": "application/json",
              },
  
              body: JSON.stringify({
                 name: productName
              }),
          })
          .then((r) => r.json())
          .then( (updatedProduct) =>{
            if(!updatedProduct.errors){
              handleUpdate(updatedProduct)
              alert (`"${product.name}" has been updated to "${productName}", please notify managersfrom ` );
            } else {
              const errorLis = updatedProduct.errors.map((e) => (
                <div key={e}>
                   <ul style={{color: "red"}}>{e}</ul>
                </div>
               ))
               setErrors(errorLis)
            }
          })
        }     

     const [editBox, setEditBox] = useState(false);

      const toggleModal = () => {
        setEditBox(!editBox);
      };
    
      if(editBox) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

    return(
        <div>
  <>
      <button onClick={toggleModal} className="btn_product_admin">
      ✍
      </button>
        {editBox && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
             <div className="modal-content">
               <div >
                 <h2>Edit Product</h2>
                  <form onSubmit={handleSubmit} >
                    <input
                    type="text"
                    name="product"
                    value={productName}
                    onChange={(e)=> setProductName(e.target.value)} 
                    placeholder="product"     
                    />
                    <button type="submit"  className="close-modal-one" > Update Product </button>
                    {errors}
                   </form> 
                 </div>
                  <button className="close-modal-two" onClick={toggleModal}>
                   Close
                  </button>
                 </div>
              </div>
            )
          }
    </>
        </div>
    )
}

export default EditProductAdmin