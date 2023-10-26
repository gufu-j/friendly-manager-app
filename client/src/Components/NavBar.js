import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./context/user";

function NavBar({}){

    const {user, logout, loggedIn} = useContext(UserContext)
    
    const navigate = useNavigate()

    function handleLogout(){
        fetch('/logout', {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'}
        })
        .then(()=> {
            logout()
            navigate('/')
        })
    }


    if(loggedIn){
        return(
            <div>
                <h1>Hello {user.username}</h1>
                <Link to='/'>
                    <button className="button-54" role="button">Home</button>
                </Link> 
                <button className="button-54" role="button" onClick={handleLogout}> Logout </button>
            </div>
        )
    }else{
        return (
            <div>
                <Link to='/login'>
                    <button className="button-54" role="button" >Login</button>
                </Link>
                <Link to='/signup'>
                    <button className="button-54" role="button" >Signup</button>
                </Link>
                <Link to='/'>
                    <button className="button-54" role="button" >home</button>
                </Link>
                <hr/>
            </div>
        )
    } 
}

export default NavBar

