import React, { PureComponent } from 'react'
import { Link } from "react-router-dom"
import { Validator} from "@celo/contractkit/lib/wrappers/Validators"
import styles from "./Validators.module.scss"
import { User } from '../context'

interface Props {
}

interface State {
}

class Validators extends PureComponent<Props, State> {
  public render() {
    const { validators } = this.context
    return (
      <div>
        <h2 className={ styles.title }>
          Validators ({ validators.length })
        </h2>
        {
          validators.map((validator: Validator) => {
            return (
              <div key={ validator.address } className={ styles.validatorRow }>
                <Link to={ `/accounts/${ validator.address }` }>
                  <div>{ validator.address }</div>
                </Link>
                <div className={ styles.validatorBody }>
                  <div>id: { validator.id }</div>
                  <div>name: { validator.name }</div>
                  <div>url: { validator.url }</div>
                  <div>affiliation: { validator.affiliation }</div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

Validators.contextType = User

export default Validators