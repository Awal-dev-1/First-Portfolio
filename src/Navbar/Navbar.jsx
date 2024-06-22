import { useEffect, useRef, useState } from 'react'
import './navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa'

export default function Navbar() {

  const [menu, setMenu] = useState("home")

  const menuRef = useRef();

  const openRef = () =>{
    menuRef.current.style.right = "0"
  }

  const closeRef = () =>{
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className="navbar">
      <h3 className="logo">Mohammed</h3>
      <FaBars onClick={() => openRef()} className='bars' size={25}/>
      <ul ref={menuRef} className="list" id='list'>
      <FaTimes onClick={() => closeRef()} className='close' size={25}/>
        <li onClick={() =>setMenu("home")}  className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={() =>setMenu("service")} className={menu === "service" ? "active" : ""}>Services</li>
        <li onClick={() =>setMenu("portfolio")} className={menu === "portfolio" ? "active" : ""}>Portfolio</li>
        <li onClick={() =>setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</li>
        <li onClick={() =>setMenu("about")} className={menu === "about" ? "active" : ""}>About Us</li>
      </ul>
    </div>
  );
}
