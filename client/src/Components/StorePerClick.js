import React, { useContext } from "react";
import { StoreContext } from "./context/store";




function StorePerClick(){

    const {record, store} = useContext(StoreContext)

    console.log(store)


    return(
        <div>di{record}</div>
    )
}

export default StorePerClick