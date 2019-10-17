import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { loader } from 'graphql.macro'
import decodeHash from '../../utils/decodeHash'
import styles from './StakeOff.module.scss'
import { ReactComponent as Circle } from './celoCircle.svg'

const query = loader('./StakeOff.graphql')

// TODO @diminator: fetch from variables.css
const COLORS = [
  '#35D07F',
  '#73DDFF',
  '#FB7C6D',
  '#BF97FF',
  '#FFB765'
]

interface Props {
  accounts: any[]
}

interface State {
  page: number
}

class StakeOff extends Component<Props, State> {
  state = {
    page: 0
  }

  public expand = () => {
    const { page } = this.state
    this.setState({ page: page + 1 })
  }

  public render() {
    const { accounts } = this.props
    const { page } = this.state

    // TODO: move to graphql
    const accountsFiltered = accounts
      .filter((address: any) => address.fetched_coin_balance < 99999e18)
      .slice(
        0,
        COLORS.length * (page + 1)
      )

    const maxBalance = Math.max(...accountsFiltered
      .map((account: any) => account.fetched_coin_balance))
    const SCALE = 3

    return (
      <div className={ styles.leaderBoard }>
        {
          accountsFiltered
            .map((account: any, index: number) => {
              const relBalance = SCALE * account.fetched_coin_balance / maxBalance
              const rowColor = COLORS[index % COLORS.length]
              return (
                <div key={ account.hash }
                     className={ styles.leaderBoardRow }>
                  <Link to={ `/accounts/${ decodeHash(account.hash) }` }
                        style={ { color: rowColor } }>
                    <div>
                      { decodeHash(account.hash) }
                    </div>

                    <div className={ styles.progressBar }>
                      <hr style={ {
                        flex: relBalance,
                        borderTopColor: rowColor
                      } }/>
                      <div className={ styles.leaderBoardItem }>
                        <Circle fill={ rowColor }/>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
        }
        <div className={ styles.leaderBoardAxis }>
          <div style={{ flex: SCALE }}>0 cGLD</div>
          <div className={ styles.leaderBoardItem }>
            { (maxBalance / 1e18).toFixed(2) } cGLD
          </div>
        </div>
        <div className={ styles.stakeOffFooter }>
          <button className={ styles.buttonExpand }
                  onClick={ () => this.expand() }>
            Expand leaderboard? >
          </button>
        </div>
      </div>
    )
  }
}

const StakeOffContainer = () => {
  const { loading, error, data } = useSubscription(gql`${query}`, {})
  if (loading) return <p>Loading...</p>
  if (error) return (
    <div>
      <p>Error...</p>
      <pre>
        { JSON.stringify(error ? error : data, null, 2) }
      </pre>
    </div>
  )
  return (
    <StakeOff accounts={data.addresses} />
  )
}

export default StakeOffContainer