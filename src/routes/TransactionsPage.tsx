import React, { PureComponent } from 'react'
import Content from '../components/Content'
import styles from './TransactionsPage.module.scss'
import Transactions from "../components/Transactions";

interface Props {}
interface State {}

class TransactionsPage extends PureComponent<Props, State> {
  public render() {
    return (
      <div className={ styles.transactionsPage }>
        <Content wide>
          <h2 className={ styles.title }>Transactions</h2>
          <Transactions/>
        </Content>
      </div>
    )
  }
}

export default TransactionsPage