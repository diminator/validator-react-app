import React from 'react'
import { loader } from 'graphql.macro'
import QueryResult from './QueryResult'
import encodeHash from '../utils/encodeHash'

const query = loader('./Address.graphql')

interface Props {
  addressHash: string
}

const Address = (props: Props) => {
  const { addressHash } = props

  return (
    <QueryResult query={ query }
                 options={ { variables: { addressHash: encodeHash(addressHash) } } }
    />
  )
}

export default Address