import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const QUERY_TRANSACTION = gql`  
  query Transaction($txHash: String) {
        transaction(hash: $txHash) {
          hash,
          blockNumber,
          value,
          gasUsed,
          gasPrice
    }
  }
`

type Props = { txHash: string } & typeof defaultProps;
const defaultProps = {
  txHash: "0x6146a72bea874a75f1566977ab29d9bf6734914aeeb0f723f80b8f6271d65d8e"
};

const Transaction = (props: Props) => {
  const { txHash } = props
  const { loading, error, data } = useQuery(QUERY_TRANSACTION, {
    variables: { txHash },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      <pre>
        { JSON.stringify(data, null, 2) }
      </pre>
    </div>
  )
}

Transaction.defaultProps = defaultProps;

export default Transaction