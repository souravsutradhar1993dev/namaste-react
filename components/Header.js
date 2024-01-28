import { LOGO_URL } from "../utils/constants";

const Header = () => (
    <div className='header'>
        <div className='logo-container'>
            <img src={LOGO_URL} alt='logo' />
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>Offers</li>
                <li>Help</li>
                <li>Sign In</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;