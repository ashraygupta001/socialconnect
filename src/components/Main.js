import React, {Fragment} from 'react'
import styles from './Main.module.css'

const Main = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.topleft}>
          <div>
            <p style={{color:'white', fontSize:15, padding: 10}}>Total Applications</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Main