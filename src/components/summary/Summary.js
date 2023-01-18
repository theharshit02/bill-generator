import React from 'react'
import styles from './Summary.module.css'

const Summary = (props) => {
  return (
    <div className={styles.summary}>
      <h2>Summary</h2>
      <div className={styles.info}>
            <p>Name: {props.name}</p>
            <p>Email: {props.email} </p>
            <p>Phone: {props.phone} </p>
            <p>Plan: {props.plan} </p>
            <p>Total: {props.price}</p>
            <div className={styles.line}></div>
            <div className={styles.total}><p>Grand Total: </p><p>{props.price}</p></div>
       </div>
    </div>
  )
}

export default Summary
