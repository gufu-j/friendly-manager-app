import './App.css';
import {Route, Routes} from "react-router-dom";
import React from 'react';
import { useState } from 'react';
import { UserProvider } from './context/user';
import NavBar from './NavBar';




import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Order from './Order';


function App() {

  const [admin, setAdmin] = useState(false);

  return (
    <div>
    <div>
      <UserProvider>
        <NavBar/>
          <Routes>
            <Route exact path="/login" element={ <Login /> } />
              <Route exact path="/signup" element={ <SignUp admin= {admin}/>} />
                <Route exact path="/orders" element={<Order />}/>
                  <Route exact path="/" element={ <Home  />} />
          </Routes>
    </UserProvider>
    </div>

    </div>  
    );
}

export default App;


{/* <Route exact path="/orders" element={ <Order store={store}/>} /> */}
