import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./components/Board";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderButton from "./components/HeaderButton";
import Announcements from "./components/Announcements";
import Banner from "./components/Banner";
import Image from "./components/Image";
import LogIn from "./components/Login";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div>
    <BrowserRouter>
       <Routes>
          <Route path="./components/Login" element={<LogIn />}/>
          <Route path="./components/SignIn" element={<SignIn />}/>
       </Routes>
     </BrowserRouter>
    <div className="m-[30px]">
     <Header/>
     <HeaderButton/>
     <div className=" flex justify-end gap-[50px]">
     <div className=" flex flex-col">
       <Banner/>
       <Image/>
     </div>
     <Calendar/>
     </div>
     <div className="flex justify-center">
         <Announcements/>
         <Board/>
     </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;