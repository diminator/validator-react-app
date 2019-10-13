import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AccountPage from './routes/AccountPage'
import AccountsPage from './routes/AccountsPage'
import BlocksPage from './routes/BlocksPage'
import TransactionPage from './routes/TransactionPage'
import TransactionsPage from './routes/TransactionsPage'

const Routes = () => (
  <Switch>
    <Route component={ BlocksPage } exact path="/"/>
    <Route component={ AccountsPage } exact path="/accounts/"/>
    <Route component={ AccountPage } exact path="/accounts/:id"/>
    <Route component={ TransactionsPage } exact path="/transactions"/>
    <Route component={ TransactionPage } exact path="/transactions/:id"/>
  </Switch>
)

export default Routes
