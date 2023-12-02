import React, {useState, useEffect} from "react";
import { StoreContext } from "./store";
import { useContext } from "react";


const OrderContext = React.createContext();


function OrderProvider({children}){

    const [orders, setOrders] = useState([]);

    const {stores, setStores} = useContext(StoreContext)


    useEffect(() =>{
        fetch(`/orders`)
        .then((r) => r.json())
        .then((r) => setOrders(r))
    },[])


    const onUpdateOrder = (updatedOrder) => {

      const storeOrders = stores.find(s => s.id === updatedOrder.store_number).orders

      const updatedOrdersFromStoresArray = storeOrders.map((or) => {
        if(or.id === updatedOrder.id){
          return updatedOrder
        }else{
          return or;
        }
      });
  
     const updatedStores = stores.map((s) => {
        if(s.id === updatedOrder.store_number){
          return {...s, orders: updatedOrdersFromStoresArray}
          }else{
          return s;
        }
       }
      )

      const updatedOrders = orders.map((or) => {
        if(or.id === updatedOrder.id){
          return updatedOrder
        }else{
          return or;
        }
      });

      setStores(updatedStores)
      setOrders(updatedOrders);
    }


    const onDeleteOrder = (deletedOrder) => {
        console.log(deletedOrder)

        // this code bellow works to update data when deleting an order from stores array of objects.
        const storeOrderDeleted = stores.find(s => s.id === deletedOrder.store_number).orders

        const updatedOrders= storeOrderDeleted.filter((or) => or.id !== deletedOrder.id)
  
        const updatedStores = stores.map((s) => {
        if(s.id === deletedOrder.store_number){
           return {...s, orders: updatedOrders}
          }else{
          return s;
            }
         }
        )
        setStores(updatedStores)

        // this code bellow works such we can delete orders from the orders array of objects.
        console.log(storeOrderDeleted)
        const updatedItem = orders.filter((item) => item.id !== deletedOrder.id);
        setOrders(updatedItem)
    }

    return(
        <OrderContext.Provider value={{orders, setOrders, onDeleteOrder, onUpdateOrder}}>
            {children}
        </OrderContext.Provider>
    );
}

export{ OrderContext, OrderProvider}