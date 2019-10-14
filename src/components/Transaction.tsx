import React from 'react'
import { loader } from 'graphql.macro'
import QueryResult from './QueryResult'
import encodeHash from '../utils/encodeHash'

const query = loader('./Transaction.graphql')

type Props = { txHash: string } & typeof defaultProps
const defaultProps = {
  txHash: "0x6146a72bea874a75f1566977ab29d9bf6734914aeeb0f723f80b8f6271d65d8e"
}

const Transaction = (props: Props) => {
  const { txHash } = props
  return (
    <QueryResult query={ query }
                 options={ { variables: { txHash: encodeHash(txHash) } } }
    />
  )
}

Transaction.defaultProps = defaultProps

export default Transaction