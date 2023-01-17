import React from 'react'
import styles from './Maintile.module.css'
import Sidebar from '../sidebar/Sidebar'
import Yourinfo from '../yourinfo/Yourinfo'
import Selectplan from '../selectplan/Selectplan'
import Summary from '../summary/Summary'


const Maintile = () => {
  return (
    <div className={styles.main}>
      <Sidebar/>

      <div className={styles.content}>
        <Yourinfo/>
        {/* <Selectplan/> */}
        {/* <Summary/> */}
        <div className={styles.btn}>
            <button>Go Back</button>
            <button>Next Step</button>
        </div>
      </div>
      
    </div>
  )
}

export default Maintile
