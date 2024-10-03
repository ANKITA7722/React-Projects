// import { BrowserRouter, Routes, Route } from "react-router-dom";

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

//
import { useState } from "react"; 

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

const App=()=>{

      const [cnt,setCnt]=useState(0);//varble ki intialization state hai
      const myDecreament=()=>{
        if(cnt<=1)
        {
          alert(" dont go minuse ")
        }else{
          alert(cnt-1)
        }
      }
    
    return(
      <>
        <h1>Count App</h1>
        <h1>count :{cnt}</h1>
        <button onClick={()=>{setCnt(cnt+1)}}>increament</button>
        <button onClick={myDecreament}>decreament</button>
        <button onClick={()=>{setCnt(0)}}>reset</button>
      </>
    )
  }
  export default App;