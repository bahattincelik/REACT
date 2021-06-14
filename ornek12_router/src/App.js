import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Kurslar from "./components/Kurslar";
function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/kurslar">
            <Kurslar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
