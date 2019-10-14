import React from 'react'
import Content from '../components/Content'
import styles from './BlocksPage.module.scss'
import Blocks from "../components/Blocks"

const BlocksPage = () => {
  return (
    <div className={ styles.blocksPage }>
      <Content wide>
        <Blocks/>
      </Content>
    </div>
  )
}

export default BlocksPage