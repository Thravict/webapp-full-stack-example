import {Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Logo from "./components/Logo";

export default function App() {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/logo' element={<Logo/>}/>
        </Routes>
    );
}