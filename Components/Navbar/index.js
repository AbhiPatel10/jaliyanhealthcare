import React from 'react'

const Navbar = () => {
    return (
        <>
            <header>
                <nav className='Navbar'>
                    <input id="nav-toggle" type="checkbox" />
                        <div className="logo">Jaliyan<strong>CLINIC</strong></div>
                        <ul className="links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#review">Review</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#appoinment">Appoinment</a></li>
                        </ul>
                        <label htmlFor="nav-toggle" className="icon-burger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </label>
                </nav>
            </header>
        </>
    )
}

export default Navbar;