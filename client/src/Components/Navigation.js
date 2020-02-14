import React from 'react'
import {useDarkMode} from '../Hooks/useDarkMode'

export const Navigation = () =>{
const [darkMode, setDarkMode] = useDarkMode('Dark Mode', false)

     const toggle = e =>{
e.preventDefault();
setDarkMode(!darkMode)
    }
    return (
        <nav className="navbar">
<h1 className="nav-title">Soccer Player</h1>
<button onClick={toggle} className="btn">Change</button>
        </nav>
    )

}