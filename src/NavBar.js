import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="cats">Cats</Link></li>
            </ul>
        </div>
    );
}

export default NavBar;