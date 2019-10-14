import React from 'react'
import Content from '../components/Content'
import styles from './ValidatorsPage.module.scss'
import ValidatorGroups from "../components/ValidatorGroups"

const ValidatorGroupsPage = () =>{
  return (
    <div className={ styles.validatorGroupsPage }>
      <Content wide>
        <ValidatorGroups/>
      </Content>
    </div>
  )
}

export default ValidatorGroupsPage