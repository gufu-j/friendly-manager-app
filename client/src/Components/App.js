import './App.css';
import {Route, Routes} from "react-router-dom";
import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { UserProvider } from './context/user';
import NavBar from './NavBar';


import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  return (
    <div>
      <UserProvider>
        <NavBar/>
          <Routes>
            <Route exact path="/login" element={ <Login  /> } />
              <Route exact path="/signup" element={ <SignUp /> }/>
                <Route exact path="/" element={ <Home   /> } />
          </Routes>
    </UserProvider>
    </div>
  );
}

export default App;