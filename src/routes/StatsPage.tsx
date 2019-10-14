import React, { PureComponent } from 'react'
import Content from '../components/Content'
import styles from './StatsPage.module.scss'
import EthStats from "../components/EthStats"

interface Props {}
interface State {}

class StatsPage extends PureComponent<Props, State> {
  public render() {
    return (
      <div className={ styles.statsPage }>
        <Content wide>
          <h2 className={ styles.title }>Stats</h2>
          <EthStats/>
        </Content>
      </div>
    )
  }
}

export default StatsPage