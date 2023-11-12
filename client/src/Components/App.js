import './App.css';
import {Route, Routes} from "react-router-dom";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { UserProvider } from './context/user';
import NavBar from './NavBar';


import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Order from './Order';
import OrderForm from './OrderForm';
import TotalOrders from './TotalOrders';


function App() {

  const [admin, setAdmin] = useState(false);

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
        <NavBar/>
          <Routes>
            <Route exact path="/login" element={ <Login /> } />
              <Route exact path="/signup" element={ <SignUp admin= {admin}/>}/>
                <Route exact path="/orders" element={<Order />}/>
                  <Route exact path="/make_orders" element={<OrderForm products={products} setProducts={setProducts}/>}/>
                  <Route exact path="/total_orders" element={<TotalOrders />}/>
                    <Route exact path="/" element={ <Home />} />
          </Routes>
    </UserProvider>
    </div>

    </div>  
    );
}

export default App;


{/* <Route exact path="/orders" element={ <Order store={store}/>} /> */}
