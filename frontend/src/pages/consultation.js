import Footer from "../components/footer.js"
import HopitalComponent from "../components/hopitalComponent.js"
import Navbar from "../components/navbar.js"
import PhotoHopital from '../media/hospital.jpg'
import '../css/pages/consultation.css'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Consulation() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hopitaux, setHopitaux] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        if (accessToken) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          navigate('/'); // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
        }
    });

    useEffect(() => {
        fetchHopitaux()
    }, []);

    const fetchHopitaux = async () => {
        try {
            const response = await fetch('http://localhost:8000/hopitaux')
            if (response.ok) {
                const data = await response.json();
                setHopitaux(data);
            } else {
                console.error('Erreur lors de la connexion', response.statusText);
            }
        } catch (error) {
            console.error('Erreur:', error);
        }
    }

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
        <h2 className="title-hospital">Tous les hopitaux</h2>
        <div className="div-search">
            <label for="site-search">Rechercher les hopitaux : </label>
            <input type="search" id="site-search" name="q" />
        </div>
        <div className="hospitals-container">
        {hopitaux.map((item) => (
                <HopitalComponent title={item.nom} image={PhotoHopital} temps={item.temps_attente} adresse={item.adresse} ville={item.ville}/>
            ))}
        </div>
        <Footer />
        </div>
    )
}
export default Consulation