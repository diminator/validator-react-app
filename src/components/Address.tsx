import React from 'react'
import { loader } from 'graphql.macro'
import QueryResult from './QueryResult'
import encodeHash from '../utils/encodeHash'

const query = loader('./Address.graphql')

type Props = { addressHash: string } & typeof defaultProps
const defaultProps = {
  addressHash: "0x0000000000000000000000000000000000000000"
}

const Address = (props: Props) => {
  const { addressHash } = props

  return (
    <QueryResult query={query}
                 options={{variables: {addressHash: encodeHash(addressHash)}}}
    />
  )
}

Address.defaultProps = defaultProps

export default Address