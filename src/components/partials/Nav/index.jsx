import React from 'react';
import NavItem from './NavItem';

const Nav = () => (
    <ul className="nav-container">
        <NavItem to="/" label="Home" />
        <NavItem to="/favorites" label="Favorites" />
    </ul>
);

export default Nav;
