import React from 'react'
import { useSelector } from 'react-redux'
import { addCommaToMoney } from '../functions/addCommaToMoney'

const Navbar = () => {
  const money = useSelector((state) => state.products.money)

  const moneyWithCommas = addCommaToMoney(money)

  return (
    <nav className="navbar">
      <div>
        <p>Spend Money</p>
        <p>{`$${moneyWithCommas}`}</p>
      </div>
    </nav>
  )
}

export default Navbar
