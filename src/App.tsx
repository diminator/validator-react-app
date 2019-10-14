import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { ApolloProvider } from '@apollo/react-hooks'
import Routes from './Routes'
import styles from './App.module.scss'
import UserProvider from "./context/UserProvider"
import Navigation from "./components/Navigation"

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
      <UserProvider>
        <Router>
          <ApolloProvider client={ createApolloClient() }>
            <div className={ styles.app }>
              <Navigation/>
              <main className={ styles.main }>
                <Routes/>
              </main>
            </div>
          </ApolloProvider>
        </Router>
      </UserProvider>
    )
  }
}