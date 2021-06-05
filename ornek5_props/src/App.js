import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Yorum from "./components/yorum/Yorum";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynav from "./components/nav/Mynav";
function App() {
  return (
    <div className="App">
      <Mynav />
      <Header />
      <div className="container-yorum">
        <Yorum indeks="0" />
        <Yorum indeks="1" />
        <Yorum indeks="2" />
        <Yorum indeks="3" />
      </div>

      <Footer />
    </div>
  );
}
export default App;
