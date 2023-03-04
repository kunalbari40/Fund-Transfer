import React from 'react'
//import withdraw from './withdraw'
import styles from './withdraw.module.css'

export default function Withdraw() {

  const onWithdraw = (e) => {
    e.preventDefault()
    const acId = e.target.acId.value
    const acNm = e.target.acNm.value
    const acNum = e.target.acNum.value
    const amount = e.target.amount.value

    console.log(`Id ${acId} Name ${acNm} Number ${acNum} Amount ${amount} `)

    fetch('http://localhost:3100/withdraw', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ acId, acNm, acNum, amount })
    }).then(res => res.json())
      .then(json => console.log(json))

  }
  return (
    <div className={styles.wthCont}>
      <h1> Withdraw Amount </h1>
      <form onSubmit={onWithdraw}>
        <input type='number' placeholder='Account Id' name='acId' />
        <input type='text' placeholder='Account Holder Name' name='acNm' />
        <input type='number' placeholder='Account Number' name='acNum' />
        <input type='number' placeholder='Amount' name='amount' />
        <input type='submit' value='Withdraw' />
      </form>
    </div>
  )
}
