import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
