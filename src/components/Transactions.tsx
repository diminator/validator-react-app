import React from 'react'
import { Link } from 'react-router-dom'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { loader } from 'graphql.macro'
import decodeHash from '../utils/decodeHash'
import styles from './Transactions.module.scss'

const query = loader('./Transactions.graphql')

const Transactions = () => {
  const { loading, error, data } = useSubscription(gql`${query}`, {})

  if (loading) return <p>Loading...</p>
  if (error) return (
    <div>
      <p>Error...</p>
      <pre>
        { JSON.stringify(error ? error : data, null, 2) }
      </pre>
    </div>
  )
  return (
    <div>
      {
        data.transactions.map((transaction: any) => {
          return (
            <div key={ transaction.hash } className={ styles.transactionRow }>
              <Link to={ `/transactions/${ decodeHash(transaction.hash) }` }>
                <div>{ decodeHash(transaction.hash) }</div>
              </Link>
              <div className={ styles.transactionBody }>
                <div>block number: { transaction.block_number }</div>
                <div>from: { decodeHash(transaction.from_address_hash) }</div>
                { !!transaction.to_address_hash && (
                  <div>to: { decodeHash(transaction.to_address_hash) }</div>
                ) }
                <div>value: { transaction.value }</div>
                <div>gas used: { transaction.gas_used }</div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default Transactions