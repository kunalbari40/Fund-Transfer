import React from 'react'
import { useNavigate } from 'react-router-dom'
//import dashboard from './dashboard'
import styles from './dashboard.module.css'

export default function Dashboard() {

  const navigate = useNavigate()

  return (
    <div className={styles.dashCont} >
      <div onClick={() => navigate('/deposit')}>
        Deposit
      </div>
      <div onClick={() => navigate('/withdraw')}>
        Withdraw
      </div>
      <div onClick={() => navigate('/transfer')}>
        Transfer
      </div>
      <div onClick={() => navigate('/balance')}>
        Balance
      </div>
    </div>
  )
}
