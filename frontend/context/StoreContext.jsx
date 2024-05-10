import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
export const StoreContext= createContext(null)

const StoreContextProvider =(props)=>{


    const url ="http://localhost:4000"
    const [token ,setToken]=useState("");
    
    const contextValue={
        url,
        token,
        setToken

    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider