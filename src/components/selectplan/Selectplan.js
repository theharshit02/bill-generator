import React from 'react'
import styles from './Selectplan.module.css'

const Selectplan = () => {
  return (
    <div className={styles.plan}>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or early billing</p>
      <div className={styles.options}>
        <div className={styles.avbloptions}>
          <div className={styles.contents}>
            <div style={ {background: "red"} } className={styles.icon}></div>
            <p className={styles.name}>Arcade</p>
            <p className={styles.price}>$9/mo</p>
          </div>
        </div>

        <div className={styles.avbloptions}>
          <div className={styles.contents}>
              <div style={ {background: "orange"} } className={styles.icon}></div>
              <p className={styles.name}>Advanced</p>
              <p className={styles.price}>$12/mo</p>
          </div>
        </div>

        <div className={styles.avbloptions}>
          <div className={styles.contents}>
            <div style={ {background: "green"} } className={styles.icon}></div>
            <p className={styles.name}>Pro</p>
            <p className={styles.price}>$15/mo</p>
          </div>
        </div>
      </div>
      <div className={styles.plantype}>
          <p>Monthly</p>
          <label class={styles.switch}>
            <input type="checkbox"/>
            <span class={`${styles.slider} ${styles.round}`}></span>
          </label>
          <p>Yearly</p>
      </div>
    </div>
  )
}

export default Selectplan
