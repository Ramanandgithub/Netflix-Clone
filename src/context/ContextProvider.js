import { useState } from "react";
import Context from "./UserContext";

function ContextProvider({children}){
    const [user,setuser] = useState('');
    return(
        <>

        <Context.Provider value={{user,setuser}}>
            {children}
        </Context.Provider>
        
        </>
    )
}


export default ContextProvider;