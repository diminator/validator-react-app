import React from 'react'
import { Link } from 'react-router-dom'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { loader } from 'graphql.macro'
import decodeHash from '../utils/decodeHash'
import styles from './Blocks.module.scss'

const query = loader('./Blocks.graphql')

const Blocks = () => {
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
      <h2 className={ styles.title }>
        Blocks ({ data.blocks[0].number })
      </h2>
      {
        data.blocks.map((block: any) => {
          return (
            <div key={ block.hash } className={ styles.blockRow }>
              <Link to={ `/blocks/${ decodeHash(block.hash) }` }>
                <div>{ decodeHash(block.hash) }</div>
              </Link>
              <div className={ styles.blockBody }>
                <div>number: { block.number }</div>
                <div>size: { block.size }</div>
                <div>mined by: { block.miner_hash }</div>
                <div>timestamp: { block.timestamp }</div>
                <div>transactions:
                  { block.transactions_aggregate.aggregate.count }
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blocks