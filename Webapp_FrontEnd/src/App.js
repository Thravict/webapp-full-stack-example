import {Routes, Route} from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/HomePages/Dashboard";
import Home from "./components/HomePages/Home";
import Profile from "./components/HomePages/Profile";
import Settings from "./components/HomePages/Settings";

export default function App() {
    return (
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/settings' element={<Settings/>}/>
        </Routes>
    );
}