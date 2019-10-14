import React, { PureComponent } from 'react'
import { Link } from "react-router-dom"
import styles from "./Validators.module.scss"
import { User } from '../context'

interface Props {
  addressHash: string
}

interface State {
}

class ValidatorGroup extends PureComponent<Props, State> {
  public render() {
    const { validatorGroups } = this.context
    const validatorGroup = validatorGroups[0]
    return (
      <div>
        <pre>{ JSON.stringify(validatorGroup, null, 2) }</pre>
      </div>
    )
  }
}

ValidatorGroup.contextType = User

export default ValidatorGroup