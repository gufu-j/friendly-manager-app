import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./context/user";

function NavBar({}){

    const {logout, loggedIn, user} = useContext(UserContext)
    
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
                <Link to='/'>
                    <button  role="button">Home</button>
                </Link>
                
                {user.admin === true ?
                    <Link to='/total_orders'>
                    <button  role="button">Total Orders</button>
                    </Link> 
                    :
                    <Link to='/make_orders'>
                        <button  role="button">Make an Order</button>
                    </Link>
                }

                <button  role="button" onClick={handleLogout}> Logout </button>
            </div>
        )
    }else{
        return (
            <div>
                <Link to='/login'>
                    <button  role="button" >Login</button>
                </Link>
                <Link to='/signup'>
                    <button  role="button" >Signup</button>
                </Link>
                <Link to='/'>
                    <button  role="button" >home</button>
                </Link>
                <hr/>
            </div>
        )
    } 
}

export default NavBar

