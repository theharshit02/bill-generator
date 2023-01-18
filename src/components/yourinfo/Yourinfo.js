import React, { useState } from 'react'
import styles from './Yourinfo.module.css'

const Yourinfo = (props) => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone ] = useState()

  function handlename(e){
    setname(e.target.value)
  }
  function handleemail(e){
    setemail(e.target.value)
  }
  function handlephone(e){
    setphone(e.target.value)
  }

  props.custname(name)
  props.custemail(email)
  props.custphone(phone)

  return (
    <div className={styles.info}>
      <h2>Your Information</h2>
      <div className={styles.field}>

        <p className={styles.title}>Name</p>
        <input type="text" onChange={handlename} placeholder='Enter your name' name="" id=""/>

        <p className={styles.title}>Email</p>
        <input type="email" onChange={handleemail} placeholder='Enter your email' name="" id=""/>

        <p className={styles.title}>Phone No.</p>
        <input type="number" onChange={handlephone} placeholder='Enter your mobile no.' name='' id=''/>

      </div>
      
    </div>
  )
}

export default Yourinfo
