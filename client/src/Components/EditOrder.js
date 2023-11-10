import React from "react";
import { useState } from "react";
import "./Modal.css";
import { UserContext } from "./context/user";
import { useContext } from "react";

function EditOrder({order}) {


  const {store, setStore} = useContext(UserContext)
  // console.log(store)


  const [box, setBox] = useState(false);

  const [quantity, setQuantity] = useState(order.quantity)
    const [note, setNote]= useState(order.note)

    let quantityInterger = parseInt(quantity)

  const toggleModal = () => {
    setBox(!box);
  };


  
      function handleSubmit(e){
      e.preventDefault();
      fetch(`/orders/${order.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                note: note,
                quantity: quantityInterger,
            }),
        })
        .then((r) => r.json())
        .then((updatedOrder) => handleUpdateReview(updatedOrder))
    }





    function handleUpdateReview(updatedOrder){
  
      const storeOrders = store.orders.map((or) => {
        if(or.id === updatedOrder.id){
          return updatedOrder
        }else{
          return or
        }
      })

      setStore({...store, orders: storeOrders})
    }





  return (
    <>
      <button onClick={toggleModal}>
        Edit
      </button>
      {box && (
        <div >
          <div onClick={toggleModal}></div>
          <div >
            <h2>Hello Modal</h2>
         <form onSubmit={handleSubmit} >
          <input
          type="text"
          name="quantity"
          value={quantity}
          onChange={(e)=> setQuantity(e.target.value)} 
          placeholder="quantity"     
          />
          <input
          type="text"
          name="note"
          value={note}
          onChange={(e)=> setNote(e.target.value)} 
          placeholder="note" 
          />
         <button type="submit"  > Update Review </button>
          </form> 
          </div>
          <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
        </div>
      )}
    </>
  );
}

export default EditOrder