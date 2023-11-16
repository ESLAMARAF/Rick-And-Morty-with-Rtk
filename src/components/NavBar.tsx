import React, { useContext } from 'react'
import './navbar.css'
import {themeContext} from '../App.tsx'



function NavBar() {
    const { ThemeMode } = useContext<any>(themeContext);
    const { changeMode } = useContext<any>(themeContext);

    
  return (
    <><div className="nav-bar">
    <div className="nav-bar-1">
     <div className='nav-logo'>
     <i className="fa-brands fa-github"/>    </div>
    <div className='nav-title'>
    <h3>Rick and Morty wiki</h3>
    </div>
    <div className="epesods">
   
   
     </div>
   <div className='nav-mode-btn'>
    <button className={`mode-btn ${ThemeMode?'btn-dark':'btn-light'}`} onClick={changeMode}>
        {<i className={`modes-icon ${ThemeMode?"fa-regular fa-moon":"fa-solid fa-sun"}`}></i>}</button>
    </div>
    </div>
    <div className="nav-bar-2">

    </div>
    </div>
    </>
  )
}

export default NavBar