import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active text-white" aria-current="page" to="/">Lodash</Link>
                        <Link className="nav-link active text-white" aria-current="page" to="/functional-component">Functional Component</Link>
                        <Link className="nav-link active text-white" aria-current="page" to="/hooks">Hooks</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar