import {BrowserRouter as Router, Route, redirect }   from 'react-router-dom';  
import Signin from "./components/Signin";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div>
      <Login/>
    </div>
      <Route exact path="/" component={Login} />
      <Route path="/signin" component={Signin}/>
      <Route path="/home" component={Home} />
      <redirect to="/" />
      {/* If route mismatches -> redirect to login */}
    </Router>
  );
}

export default App;