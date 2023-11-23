import React, {useState, useEffect} from "react";


const OrderContext = React.createContext();


function OrderProvider({children}){

    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        fetch(`/orders`)
        .then((r) => r.json())
        .then((r) => setOrders(r))
    },[])

    return(
        <OrderContext.Provider value={{orders, setOrders}}>
            {children}
        </OrderContext.Provider>
    );
}

export{ OrderContext, OrderProvider}