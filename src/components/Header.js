import { useContext } from 'react';
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import UserContext from '../utils/UserContext';

const Header = () => {
    const userData = useContext(UserContext);
    return (
        <div className='flex justify-between p-4 items-center shadow-lg sticky top-0 bg-white z-50 w-full'>
            <div className='w-20'>
                <img src={LOGO_URL} alt='logo' />
            </div>
            <div>
                <ul className="flex">
                    <li className="px-4"><Link to='/'>Home</Link></li>
                    <li className="px-4">Offers</li>
                    <li className="px-4"><Link to='/about'>About</Link></li>
                    <li className="px-4"><Link to='/contact'>Contact</Link></li>
                    <li className="px-4">Sign In</li>
                    <li className="px-4">Cart</li>
                    <li className="px-4">{userData?.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;