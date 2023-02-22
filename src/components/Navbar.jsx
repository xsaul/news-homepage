import React from 'react'
import logo from "../assets/images/logo.svg"

function Navbar() {
  return (
    <div className='flex align-center justify-between py-3'>
        <img src={logo} alt="logo" />
        <div className='flex items-center mr-[5rem]'>
        <ul className=''>
            <li>
            <a className='mx-[1rem] text-[#5D5F79] hover:text-[#E9AB53]' href="#">Home</a>
            <a className='mx-[1rem] text-[#5D5F79] hover:text-[#E9AB53]' href="#">New</a>
            <a className='mx-[1rem] text-[#5D5F79] hover:text-[#E9AB53]' href="#">Popular</a>
            <a className='mx-[1rem] text-[#5D5F79] hover:text-[#E9AB53]' href="#">Trending</a>
            <a className='mx-[1rem] text-[#5D5F79] hover:text-[#E9AB53]' href="#">Categories</a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar