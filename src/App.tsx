import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloProvider } from '@apollo/react-hooks'
import Routes from './Routes'
import styles from './App.module.scss'

const graphqlURI: string = `${ process.env.REACT_APP_URL_GRAPHQL }`

export default class App extends Component {
  public render() {
    const createApolloClient = () => {
      return new ApolloClient({
        link: new WebSocketLink({
          uri: graphqlURI,
          options: {
            reconnect: true
          }
        }),
        cache: new InMemoryCache(),
      })
    }
    return (
      <Router>
        <ApolloProvider client={ createApolloClient() }>
          <div className={ styles.app }>
            <div className={ styles.nav }>
              <Link to="/stats">stats</Link>
              <Link to="/blocks">blocks</Link>
              <Link to="/transactions">transactions</Link>
              <Link to="/accounts">accounts</Link>
            </div>
            <main className={ styles.main }>
              <Routes/>
            </main>
          </div>
        </ApolloProvider>
      </Router>
    )
  }
}

