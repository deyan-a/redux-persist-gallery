import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

const NavItem = ({label, path}) => (
    <li className="nav-item">
        <Link className="nav-link" to={path}>{label}</Link>
    </li>
);

export default NavItem;
