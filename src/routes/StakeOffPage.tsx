import React from 'react'
import Content from '../components/Content'
import styles from './StakeOffPage.module.scss'
import StakeOff from '../components/stakeoff/StakeOff'
import { ReactComponent as Logo } from '../components/stakeoff/celoRings.svg'

const StakeOffPage = () => {
  return (
    <div className={ styles.stakeOffPage }>
      <Content wide>
        <div className={ styles.celoRings }>
          <Logo />
        </div>
        <div className={ styles.title }>
          <h1>
            Have a bit of Baklava
          </h1>
          <h1>
            & a taste of Alfajores
          </h1>
          <div className={ styles.description }>
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit..."
          </div>
        </div>
        <div className={ styles.leaderBoard }>
          <h3>
            Leaderboard
          </h3>
          <h1>
            The Great Celo Stakeoff
          </h1>
          <h3 className={ styles.subTitle }>
            A part of Baklava Testnet
          </h3>
        </div>
        <StakeOff/>
      </Content>
    </div>
  )
}

export default StakeOffPage