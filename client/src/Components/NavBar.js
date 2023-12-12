import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./context/user";

function NavBar(){

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
            <div >    
                {user.admin === true ?
                    <div>
                        <Link to='/'>
                        <button className="button1"  >Home</button>
                        </Link>
                            <Link to="/admin_orders">
                            <button className="button2" >All Orders</button>
                            </Link>
                                <Link to="/api_products">
                                <button  className="button1">Products</button>
                                </Link>
                                    <Link to="/total_products">
                                    <button className="button4"> Todays' Orders List </button>
                                    </Link>
                                    <button   onClick={handleLogout} className="button5"> Logout </button>
                    </div>
                        :
                    <div>
                        <Link to='/'>
                        <button className="button1"  >Home</button>
                        </Link>
                            <Link to='/make_orders'>
                                <button className="button4" >Make an Order</button>
                            </Link>
                                <button   onClick={handleLogout} className="button5"> Logout </button>
                    </div>  
                }

            </div>
        )
    }else{
        return (
            <div>
                <Link to='/login' >
                    <button className="button2" >Login</button>
                </Link>
                    {/* <Link to='/signup'>
                        <button   >Signup</button>
                    </Link> */}
                <Link to='/'>
                    <button className="button1">home</button>
                </Link>
                <hr/>
            </div>
        )
    } 
}

export default NavBar

