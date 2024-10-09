import Navbar from "../components/navbar.js";
import '../css/pages/home.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import photoMedical from '../media/photo1.jpg';
import Footer from '../components/footer.js'
function Home() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        if (accessToken) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          navigate('/'); // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
        }
    });

    const navigatetoConsultation = () => {
        const path = '/consultation';
        navigate(path);
    }

    return (
        <div>
            <Navbar />
            <div className="banner">
                <div className="overlay"></div>
                <div className="text-container">
                    <h1>Bienvenue sur E-Urgence</h1>
                    <p>Consultez les hôpitaux avec les files d'attente les plus courtes autour de chez vous</p>
                    <button className="check-consultation" onClick={navigatetoConsultation}>Consultation</button>
                </div>
            </div>

            <div className="container">
                <div>
                    <img className="image-docteur" src={photoMedical} alt="Docteur" />
                </div>
                <div className="text-section">
                    <h2>Notre solution innovante</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod odio ut erat tincidunt semper.
                        Proin aliquam volutpat vehicula. Sed nec gravida augue. In sed ex ipsum. Pellentesque in massa in leo 
                        maximus luctus. Vestibulum vestibulum nec mauris non auctor. Phasellus lobortis odio nec ligula vestibulum
                        dapibus. Duis a luctus nibh...
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod odio ut erat tincidunt semper.
                        Proin aliquam volutpat vehicula. Sed nec gravida augue. In sed ex ipsum. Pellentesque in massa in leo 
                        maximus luctus. Vestibulum vestibulum nec mauris non auctor. Phasellus lobortis odio nec ligula vestibulum
                        dapibus. Duis a luctus nibh...
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
