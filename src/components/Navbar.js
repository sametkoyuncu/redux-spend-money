import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const totalMoney = useSelector((state) => state.products.money)

  return (
    <nav className="navbar">
      <div>
        <p>Spend Money</p>
        <p>{`$${totalMoney}`}</p>
      </div>
    </nav>
  )
}

export default Navbar
