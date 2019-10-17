import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AccountPage from './routes/AccountPage'
import AccountsPage from './routes/AccountsPage'
import BlockPage from './routes/BlockPage'
import BlocksPage from './routes/BlocksPage'
import StatsPage from './routes/StatsPage'
import TransactionPage from './routes/TransactionPage'
import TransactionsPage from './routes/TransactionsPage'
import ValidatorsPage from './routes/ValidatorsPage'
import ValidatorGroupPage from "./routes/ValidatorGroupPage"
import ValidatorGroupsPage from "./routes/ValidatorGroupsPage"
import StakeOffPage from "./routes/StakeOffPage"

const Routes = () => (
  <Switch>
    <Route component={ StakeOffPage } exact path="/"/>
    <Route component={ AccountsPage } exact path="/accounts/"/>
    <Route component={ AccountPage } exact path="/accounts/:id"/>
    <Route component={ BlockPage } exact path="/blocks/:id"/>
    <Route component={ BlocksPage } exact path="/blocks"/>
    <Route component={ StatsPage } exact path="/stats"/>
    <Route component={ TransactionPage } exact path="/transactions/:id"/>
    <Route component={ TransactionsPage } exact path="/transactions"/>
    <Route component={ ValidatorsPage } exact path="/validators"/>
    <Route component={ ValidatorGroupPage } exact path="/validatorgroups/:id"/>
    <Route component={ ValidatorGroupsPage } exact path="/validatorgroups"/>
  </Switch>
)

export default Routes
