import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    return (
        <nav className="black nav-wrapper">
            <ul>
                <li className="yellow">
                <NavLink exact to="/">
                        Home
                </NavLink>
                </li>
                <li className="yellow">
                <NavLink to="/characters">
                        Characters
                </NavLink>
                </li>
                <li className="yellow">
                    <NavLink to="/locations">
                        Locations
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;