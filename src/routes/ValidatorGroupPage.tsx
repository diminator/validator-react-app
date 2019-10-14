import React from 'react'
import Content from '../components/Content'
import styles from './ValidatorsPage.module.scss'
import ValidatorGroup from "../components/ValidatorGroup"

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

const ValidatorGroupsPage = (props: Props) =>{
  return (
    <div className={ styles.validatorGroupsPage }>
      <Content wide>
        <h2 className={ styles.title }>Validator Group</h2>
        <ValidatorGroup addressHash={ props.match.params.id }/>
      </Content>
    </div>
  )
}

export default ValidatorGroupsPage