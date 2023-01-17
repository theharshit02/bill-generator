import React from 'react'
import styles from './Yourinfo.module.css'

const Yourinfo = () => {
  return (
    <div className={styles.info}>
      <h2>Your Information</h2>
      <div className={styles.field}>
        <p className={styles.title}>Name</p>
        <input type="text" placeholder='Enter your name' name="" id=""/>
        <p className={styles.title}>Email</p>
        <input type="email" placeholder='Enter your email' name="" id=""/>
        <p className={styles.title}>Phone No.</p>
        <input type="number" placeholder='Enter your mobile no.' name='' id=''/>
      </div>
      
    </div>
  )
}

export default Yourinfo
