import React from 'react'
import gql from 'graphql-tag'
import { useSubscription } from "@apollo/react-hooks"
import { loader } from "graphql.macro"
import Content from '../components/Content'
import Transactions from "../components/Transactions"
import styles from './TransactionsPage.module.scss'

const query = loader('../components/TransactionsCount.graphql')

const TransactionsPage = () => {
  const { data } = useSubscription(gql`${query}`, {})

  return (
    <div className={ styles.transactionsPage }>
      <Content wide>
        <h2 className={ styles.title }>
          Transactions ({ data && data.transactions_aggregate.aggregate.count })
        </h2>
        <Transactions/>
      </Content>
    </div>
  )
}

export default TransactionsPage