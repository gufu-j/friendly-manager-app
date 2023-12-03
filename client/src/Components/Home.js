import React, { useContext } from "react";
import { UserContext } from "./context/user";
import Business from "./Business";
import Businesses from "./Businesses";
// import Order from "./Order";


function Home(){


    const {loggedIn, store, setStore, user} = useContext(UserContext)


    if(loggedIn){
     return(
        <div>
            {user.admin?  <Businesses/> : <Business store={store} setStore={setStore}/> }
        </div>
     );
     
    } else {
        return (
            <div>
                <h1 className="center_image"> Friendly Manager App </h1>
                <img src={ "https://etimg.etb2bimg.com/thumb/msid-99832590,imgsize-46068,width-1200,height=765,overlay-ethrme/news/industry/april-theme-roundup-shaping-the-future-of-work-with-new-age-performance-management-ex-strategies.jpg"} height={500} className="center_image" alt=""/>
            </div>
        )
    }
}

export default Home

