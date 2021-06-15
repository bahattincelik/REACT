import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Armstrong from "./components/Armstrong";
import String from "./components/String";
import Iletisim from "./components/Iletisim";
import Bekleniyor from "./components/Bekleniyor";
function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/armstrong">
            <Armstrong />
          </Route>
          <Route path="/stringTers">
            <String />
          </Route>
          <Route path="/bekleniyor">
            <Bekleniyor />
          </Route>
          <Route path="/iletisim">
            <Iletisim />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}
export default App;
