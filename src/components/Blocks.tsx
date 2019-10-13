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
      {
        data.blocks.map((block: any) => {
          return (
            <div key={ block.hash } className={ styles.blockRow }>
              <Link to={ `/blocks/${ decodeHash(block.hash) }` }>
                <div>{ decodeHash(block.hash) }</div>
              </Link>
              <div className={ styles.blockBody }>
                <div>block number: { block.number }</div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Blocks