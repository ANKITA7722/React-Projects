import { useContext } from "react";
import { userContext } from "./App";


const Bhopal=()=>{
    const {user,setUser} = useContext(userContext);
    return(
        <>
        <h1>good byyyyyyyy :{user}</h1>
        <button onClick={()=>{setUser("nisha")}}>Click</button>
         
        </>
    )
}
export default Bhopal;