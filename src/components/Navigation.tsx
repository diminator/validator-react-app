import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'
import UserAvatar from "./UserAvatar"

export default class Navigation extends Component {
  public render() {
    return (
      <div className={ styles.nav }>
        <Link to="/stats">stats</Link>
        <Link to="/blocks">blocks</Link>
        <Link to="/transactions">transactions</Link>
        <Link to="/accounts">accounts</Link>
        <UserAvatar/>
      </div>
    )
  }
}
