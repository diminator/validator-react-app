import React from 'react'
import Content from '../components/Content'
import styles from './AccountsPage.module.scss'
import Accounts from '../components/Accounts'

const AccountsPage = () => {
  return (
    <div className={ styles.accountPage }>
      <Content wide>
        <Accounts/>
      </Content>
    </div>
  )
}

export default AccountsPage