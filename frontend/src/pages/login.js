import '../css/pages/login.css';
import Logo from '../media/logo.png';

function Login() {

    return(
        <div class="login">
            <div class="login-screen">
                <img className="logo" src={Logo}></img>
                <div class="app-title">
                    <h1>Veuillez vous connecter</h1>
                </div>
    
                <div class="login-form">
                    <div class="control-group">
                    <input type="text" class="login-field" value="" placeholder="Email" id="login-name"></input>
                    <label class="login-field-icon fui-user" for="login-name"></label>
                    </div>
    
                    <div class="control-group">
                    <input type="password" class="login-field" value="" placeholder="Password" id="login-pass"></input>
                    <label class="login-field-icon fui-lock" for="login-pass"></label>
                    </div>
    
                    <a class="btn btn-primary btn-large btn-block" href="/home">Login</a>
                    <a class="login-link" href="#">Lost your password?</a>
                </div>
            </div>
        </div>
    )
}

export default Login
