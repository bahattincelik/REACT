import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../src/components/header/Header";
import Mainyeni from "./components/main/Mainyeni";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Mainyeni />
      <Footer />
    </div>
  );
}
export default App;
