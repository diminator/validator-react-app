import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'
import UserAvatar from "./UserAvatar"

const Navigation = () => {
  return (
    <div className={ styles.nav }>
      <div className={ styles.navRow }>
        <Link to="/stats">stats</Link>
        <Link to="/blocks">blocks</Link>
        <Link to="/transactions">transactions</Link>
        <div className={ styles.navItem }>
          <UserAvatar />
        </div>
        <Link to="/accounts">accounts</Link>
        <Link to="/validators">validators</Link>
        <Link to="/validatorgroups">validatorgroups</Link>
      </div>
    </div>
  )
}

export default Navigation