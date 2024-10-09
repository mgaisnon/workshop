import Navbar from "../components/navbar.js"
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../css/pages/contact.css'

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

    return (
        <div>
            <Navbar />
            <div class="container-form">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                <label for="country">Country</label>
                <select id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>

                <input type="submit" value="Submit"></input>

            </div>
        </div>
    )
}
export default Contact