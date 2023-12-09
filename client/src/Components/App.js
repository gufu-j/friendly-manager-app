
import './App.css';
import {Route, Routes} from "react-router-dom";
import React from 'react';
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
import DailyProduct from './DailyProducts';


function App() {

  // const [admin, setAdmin] = useState(false);

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
                    <Route exact path="/business_orders" element={<Order />}/>
                    <Route exact path="/make_orders" element={<OrderForm/>}/>
                    <Route exact path= "/stores_all/:id" element={ <StoreDetail/> }/>
                    <Route exact path= "/admin_orders" element={ <OrdersAdmin/> }/>
                    <Route exact path= "/products" element={<ProductsAdmin/>} />
                    <Route exact path= "/total_products" element={<DailyProduct/>} />
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
