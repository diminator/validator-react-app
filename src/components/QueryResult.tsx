import React from 'react'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

type Props = {
  query: any,
  options: any
};

const QueryResult = (props: Props) => {
  const { query, options } = props
  const { loading, error, data } = useSubscription(gql`${query}`, options)

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <pre>
        { error ? <p>Error...</p> : "" }
        { JSON.stringify(error ? error : data, null, 2) }
      </pre>
    </div>
  )
}

export default QueryResult