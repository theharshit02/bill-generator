import React, { useState } from 'react'
import styles from './Maintile.module.css'
import Sidebar from '../sidebar/Sidebar'
import Yourinfo from '../yourinfo/Yourinfo'
import Selectplan from '../selectplan/Selectplan'
import Summary from '../summary/Summary'


const Maintile = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone ] = useState()
  const [planname, setplanname] = useState("")
  const [planprice, setplanprice] = useState("")
  const [plantype, setplantype] = useState()
  const [count, setcount] = useState(1)

  function handlename(e){
    setname(e)
  }
  function handleemail(e){
    setemail(e)
  }
  function handlephone(e){
    setphone(e)
  }
  function handleplanname(e){
    setplanname(e)
  }
  function handleplanprice(e){
    setplanprice(e)
  }
  function handleplantype(e){
    setplantype(e)
  }

  function next(){
    const x=count+1
    if(x>3){
      setcount(3)
    }
    else{
      setcount(count+1)
    }
  }
  function back(){
    const x=count-1
    if(x<1){
      setcount(1)
    }
    else{
      setcount(count-1)
    }
    
  }
  return (
    <div className={styles.main}>
      <Sidebar count={count}/>

      <div className={styles.content}>
        {
          count>1?count===3?<Summary name={name} email={email} phone={phone} plan={planname} price={planprice} plantype={plantype} />:<Selectplan planName={handleplanname} planPrice={handleplanprice} planType={handleplantype}/>:<Yourinfo custname={handlename} custemail={handleemail} custphone={handlephone} />
        }
        <div className={styles.btn}>
            <button onClick={back}>Go Back</button>
            <button onClick={next}> {count===3?"Pay Now":"Next Step"}</button>
        </div>
      </div>
      
    </div>
  )
}

export default Maintile
