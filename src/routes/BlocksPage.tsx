import React, { PureComponent } from 'react'
import Content from '../components/Content'
import styles from './BlocksPage.module.scss'
import Blocks from "../components/Blocks";

interface Props {}
interface State {}

class BlocksPage extends PureComponent<Props, State> {
  public render() {
    return (
      <div className={ styles.blocksPage }>
        <Content wide>
          <h2 className={ styles.title }>Blocks</h2>
          <Blocks/>
        </Content>
      </div>
    )
  }
}

export default BlocksPage