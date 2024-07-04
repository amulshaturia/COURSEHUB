import React from 'react'

import { Link } from 'react-router-dom'

import "./css/Navbar.css"

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="nav">
                {/* <img className = "AmulLogo" src={require('./Images/logo.png')} alt = "logo"/> */}

                        <div className="nav-items">
                            <div className="search">
                                <input type="text" className="search-box" placeholder="search brand, product"/>
                                    <button className="search-btn">search</button>
                            </div>
                            <Link to = "/Profile">
                                <img className = "userImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRDaSp_olEwcOQkyyelmIczJtJNmlC8HDXw&s" alt="user"/>
                            </Link>

                            
                            <img className = "cartImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6gGcAMEB4fwNBq4bzX2P07oeeDu0r6rWyQ&s" alt="cart"/>

                        </div>
                </div>
            </nav>

            <ul className="links-container">
                <li className="link-item"><Link to = "/" className="link">home</Link></li>
                <li className="link-item"><Link to = "/Courses" className="link">courses</Link></li>
                <li className="link-item"><Link to = "/IDE" className="link">IDE</Link></li>
                <li className="link-item"><Link to = "/Community" className="link">community</Link></li>
                <li className="link-item"><Link to = "/About" className="link">About</Link></li>
            </ul>

        </div>
    )
}
