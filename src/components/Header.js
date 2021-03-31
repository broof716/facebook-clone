import { Avatar, IconButton } from '@material-ui/core';
import { Add, ExpandMore, Flag, Forum, Home, NotificationsActive, Search, StorefrontOutlined, Subscriptions, SupervisedUserCircle } from '@material-ui/icons';
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
      <div className="header__center">
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
        <div className="header__info">
          <Avatar />
          <h4>Bryan Roof</h4>
        </div>

        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsActive />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
      
      
    </div>
  )
}

export default Header
