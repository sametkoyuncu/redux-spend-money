import React from 'react'

import avatar from '../images/billGatesAvatar.png'
import Card from './Card'

const TitleCard = () => {
  return (
    <Card>
      <div className="titleCard">
        <img src={avatar} className="avatar" alt="Bill Gates" />
        <p>Spend Bill Gates' Money</p>
      </div>
    </Card>
  )
}

export default TitleCard
