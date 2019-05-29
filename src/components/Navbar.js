import React from 'react';
import {Link} from 'react-router-dom';


const NavbarExp = () => {
    return (
        
            <ul>
            <li><Link class="active" to="/"><i class="fas fa-home"></i> Home</Link></li>
            <li><Link to="/fav">Fav</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            </ul>
    
    
        
    );
};

export default NavbarExp;