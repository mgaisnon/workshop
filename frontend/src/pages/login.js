import '../css/pages/login.css';
import Logo from '../media/logo.png';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggingIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        if (accessToken) {
            setIsLoggedIn(true)
        }
    }, []);

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username, 
                    password: password  
                })
            });
    
            if (response.ok) { 
                const data = await response.json(); 
    
                const accessToken = data.token; 
                localStorage.setItem('token', accessToken);
                setIsLoggedIn(true); 
                navigate('/home'); 
            } else {
                console.error('Erreur lors de la connexion:', response.statusText);
            }
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    return(
        <div class="login">
            <div class="login-screen">
                <img className="logo" src={Logo}></img>
                <div class="app-title">
                    <h1>Veuillez vous connecter</h1>
                </div>
    
                <div class="login-form">
                    <div class="control-group">
                    <input type="text" class="login-field" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" id="login-name"></input>
                    <label class="login-field-icon fui-user" for="login-name"></label>
                    </div>
    
                    <div class="control-group">
                    <input type="password" class="login-field" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="login-pass"></input>
                    <label class="login-field-icon fui-lock" for="login-pass"></label>
                    </div>
    
                    <a class="btn btn-primary btn-large btn-block" onClick={handleLogin}>Login</a>
                </div>
            </div>
        </div>
    )
}

export default Login
