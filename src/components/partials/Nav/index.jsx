import React from 'react';
import NavItem from './NavItem';

const Nav = () => (
    <ul className="nav-container">
        <NavItem path="/" label="Home" />
        <NavItem path="/favorites" label="Favorites" />
    </ul>
);

export default Nav;
