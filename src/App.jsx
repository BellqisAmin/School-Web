import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/home"
import AboutUs from "./pages/aboutUs/aboutUs"
import Facilitie from "./pages/facilitie/facilitie"
import Faq from "./pages/faq/faq"
import Login from "./pages/login/login"

const App = ()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/facilitie" element={<Facilitie/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App