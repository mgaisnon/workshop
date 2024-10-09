import Logo from '../media/logo.png'
import { useNavigate } from 'react-router-dom'
import '../css/components/navbar.css'


function Navbar(){

    let navigate = useNavigate()

    const redirectConsultation = () => {
        const path = '/consultation'
        navigate(path)
    }

    const redirectAbout = () =>{
        const path = '/about'
        navigate(path)
    }
    const redirectHome = () => {
        const path = '/home';
        navigate(path);
    }

    const redirectContact = () => {
        const path = '/contact';
        navigate(path);
    }

    const redirectlogin = () => {
        localStorage.removeItem('token');
        const path = '/';
        navigate(path)
    }

    return(
        <div>
            <img className='logo-menu' src={Logo}></img>
            <div className='div-menu'>
                <p className='element-menu' onClick={redirectHome} >Home</p>
                <p className='element-menu' onClick={redirectAbout}>About Us</p>
                <p className='element-menu' onClick={redirectConsultation}>Consulations</p>
                <p className='element-menu' onClick={redirectContact}>Contact</p>
                <p className='element-menu' onClick={redirectlogin}>Deconnexion</p>

            </div>
        </div>
    )
}

export default Navbar