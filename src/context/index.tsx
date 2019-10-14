import React from 'react'

export const User = React.createContext({
  isLogged: false,
  isBurner: false,
  isWeb3Capable: false,
  isLoading: false,
  account: '',
  web3: {},
  network: '',
  loginMetamask: () => {
    /* empty */
  },
  message: ''
})
