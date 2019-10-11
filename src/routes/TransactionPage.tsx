import React, { PureComponent } from 'react'
import Content from '../components/Content'
import styles from './TransactionPage.module.scss'
import Transaction from "../components/Transaction";

interface TransactionPageProps {
    match: {
        params: {
            id: string
        }
    }
}

interface TransactionPageState {

}

class TransactionPage extends PureComponent<TransactionPageProps, TransactionPageState> {
    public render() {
        return (
            <div className={styles.transactionPage}>
                <Content wide>
                    <h2 className={styles.title}>Transaction</h2>
                    <Transaction txHash={this.props.match.params.id}/>
                </Content>
            </div>
        )
    }
}

export default TransactionPage