import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Shop from "./pages/shop"
import Contact from "./pages/contact"




function App(){
  return<>
   <Routes>
    <Route path="/"  element={<Home />}/>
    < Route path="/About" element={<About />} />
    <Route path="/Shop"  element={<Shop />}/>
    <Route path="/Contact" element={<Contact />}/>
  </Routes>
  </>
}

export default App
