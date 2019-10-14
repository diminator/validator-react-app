import React, { PureComponent } from 'react'
import Content from '../components/Content'
import styles from './BlockPage.module.scss'
import Block from "../components/Block";

interface Props {
  match: {
    params: {
      id: string
    }
  }
}
interface State {}

class BlockPage extends PureComponent<Props, State> {
  public render() {
    return (
      <div className={ styles.blockPage }>
        <Content wide>
          <h2 className={ styles.title }>Block</h2>
          <Block blockHash={ this.props.match.params.id }/>
        </Content>
      </div>
    )
  }
}

export default BlockPage