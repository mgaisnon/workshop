import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"

function About() {
    return(
        <div>
        <Navbar />
        <div className="banner">
            <div className="overlay"></div>
            <div className="text-container">
                <h1>Qui sommes nous ?</h1>
            </div>
        </div>

        
        <Footer />
        </div>
    )
}

export default About
