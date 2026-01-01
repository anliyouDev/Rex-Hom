import "./App.scss"
import Acceuil from "./Compenents/Acceuil/Acceuil"
import Navbar from "./Compenents/Navbar/Navbar"
import Nosvaleurs from "./Compenents/Nosvaleurs/Nosvaleurs"
import Produits from "./Compenents/Produits/Produits"
import Contact from "./Compenents/Contacts/Contact" 
import Footer from "./Compenents/footer/Footer"

function App() {
  
  return (
    <>
      <div className="App">
        <section className="conteneur-acceuil">
          <div className="acceuil">
            <Navbar/>
            <Acceuil/>
          </div>
        </section>
        <section className="conteneur-produits">
          <div className="produits">
            <Produits/>
          </div>
        </section>
        <section className="conteneur-valeurs">
          <div className="nos-valeurs">
             <Nosvaleurs/>
          </div>
        </section>
        <section className="conteneur-contact">
          <div className="contact">
            <Contact/>
          </div>
        </section>
        <section className="conteneur-footer">
          <div className="footer">
            <Footer/>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
