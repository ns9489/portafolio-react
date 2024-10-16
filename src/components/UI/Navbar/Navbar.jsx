import React from 'react'
import { ItemNavBar } from '../ItemNavBar/ItemNavBar'
import './Navbar.css'

export const Navbar = () => {
  return (
    <nav>
    <ul>
        <ItemNavBar text='¿Quien soy?'/>
        <ItemNavBar text='Un saluo'/>
        <ItemNavBar text='FC Barcelona'/>
    </ul>
    </nav>
  )
}
