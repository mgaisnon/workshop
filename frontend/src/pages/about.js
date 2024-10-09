import Footer from "../components/footer.js"
import Navbar from "../components/navbar.js"
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function About() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
