import React, { PureComponent } from 'react'
import { Link } from "react-router-dom"
import { ValidatorGroup} from "@celo/contractkit/lib/wrappers/Validators"
import styles from "./Validators.module.scss"
import { User } from '../context'

interface Props {
}

interface State {
}

class ValidatorGroups extends PureComponent<Props, State> {
  public render() {
    const { validatorGroups } = this.context
    return (
      <div>
        <h2 className={ styles.title }>
          Validator Groups ({ validatorGroups.length })
        </h2>
        {
          validatorGroups.map((validatorGroup: ValidatorGroup) => {
            return (
              <div key={ validatorGroup.address } className={ styles.validatorRow }>
                <Link to={ `/validatorgroups/${ validatorGroup.address }` }>
                  <div>{ validatorGroup.address }</div>
                </Link>
                <div className={ styles.validatorBody }>
                  <div>id: { validatorGroup.id }</div>
                  <div>name: { validatorGroup.name }</div>
                  <div>url: { validatorGroup.url }</div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

ValidatorGroups.contextType = User

export default ValidatorGroups