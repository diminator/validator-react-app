import React, { PureComponent } from 'react'
import Content from '../components/Content'
import styles from './TransactionPage.module.scss'
import Transaction from "../components/Transaction";

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

interface State {
}

class TransactionPage extends PureComponent<Props, State> {
  public render() {
    return (
      <div className={ styles.transactionPage }>
        <Content wide>
          <h2 className={ styles.title }>Transaction</h2>
          <Transaction txHash={ this.props.match.params.id }/>
        </Content>
      </div>
    )
  }
}

export default TransactionPage