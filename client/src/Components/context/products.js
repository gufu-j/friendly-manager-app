import React, {useState, useEffect} from "react";


const ProductContext = React.createContext();


function ProductProvider({children}){

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        fetch(`/products`)
        .then((r) => r.json())
        .then((r) => setProducts(r))
    },[])

    return(
        // add loggedIn to global and state
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    );

}

export{ ProductContext, ProductProvider}