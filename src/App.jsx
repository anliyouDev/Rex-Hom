import { Routes, Route } from "react-router-dom";
import Navbar from "./Compenents/Navbar/Navbar";
import Acceuil from "./Compenents/Acceuil/Acceuil";
import Produits from "./Compenents/Produits/Produits";
import Nosvaleurs from "./Compenents/Nosvaleurs/Nosvaleurs";
import Contact from "./Compenents/Contacts/Contact";
import Footer from "./Compenents/footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/produits" element={<Produits />} />
        <Route path="/valeurs" element={<Nosvaleurs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
