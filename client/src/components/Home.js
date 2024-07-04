// import React from 'react'

// importing compnents 
import Navbar from './Navbar.js'; 
import Header from './Header.js'; 
import Best from './Best.js'; 
import Footer from './Footer.js'; 

import { jwtDecode } from "jwt-decode";


export default function Home() {
  return (
    <div>

        <Navbar/>
        <Header/>
        <Best/>
        <Footer/>
    </div>
  )
}
