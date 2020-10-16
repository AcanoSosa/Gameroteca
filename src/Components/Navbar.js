import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav">
            <div>
                <NavLink className="link-option" to="/">Gameroteca</NavLink>
            </div>
            <div className="links">
                <ul class="link-container">
                    <li class="link-item">
                        <NavLink className="link-option" to="">Games</NavLink>
                    </li>
                    <li class="link-item">
                    <NavLink className="link-option" to="/playlists">Playlists</NavLink>
                    </li>
                    <li class="link-item">
                        <a className="link-option">Profile</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
