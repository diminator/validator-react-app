import React, { PureComponent } from 'react'
import { newKitFromWeb3 } from '@celo/contractkit'
import Web3 from 'web3'
import { User } from '.'
import { MetamaskProvider } from './MetamaskProvider'
import {
  Validator,
  ValidatorGroup
} from "@celo/contractkit/lib/wrappers/Validators"

const nodeUri = "http://localhost:8545"
const POLL_ACCOUNTS = 1000 // every 1s
const POLL_NETWORK = POLL_ACCOUNTS * 3 // every 3s
const DEFAULT_WEB3 = new Web3(new Web3.providers.HttpProvider(nodeUri)) // default web3

// taken from
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/web3/providers.d.ts
interface JsonRPCRequest {
  jsonrpc: string
  method: string
  params: any[]
  id: number
}

interface JsonRPCResponse {
  jsonrpc: string
  id: number
  result?: any
  error?: string
}

interface Callback<ResultType> {
  (error: Error): void

  (error: null, val: ResultType): void
}

declare global {
  interface Window {
    web3: any
    ethereum: {
      enable(): void
      send(
        payload: JsonRPCRequest,
        callback: Callback<JsonRPCResponse>
      ): any
    }
  }
}

interface UserProviderState {
  isLogged: boolean
  isBurner: boolean
  isWeb3Capable: boolean
  isLoading: boolean
  account: string
  network: string
  web3: Web3
  balance: string
  validators: Validator[]
  validatorGroups: ValidatorGroup[]
  loginMetamask(): Promise<any>
  message: string
}

export default class UserProvider extends PureComponent<{}, UserProviderState> {
  private loginMetamask = async () => {
    const metamaskProvider = new MetamaskProvider()
    await metamaskProvider.startLogin()
    const web3 = metamaskProvider.getProvider()
    this.setState(
      {
        isLogged: true,
        isBurner: false,
        web3
      },
      () => {
        this.load()
      }
    )
  }

  public state = {
    isLogged: false,
    isBurner: false,
    isWeb3Capable: Boolean(window.web3 || window.ethereum),
    isLoading: true,
    network: '',
    web3: DEFAULT_WEB3,
    account: '',
    balance: '-',
    validators: [],
    validatorGroups: [],
    loginMetamask: () => this.loginMetamask(),
    message: 'Connecting to Web3...'
  }

  private accountsInterval: any = null
  private networkInterval: any = null

  public async componentDidMount() {
    await this.bootstrap()
  }

  private initAccountsPoll() {
    if (!this.accountsInterval) {
      this.accountsInterval = setInterval(
        this.fetchAccounts,
        POLL_ACCOUNTS
      )
    }
  }

  private initNetworkPoll() {
    if (!this.networkInterval) {
      this.networkInterval = setInterval(this.fetchValidators, POLL_NETWORK)
    }
  }

  private loadDefaultWeb3 = async () => {
    this.setState(
      {
        isLogged: false,
        isBurner: false,
        web3: DEFAULT_WEB3
      },
      () => {
        this.load()
      }
    )
  }

  private load = async () => {
    this.setState({ isLoading: false }, () => {
      this.initNetworkPoll()
      this.initAccountsPoll()
      this.fetchValidators()
      this.fetchAccounts()
    })
  }

  private bootstrap = async () => {
    const logType = localStorage.getItem('logType')
    const metamaskProvider = new MetamaskProvider()

    switch (logType) {
      case 'Metamask':
        if (
          (await metamaskProvider.isAvailable()) &&
          (await metamaskProvider.isLogged())
        ) {
          const web3 = metamaskProvider.getProvider()
          this.setState(
            {
              isLogged: true,
              web3
            },
            () => {
              this.load()
            }
          )
        } else {
          this.loadDefaultWeb3()
        }
        break
      default:
        this.loginMetamask()
        break
    }
  }

  private fetchAccounts = async () => {
    const { isLogged, web3 } = this.state

    if (isLogged) {
      let accounts

      // Modern dapp browsers
      if (window.ethereum && !isLogged) {
        // simply set to empty, and have user click a button somewhere
        // to initiate account unlocking
        accounts = []

        // alternatively, automatically prompt for account unlocking
        // await this.unlockAccounts()
      }
      accounts = await web3.eth.getAccounts()

      if (accounts.length > 0) {
        const account = accounts[0]

        if (account !== this.state.account) {
          this.setState({
            account,
            isLogged: true
          })
          await this.fetchBalance(account)
        }
      } else {
        !isLogged && this.setState({ isLogged: false, account: '' })
      }
    }
  }

  private fetchBalance = async (account: string) => {
    const { web3 } = this.state
    const balance = await web3.eth.getBalance(account)
    if (balance !== this.state.balance) {
      this.setState({ balance })
    }
  }

  private fetchValidators = async () => {
    const kit = newKitFromWeb3(this.state.web3)
    const validatorContract = await kit.contracts.getValidators()
    const validators = await validatorContract.getRegisteredValidators()
    const validatorGroups = await validatorContract.getRegisteredValidatorGroups()
    this.setState({ validators, validatorGroups })
    console.log('fetched validators')
  }


  public render() {
    return (
      <User.Provider value={ this.state }>
        { this.props.children }
      </User.Provider>
    )
  }
}
