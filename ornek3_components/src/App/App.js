import Saat from "../Saat/Saat.jsx";
import Footer from "../Footer/Footer";
const stil = {
  textAlign: "center",
  color: "brown",
  fontSize: "70px",
};
function App() {
  return (
    <div className="App">
      <h1 style={stil}>React Kursuna Hosgeldiniz</h1>
      <Saat />
      <Footer />
    </div>
  );
}
export default App;
