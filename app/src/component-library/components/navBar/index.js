import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../icon';
import { FaSearch } from 'react-icons/fa';
import './styles.scss'

const NavBar = () => {
    const defaultStyling = { textDecoration: 'none', color: 'Black' };
    return (
        <nav>
            <div className='nav-bar'>
                <Logo className='logo' />

                <div className='nav-links' >
                    <Link to='/Reports' style={defaultStyling} className="hello">Reports & Scores</Link>
                    <Link to='/Identity' style={defaultStyling}>Identity Protection</Link>
                    <Link to='/Loans' style={defaultStyling}>Credit Cards & Loans</Link>
                    <Link to='/Credit' style={defaultStyling}>Credit Support</Link>
                    <Link to='/Education' style={defaultStyling}>Education</Link>
                </div>
                <div className='spacer'></div>

                <div className='nav-right'>
                    <Link to='/Signin' style={defaultStyling}>Sign in</Link>
                    <FaSearch className='icon' />

                </div>
            </div>
        </nav>
    );

}
export default NavBar;