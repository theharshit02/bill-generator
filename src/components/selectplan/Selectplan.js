import React, { useState } from 'react'
import styles from './Selectplan.module.css'

const Selectplan = (props) => {

  const [selected, setselected] = useState(0)
  const [name, setname] = useState("")
  const [price, setprice] = useState("")
  const [plan, setplan] = useState()


  function handleselected(e){
    setselected(e.target.id)
    const content = e.target.querySelectorAll("p")    
    setname(content[0].innerHTML)
    setprice(content[1].innerHTML)
  }

  props.planName(name)
  props.planPrice(price)

  function handlecheck(e){
    setplan(e.target.checked)
  }

  props.planType(plan)


  return (
    <div className={styles.plan}>
      <h2>Select your plan</h2>
      <p>You have the option of monthly or early billing</p>

      <div className={styles.options}>

        <div onClick={(e)=>handleselected(e)} id="1" style={selected==="1"?{background:"#DADADA"}:{background:"white"}} className={styles.avbloptions}>
          <div className={styles.contents}>
            <div style={ {background: "red"} } className={styles.icon}></div>
            <p id="name" className={styles.name}>Arcade</p>
            <p id='price' className={styles.price}>$9/mo</p>
          </div>
        </div>

        <div onClick={handleselected} id="2" style={selected==="2"?{background:"#DADADA"}:{background:"white"}} className={styles.avbloptions}>
          <div className={styles.contents}>
              <div style={ {background: "orange"} } className={styles.icon}></div>
              <p className={styles.name}>Advanced</p>
              <p className={styles.price}>$12/mo</p>
          </div>
        </div>

        <div onClick={handleselected} id="3" style={selected==="3"?{background:"#DADADA"}:{background:"white"}} className={styles.avbloptions}>
          <div className={styles.contents}>
            <div style={{background: "green"} } className={styles.icon}></div>
            <p className={styles.name}>Pro</p>
            <p className={styles.price}>$15/mo</p>
          </div>
        </div>

      </div>

      <div className={styles.plantype}>
          <p>Monthly</p>
          <label class={styles.switch}>
            <input onClick={handlecheck} type="checkbox"/>
            <span class={`${styles.slider} ${styles.round}`}></span>
          </label>
          <p>Yearly</p>
      </div>

    </div>
  )
}

export default Selectplan
