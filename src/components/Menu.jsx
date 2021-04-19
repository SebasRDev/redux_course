import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/menu.scss';

const Menu = () => {
  return(
    <nav className="menu">
      <Link to="/usuarios" className="menu__item">
        Usuarios
      </Link>
      <Link to="/tareas" className="menu__item">
        Tareas
      </Link>
    </nav>
  )
}

export default Menu;