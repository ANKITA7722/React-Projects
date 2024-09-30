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


const student=[
  {rollno:121,
    name:"ankita",
    city:"bhopal"
  },
  {rollno:121,
    name:"ankita",
    city:"bhopal"
  },
  {rollno:121,
    name:"ankita",
    city:"bhopal"
  }
]
const App= ()=>{
 // const ans= name.map((key => <li>{key}</li>)or
    const ans= student.map((key)=>{
        return(
            <>
            <tr>
              
            </tr>
            </>
        )
    })

    const ans1= name.map(function(key){
      return(
          <>
          <li>{key}</li>
          </>
      )
  })
    return(
        <>
        <h1>hellow world</h1>
        <ol >
        {ans}
        </ol>
        <ul type="circle">
        {ans1}
        </ul>
        
        </>
    )

}
export default App;



