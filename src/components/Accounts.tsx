import React from 'react'
import { Link } from 'react-router-dom'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { loader } from 'graphql.macro'
import decodeHash from '../utils/decodeHash'
import styles from './Accounts.module.scss'

const query = loader('./Addresses.graphql')

const Accounts = () => {
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
      <h2>Accounts ({ data.addresses.length })</h2>
      {
        data.addresses.map((address: any) => {
          return (
            <div key={ address.hash } className={ styles.addressRow }>
              <Link to={ `/accounts/${ decodeHash(address.hash) }` }>
                <div className={ styles.addressHash }>
                  { decodeHash(address.hash) }
                </div>
              </Link>
              <div className={ styles.addressBalance }>
                { (address.fetched_coin_balance / 1e18).toFixed(18) } cGLD
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Accounts