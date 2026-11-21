import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home/home"
import AboutUs from "./pages/aboutUs/aboutUs"
import Facilitie from "./pages/facilitie/facilitie"
import Faq from "./pages/faq/faq"
import Login from "./pages/login/login"
import Mainheader from "./components/layout/header/mainheader"
import LessonApp from "./pages/LessonsApp/lessonApp"
import TeacherApp from'./pages/TeachersApp/teacherApp'
import Gallary from "./pages/Gallary/gallary"
import AcadimicCalender from "./pages/AcadimicCalender/acadimicCalender"

const App = ()=>{

  return(
    <main className="w-full h-screen flex flex-wrap ">
      <BrowserRouter>
        <Mainheader/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/facilitie" element={<Facilitie/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/lesssonsApp" element={<LessonApp/>} />
        <Route path="/teachers" element={<TeacherApp/>} />
        <Route path="/Gallary" element={<Gallary/>} />
        <Route path="Calender" element={<AcadimicCalender/>} />
      </Routes>
    </BrowserRouter>
    </main>
  )
}
export default App