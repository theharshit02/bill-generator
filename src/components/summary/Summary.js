import React from 'react'
import styles from './Summary.module.css'

const Summary = () => {
  return (
    <div className={styles.summary}>
      <h2>Summary</h2>
      <div className={styles.info}>
            <p>Name: </p>
            <p>Email: </p>
            <p>Phone: </p>
            <p>Plan: </p>
            <p>Total: </p>
            <div className={styles.line}></div>
            <div className={styles.total}><p>Grand Total: </p><p>$9</p></div>
       </div>
    </div>
  )
}

export default Summary
