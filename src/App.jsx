// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

// import Layout from "./Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
// import AboutCompany from "./pages/AboutCompany";
// import AboutProduct from "./pages/AboutProduct";


// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="Home" element={<Home />} />
//             <Route path="About" element={<About />}>

//               <Route path="Aboutcompany" element={<AboutCompany />} />
//               <Route path="Aboutproduct" element={<AboutProduct />} />

//             </Route>

//             <Route path="Contact" element={<Contact />} />
//             <Route path="*" element={<NoPage />} />

//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }  
// export default App;

//=======================================================================================================
// import { useState } from "react"; 
// const App=()=>{
//     const [name,setName]=useState("ankita");//varble ki intialization state hai
//     const myname=()=>{
//       setName=("rupali")
//     }

//   return(
//     <>
//       <h1>welcom to cybrom</h1>
//       <h1>My name : {name}</h1>
//       <button onClick={myname}>click here</button>
//     </>
//   )
// }
// export default App;

//======================================================================================================
//colore changing program :-
// import { useState } from "react"; 
// const App=()=>{
//   const [color,setColor]=useState("Red");//varble ki intialization state hai
// return(
//   <>
//     <h1 style={{color:color}}>My name : {color}</h1>
//     <button onClick={()=>{setColor("Green")}}>click here</button>
//     <button onClick={()=>{setColor("Pink")}}>click here</button>
//     <button onClick={()=>{setColor("Gray")}}>click here</button>
//     <button onClick={()=>{setColor("blue")}}>click here</button>
//     <button onClick={()=>{setColor("yellow")}}>click here</button>

//   </>
// )
// }
// export default App;

//====================================================================================================================
//COUNTER program increament decreament program:-
// import React, { useState } from 'react';
// const App = () => {
//   const [cnt, setCnt] = useState(0); // Initialize state variable
//   const myDecrement = () => {
//     if (cnt <= 1) {
//       alert("Don't go below zero");
//     } else {
//       setCnt(cnt - 1);
//     }
//   };
//   return (
//     <>
//       <h1>Count App</h1>
//       <h1>Count: {cnt}</h1>
//       <button onClick={() => setCnt(cnt + 1)}>Increment</button>
//       <button onClick={myDecrement}>Decrement</button>
//       <button onClick={() => setCnt(0)}>Reset</button>
//     </>
//   );
// };
// export default App;

//====================================================================================================================
// import { useState, useEffect } from "react";
// const App = () => {
//   const [cnt, setCnt] = useState(0);//varble ki intialization state hai
//   useEffect(() => {
//     setTimeout(() => {
//       setCnt(cnt + 1)
//     }, 2000);
//   }, [])
//   return (
//     <>
//       <h1>welcom:{cnt}</h1>
//     </>
//   )
// }
// export default App;


//=====================================================================================================================
//Squer generate program:-
// import { useState,useEffect } from "react";
// const App=()=>{
//   const [cnt,setCnt]=useState(0);
//   const [abc,setAbc]=useState(0);
//   useEffect(()=>{
//     setAbc(cnt*2);
//   },[cnt]);
// return(
//   <>
//   <h1>welcom:{cnt}</h1>
//   <h1>Multiply:{abc}</h1>
//     <button onClick={()=>{setCnt(cnt+1)}}>click here</button>
//   </>
// )
// }
// export default App;

//=======================================================================================================
//form create:-
// import { useState } from "react";
// const App=()=>{
//   const [name, setName]=useState("");
//   const [city,setCity]=useState("");
//   const [email,setEmail]=useState("");
//   return(
//     <>
//     <h1>Application Form</h1>
//     Enter name : <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/>
//     <br/><br/>
//     Enter city : <input type="text"  value={city} onChange={(e)=>setCity(e.target.value)}/>
//     <br/><br/>
//     Enter email : <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
//     <br/><br/>
//     <button >save data</button>
//     </>
//   )
// }
// export default App;




//Form Handling:
// import { useState } from "react";
// const App = () => {
//   const [input, setInput] = useState({}); // input initialization
//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;
//     setInput((values) => ({ ...values, [name]: value }));
//     console.log(input);
//   };
//   const handleSubmit = (e) => {
//     console.log(input);
//   };
//   return (
//     <>
//       <h1>Application Form</h1>
//       <form onSubmit={handleSubmit}>
//         Enter name: <input type="text" name="stunm" value={input.stunm} onChange={handleInput} />
//         <br /><br />
//         Enter city: <input type="text" name="city" value={input.city} onChange={handleInput} />
//         <br /><br />
//         Enter contact: <input type="text" name="contact" value={input.contact} onChange={handleInput} />
//         <br /><br />
//         <button onSubmit={handleSubmit}>Save Data</button>
//       </form>
//     </>
//   );
// };
// export default App;




// import { useState, useEffect } from "react";
// import axios from "axios";

// const App=()=>{
// const [mydata,setMydata]=useState([]);
// const loadData=()=>{
//   let api= "http://localhost:3000/Student";
//   axios.get(api).then((res)=>{
//     setMydata(res.data);
//     console.log(res.data);
//   });
// }
// useEffect(()=>{
//   loadData();
// },[])
// const ans=mydata.map((key)=>{
//   return(
//     <>
//     <tr>
//       <td>{key.rollno}</td>
//       <td>{key.name}</td>
//       <td>{key.city}</td>
//       <td>{key.fees}</td>
//     </tr>
//     </>
//   )
// })
// return(
//   <>
//     <table>
//       <tr>
//         <th>rollno</th>
//         <th>name</th>
//         <th>city</th>
//         <th>fees</th>
//       </tr>
//       {ans}
//     </table>
//   </>
// )
// }
// export default App;


//


//installation command axios:-npm i axios
// import { useState, useEffect } from "react";
// import axios from "axios";

// const App = () => {
//   const [mydata, setMydata] = useState([]);

//   const loadData = async () => {
//     let api = "http://localhost:3000/Student";

//     try {
//       const response = await axios.get(api);
//       setMydata(response.data);
//       console.log(response);
//     } catch (error) {
//       console.log("server not Found");
//     }
//   }

//   useEffect(() => {
//     loadData();
//   }, [])
//   const ans = mydata.map((key) => {
//     return (
//       <>
//         <tr>
//           <td>{key.rollno}</td>
//           <td>{key.name}</td>
//           <td>{key.city}</td>
//           <td>{key.fees}</td>
//         </tr>
//       </>
//     )
//   })
//   return (
//     <>
//       <table border={2}>
//         <tr>
//           <th>rollno</th>
//           <th>name</th>
//           <th>city</th>
//           <th>fees</th>
//         </tr>
//         {ans}
//       </table>
//     </>
//   )
// }
// export default App;


//date:-17/10/2024 day:thursday
// import { useState ,createContext} from "react";
// import Comp1 from "./comp1";
// const myContext = createContext(); 
// const App=()=>{
//   const [user ,setUser]=useState("Ankita");
//   return(
//     <>
//     <h1>welcom ho my main page : {user}</h1>
//     <myContext.Provider value={{user}}>
//     <Comp1 />
//     </myContext.Provider>

//     </>
//   )
// }
// export default App;
// export {myContext};


//Globale state Managment
// import { useState ,createContext} from "react";
// import Cybrome from "./Cybrome";
// const userContext = createContext();

// const App=()=>{
//   const [user ,setUser] = useState("Ankita");
//   return(
//     <>
//     <button onClick={()=>{setUser("nitin")}}>click</button>
//     <h1>hello...:{user}</h1>
//     <userContext.Provider value = {{user,setUser}}>
//       <Cybrome/>
//     </userContext.Provider>
    
//     </>
//   )
// }
// export default App;
// export {userContext};