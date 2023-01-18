import React from 'react'
import styles from './Sidebar.module.css'

const Sidebar = (props) => {
  return (
    <div className={styles.side}>
        <div className={styles.step}>
            <div style={props.count===1?{ background: "black", color:"white" }:{background:"white", color:"black"}} className={styles.num}>1</div>
            <div className={styles.option}>
                <p className={styles.count}>STEP 1</p>
                <p className={styles.info}>YOUR INFO</p>
            </div>
        </div>

        <div className={styles.step}>
            <div style={props.count===2?{ background: "black", color:"white" }:{background:"white", color:"black"}} className={styles.num}>2</div>
            <div className={styles.option}>
                <p className={styles.count}>STEP 2</p>
                <p className={styles.info}>SELECT PLAN</p>
            </div>
        </div>

        <div className={styles.step}>
            <div style={props.count===3?{ background: "black", color:"white" }:{background:"white", color:"black"}} className={styles.num}>3</div>
            <div className={styles.option}>
                <p className={styles.count}>STEP 3</p>
                <p className={styles.info}>SUMMARY</p>
            </div>
        </div>
      
    </div>
  )
}

export default Sidebar
