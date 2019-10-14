import React from 'react'
import Content from '../components/Content'
import styles from './AccountPage.module.scss'
import Account from '../components/Account'

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

const AccountPage = (props: Props) => {
  return (
    <div className={ styles.accountPage }>
      <Content wide>
        <h2 className={ styles.title }>Account</h2>
        <Account addressHash={ props.match.params.id }/>
      </Content>
    </div>
  )
}

export default AccountPage