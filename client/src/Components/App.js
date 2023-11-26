
import './App.css';
import {Route, Routes} from "react-router-dom";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { UserProvider } from './context/user';
import NavBar from './NavBar';

import { StoreProvider } from './context/store';
import { OrderProvider } from './context/order';
import { ProductProvider } from './context/products';


import Home from './Home';
import Login from './Login';
// import SignUp from './SignUp';
import Order from './Order';
import OrderForm from './OrderForm';
// import StorePerClick from './StorePerClick';
import StoreDetail from './StoreDetail';
import OrdersAdmin from './OrdersAdmin';
import ProductsAdmin from './ProductAdmin';


function App() {

  // const [admin, setAdmin] = useState(false);
  // const [phoneNumber, setPhoneNumber] = useState("")
  // const [location, setLocation] = useState("")

  const [products, setProducts] = useState([])

  useEffect(() =>{
      fetch(`/products`)
      .then((r) => r.json())
      .then((r) => setProducts(r))
  },[])

  return (
    <div>
    <div>
      <UserProvider>

        <StoreProvider>
          <OrderProvider>
            <ProductProvider>
                <NavBar/>
                  <Routes>
                    <Route exact path="/login" element={ <Login /> } />
                    {/* <Route exact path="/signup" element={ <SignUp admin= {admin} setAdmin={setAdmin} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} location = {location} setLocation = {setLocation}/>}/> */}
                    <Route exact path="/orders" element={<Order />}/>
                    <Route exact path="/make_orders" element={<OrderForm products={products} setProducts={setProducts}/>}/>
                    <Route exact path= "/stores/:id" element={ <StoreDetail/> }/>
                    <Route exact path= "/admin_orders" element={ <OrdersAdmin/> }/>
                    <Route exact path= "/products" element={<ProductsAdmin/>} />
                    <Route exact path="/" element={ <Home />} />
                </Routes>
            </ProductProvider>
          </OrderProvider>
        </StoreProvider>
      </UserProvider>
    </div>

    </div>  
    );
}

export default App;
