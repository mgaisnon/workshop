import Footer from "../components/footer.js"
import HopitalComponent from "../components/hopitalComponent.js"
import Navbar from "../components/navbar.js"
import PhotoHopital from '../media/hospital.jpg'
import '../css/pages/consultation.css'

function Consulation() {
    return(
        <div>
        <Navbar />
        <div className="banner">
            <div className="overlay"></div>
            <div className="text-container">
                <h1>Consulter les hopitaux</h1>
                <p>Trouver les hopitaux les plus proches de chez vous avec les files d'attentes les plus courtes</p>
            </div>
        </div>
        <h2 className="title-hospital">Hopitaux Proches de chez vous</h2>
        <div className="hospitals-container">
        <HopitalComponent title="Hoptital Toulouse 1" image={PhotoHopital} temps="20min"/>
        <HopitalComponent title="Hoptital Toulouse 2" image={PhotoHopital} temps="30min"/>
        <HopitalComponent title="Hoptital Toulouse 3" image={PhotoHopital} temps="60min"/>
        </div>
        <h2 className="title-hospital">Tous les hopitaux</h2>
        <div className="div-search">
            <label for="site-search">Rechercher les hopitaux : </label>
            <input type="search" id="site-search" name="q" />
        </div>
        <div className="hospitals-container">
        <HopitalComponent title="Hoptital 1" image={PhotoHopital} temps="20min"/>
        <HopitalComponent title="Hoptital 1" image={PhotoHopital} temps="40min  "/>
        <HopitalComponent title="Hoptital 1" image={PhotoHopital} temps="20min"/>
        <HopitalComponent title="Hoptital 1" image={PhotoHopital} temps="20min"/>
        <HopitalComponent title="Hoptital 1" image={PhotoHopital} temps="20min"/>
        <HopitalComponent title="Hoptital 1" image={PhotoHopital} temps="20min"/>
        </div>
        <Footer />
        </div>
    )
}
export default Consulation