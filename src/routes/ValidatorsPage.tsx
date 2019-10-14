import React from 'react'
import Content from '../components/Content'
import styles from './ValidatorsPage.module.scss'
import Validators from "../components/Validators"

const ValidatorsPage = () =>{
  return (
    <div className={ styles.validatorsPage }>
      <Content wide>
        <Validators/>
      </Content>
    </div>
  )
}

export default ValidatorsPage