import React, { PureComponent } from 'react'
import Content from '../components/Content'
import styles from './AccountPage.module.scss'
import Address from '../components/Address'

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

interface State {
}

class AccountPage extends PureComponent<Props, State> {
  public render() {
    return (
      <div className={ styles.accountPage }>
        <Content wide>
          <h2 className={ styles.title }>Account</h2>
          <Address addressHash={ this.props.match.params.id }/>
        </Content>
      </div>
    )
  }
}

export default AccountPage