import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Routes from './Routes'
import styles from './App.module.scss'

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_URL_GRAPHQL}`,
})

export default class App extends Component {
    public render() {
        return (
            <Router>
                <ApolloProvider client={client}>
                    <div className={styles.app}>
                        <main className={styles.main}>
                            <Routes />
                        </main>
                    </div>
                </ApolloProvider>
            </Router>
        )
    }
}

