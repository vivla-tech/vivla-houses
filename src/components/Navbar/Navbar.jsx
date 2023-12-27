import { Link } from 'react-router-dom';
import logoVivla from '../../assets/logo-vivla.jpeg';
import './navbar.css';


function Navbar() {
    return (
        <nav className='navbar'>
            <img src={logoVivla} alt="vivla name" />

            <Link to="/homes"> Homes</Link>
            <Link to="/form"> New home</Link>
        </nav>
    )
}

export default Navbar