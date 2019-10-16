import React, { Component } from 'react'
import { Link } from "react-router-dom";
import styles from './UserAvatar.module.scss'
import { User } from '../context'

export default class UserAvatar extends Component {
  public render() {
    const { account, balance } = this.context
    return (
      <div className={ styles.container }>
        <span className={ !!account ? styles.dotGreen : styles.dotRed } />
        { !!account ? (
          <Link to={ `/accounts/${ account }` }>
            { `${ account.substr(0, 6) }.. (${ (balance / 1e18).toFixed(2) }cG) ` }
          </Link>
        ) : "Connect to Web3"
        }
      </div>
    )
  }
}

UserAvatar.contextType = User
