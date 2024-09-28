import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import AboutCompany from "./pages/AboutCompany";
import AboutProduct from "./pages/AboutProduct";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />}>
              <Route path="Aboutcompany" element={<AboutCompany />} />
              <Route path="Aboutproduct" element={<AboutProduct />} />

            </Route>
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />



          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App;






