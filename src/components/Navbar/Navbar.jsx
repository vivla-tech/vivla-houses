import React from 'react'
import logoVivla from '../../assets/logo-vivla.jpeg'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <img src={logoVivla} alt="vivla name" />

            <Link to="/homes"> Homes</Link>
            <Link to="/form"> New home</Link>
        </nav>
    )
}

export default Navbar