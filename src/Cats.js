import React from 'react';
import { Link } from 'react-router-dom';

function Cats(props) {
    return (
        <div>
            <h1>Cats</h1>
            <ul>
                <li>
                    <Link to="/cats/oakley">Oakley</Link>
                </li>
                <li>
                    <Link to="/cats/milla">Millas</Link>
                </li>
            </ul>
        </div>
    );
};

export default Cats;