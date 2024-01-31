import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import stil from "../../App.css"
const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
  <Link to ="/" className="fs-3 text-center ubuntu navbar-brand">Rick And <span className="text-primary">Morty</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav fs-5">
        <NavLink activeClassName="active" to="/" className="nav-link">Karakterler</NavLink>
        <NavLink to="/episodes" className="nav-link" >Bölümler</NavLink>
        <NavLink to ="/location" className="nav-link" >Lokasyon</NavLink>
     
      </div>
    </div>
  </div>
</nav>
  )
}

export default navbar
