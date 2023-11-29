import React from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "./context/store";
import { useContext } from "react";

function StoreDetail(){

    let {id} = useParams();

    const {stores} = useContext(StoreContext)

    const singleStore = stores.find((el) => el.id === parseInt(`${id}`))

    return(
        <div>
            <h1>Orders from Store {id}</h1>
            {singleStore? singleStore.orders.map((e) => 
            <div key={e.id}>
                <div className="row">
                 <div className="column">
                    <div className="content">
                        <div className="cards">
                            <div className="card">
                                <h3>{e.product_name}</h3>
                                    <p>Quantity:  {e.quantity}</p>
                                        <p>Note: {e.note}</p>
                                         <p>{new Date(e.created_at).toDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> ) : null }
        </div>
    )
}

export default StoreDetail