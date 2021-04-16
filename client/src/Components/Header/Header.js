import './Header.css';
import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>COSMOS ODYSSEY</h1>
            <nav>
                <p><Link to='/' >SEARCH</Link></p>
                <p className='margin' ><Link>BOOKINGS</Link></p>
            </nav>
        </header>
    );
};

export default Header;