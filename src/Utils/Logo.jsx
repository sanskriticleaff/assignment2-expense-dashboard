import React from 'react'
import logo from '../assets/logo.png'

const Logo = () => {
  return (
    <div className= "flex items-center justify-start h-16 px-4">
      <img src={logo} alt="Logo" className="h-12 w-16" /> 
      <span className="ml-2 text-xl font-bold underline">My Expense App</span> 
    </div>  
  )
}

export default Logo  