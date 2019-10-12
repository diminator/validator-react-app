import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import {loader} from 'graphql.macro'
import decodeHash from '../utils/decodeHash'
import styles from './Addresses.module.scss'

const query = loader('./Addresses.graphql')

type Props = {
};

const Addresses = (props: Props) => {
  const { loading, error, data } = useQuery(gql`${query}`, {})

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
        data.addresses.map((address: any) => {
          return (
            <div key={address.hash} className={styles.addressRow}>
              <Link to={`/accounts/${decodeHash(address.hash)}`}>
                <div className={styles.addressHash}>
                  {decodeHash(address.hash)}
                </div>
              </Link>
              <div className={styles.addressBalance}>
                {address.fetched_coin_balance}
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default Addresses