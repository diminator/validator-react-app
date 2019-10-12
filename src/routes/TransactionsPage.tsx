import React, { PureComponent } from 'react'
import Content from '../components/Content'
import styles from './TransactionsPage.module.scss'
import Transactions from "../components/Transactions";

interface TransactionsPageProps {}
interface TransactionsPageState {}

class TransactionsPage extends PureComponent<TransactionsPageProps, TransactionsPageState> {
    public render() {
        return (
            <div className={styles.transactionsPage}>
                <Content wide>
                    <h2 className={styles.title}>Transactions</h2>
                    <Transactions />
                </Content>
            </div>
        )
    }
}

export default TransactionsPage