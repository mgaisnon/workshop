import Navbar from "../components/navbar.js"
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Contact() {

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
        <Navbar />
    )
}
export default Contact