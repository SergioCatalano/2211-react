import React from 'react'
import logo from '../img/logo192.png'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <header style={{color:"white"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
                <NavLink to="/home">
                    <img src={logo} className='mx-1' height="40" alt="brand" />
                </NavLink>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarCollapse">
                    <div className='navbar-nav ms-auto mx-2'>
                        <h4><NavLink to="/home" className='nav-item nav-link text-center' style={{color:"white", fontSize:18, fontFamily:"Helvetica"}}>Home</NavLink> </h4>
                        <h4><NavLink className='nav-item nav-link text-center' style={{color:"white", fontSize:18, fontFamily:"Helvetica"}}>Productos</NavLink> </h4>
                        <h4><NavLink className='nav-item nav-link text-center' style={{color:"white", fontSize:18, fontFamily:"Helvetica"}}>Nosotros</NavLink> </h4>
                        <h4><NavLink to="/contact" className='nav-item nav-link text-center' style={{color:"white", fontSize:18, fontFamily:"Helvetica"}}>Contacto</NavLink> </h4>
                    </div>
                </div>


            </nav>
        </header>
    </>
  )
}
