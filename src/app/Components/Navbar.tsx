import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className='nav'>
      <Link href="/" className="flex justify-center items-center">
          <img src='Guffadi Logo.png' alt='Logo' width={100} height={100}/>
      </Link>
      </nav>
    </header>
  )
}

export default Navbar