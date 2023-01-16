import { Switch, Route, BrowserRouter} from "react-router-dom";
import Login from "./components/Login";
import Signin from "./components/Signin"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={ <Login/> } />
        <Route path="about" component={ <Signin/> } />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;