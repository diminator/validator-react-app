import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AccountPage from './routes/AccountPage'
import TransactionPage from './routes/TransactionPage'

const Routes = () => (
    <Switch>
        <Route component={TransactionPage} exact path="/" />
        <Route component={AccountPage} exact path="/accounts/:id" />
        <Route component={TransactionPage} exact path="/transactions/:id" />
    </Switch>
)

export default Routes
