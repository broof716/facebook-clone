import { Flag, Home, Search, StorefrontOutlined, Subscriptions, SupervisedUserCircle } from '@material-ui/icons';
import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="" />
      </div>
      <div className="header__input">
        <Search />
        <input type="text" />
      </div>
      <div className="header__middle">
        <div className="header__option">
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <Subscriptions fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontSize="large" />
        </div>

      </div>
      <div className="header__right">

      </div>
      
      
    </div>
  )
}

export default Header
