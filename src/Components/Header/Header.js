import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext);
    const signOutMethod = ()=>{
        signOutUser()
    }
    return (
        <nav className='header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className='ul'>
                <li><Link to='/'>Shop</Link></li>
                <li><Link to='/order'>Order</Link></li>
                <li><Link>Order Review</Link></li>
                <li><Link to='/inventory'>Manage Inventory</Link></li>
                
                {user?.uid? <li><Link onClick={signOutMethod}>Sign Out</Link></li>
                    : <> 
                        <li><Link to='/login'>Login</Link></li>
                         <li><Link to='/signup'>Sign Up</Link></li>
                      </>}

                <span>{user?.email}</span>
            </ul>
        </nav>
    );
};

export default Header;