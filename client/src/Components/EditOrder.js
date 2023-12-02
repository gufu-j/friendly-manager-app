import React from "react";
import { useState } from "react";
import "./Modal.css";
// import { UserContext } from "./context/user";
// import { useContext } from "react";

function EditOrder({organized_order, handleUpdateReview}) {


  // const {store, setStore} = useContext(UserContext)


  const [box, setBox] = useState(false);

  const [quantity, setQuantity] = useState(organized_order.quantity)

  const [note, setNote]= useState(organized_order.note)

  let quantityInterger = parseInt(quantity)

  const toggleModal = () => {
    setBox(!box);
  };


  
      function handleSubmit(e){
      e.preventDefault();
      fetch(`/orders/${organized_order.id}`,{
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


    if(box) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }


  return (
    <>
      <button onClick={toggleModal} className="buttom">
        Edit
      </button>
        {box && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
             <div className="modal-content">
               <div >
                 <h2>Edit order</h2>
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
                    <button type="submit"  className="close-modal-one" > Update Review </button>
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
  );
}

export default EditOrder