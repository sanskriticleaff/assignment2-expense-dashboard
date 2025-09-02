import React from 'react'


const Navbar = () => {
  

  return (
    <>
       <nav className=" fixed left-0  w-full bg-gray-900 text-white p-4">
      <div className="flex justify-end space-x-6">
        <a href="#dashboard" className="hover:text-gray-400 text-bold">
          Home
        </a>
        <a href="#expenses" className="hover:text-gray-400 text-bold">
          Expenses
        </a>
      </div>
    </nav>
      
    </>
  )
}

export default Navbar