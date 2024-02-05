import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <img src={LOGO_URL} alt='logo' />
        </div>
        <div className='nav-items'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li>Offers</li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li>Sign In</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;