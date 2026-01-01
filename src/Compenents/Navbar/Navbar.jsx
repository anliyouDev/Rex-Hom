import React from 'react'
import "./Navbar.scss"
import { FiMenu } from "react-icons/fi"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="laptop">
        <h2 className="logo">RexHom</h2>
        <div className="navigation">
          <ul className="links-conteneur">
            <li className="link"><Link to="/">Résidence</Link></li>
            <li className="link"><Link to="/valeurs">Nos valeurs</Link></li>
            <li className="link"><Link to="/contact">Contact</Link></li>
            <li className="link"><Link to="/cestparti">C'est parti</Link></li>
            <li className="link"><Link to="/louer">Louer</Link></li>
          </ul>
          <FiMenu className='menu-icon' />
        </div>
      </div>
      <div className="mobile"></div>
    </div>
  )
}

export default Navbar
