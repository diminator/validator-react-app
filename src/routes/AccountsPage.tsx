import React, { PureComponent } from 'react'
import Content from '../components/Content'
import styles from './AccountsPage.module.scss'
import Addresses from '../components/Addresses'

interface AccountsPageProps {
    match: {
        params: {
            id: string
        }
    }
}

interface AccountsPageState {

}

class AccountsPage extends PureComponent<AccountsPageProps, AccountsPageState> {
    public render() {
        return (
            <div className={styles.accountPage}>
                <Content wide>
                    <h2 className={styles.title}>Accounts</h2>
                    <Addresses />
                </Content>
            </div>
        )
    }
}

export default AccountsPage