import {BrowserRouter as Router, Route, redirect }   from 'react-router-dom';  
import Signin from "./components/Signin";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
      <div>
      <Login />
      </div>
  );
}

export default App;