import React, { PureComponent } from 'react'
import Content from '../components/Content'
import styles from './AccountsPage.module.scss'
import Addresses from '../components/Addresses'

interface Props {
}

interface State {
}

class AccountsPage extends PureComponent<Props, State> {
  public render() {
    return (
      <div className={ styles.accountPage }>
        <Content wide>
          <h2 className={ styles.title }>Accounts</h2>
          <Addresses/>
        </Content>
      </div>
    )
  }
}

export default AccountsPage