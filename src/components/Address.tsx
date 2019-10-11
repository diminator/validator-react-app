import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const QUERY_ADDRESS = gql`  
  query Address($addressHash: String) {
        address(hash: $addressHash) {
          contractCode,
          fetchedCoinBalance,
          fetchedCoinBalanceBlockNumber,
          hash
    }
  }
`

type Props = { addressHash: string } & typeof defaultProps;
const defaultProps = {
  addressHash: "0x0000000000000000000000000000000000000000"
};

const Address = (props: Props) => {
  const { addressHash } = props
  const { loading, error, data } = useQuery(QUERY_ADDRESS, {
    variables: { addressHash },
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

Address.defaultProps = defaultProps;

export default Address