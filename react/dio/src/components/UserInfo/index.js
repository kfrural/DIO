import React from 'react'

import'./userInfo.css';

const UserInfo = ({nome,image, percentual}) => {
  return (
    <div className="Container">
        <div className="UserPicture"src={image} />
        <div>
            <div className="NameText">{nome}</div>
            <div className="Progress" percentual={percentual} />
        </div>
    </div>
  )
}

export { UserInfo }