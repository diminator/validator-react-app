import React from 'react'
import { loader } from 'graphql.macro'
import QueryResult from './QueryResult'
import encodeHash from '../utils/encodeHash'

const query = loader('./Block.graphql')

interface Props {
  blockHash: string
}

const Block = (props: Props) => {
  const { blockHash } = props

  return (
    <QueryResult query={ query }
                 options={ { variables: { blockHash: encodeHash(blockHash) } } }
    />
  )
}

export default Block