import React, { useState } from 'react'
import "./Home.css"

export default function Transaction() {

    const [form, setForm] = useState({
        name: '',
        number: '',
        amount: '',
        psw: '',
        remark: '',
    });
   

    const handleInputChange = (e) =>{
        const tempForm = {...form}
        tempForm[e.target.name] = e.target.value;
        setForm(tempForm);
        console.log(tempForm);
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const handleReset = () => {
        setForm({
            name: '',
            number: '',
            amount: '',
            psw: '',
            remark: '',
        })
    }
    
  return (
    <form className='Transaction_Details' onSubmit={handleSubmit}>
        <h4>TRANSACTION DETAILS </h4>
        <div className='form-group col-sm-12' >
            <label htmlFor='name'>Account Holder Name</label>
            <input className='form-control' type="text" value={form.name} id='name' name='name' onChange={handleInputChange} required />
        </div>
        
        <div className= 'form-group col-sm-12'>
            <label htmlFor='number'>Account Number</label>
            <input className='form-control' type="number" value={form.number} id='number' name='number' onChange={handleInputChange} required />
        </div>
        <div className= 'form-group col-sm-12'>
            <label htmlFor='amount'>Amount</label>
            <input className='form-control' type="number" value={form.amount} id='amount' name='amount' onChange={handleInputChange} required />
        </div>
        <div className= 'form-group col-sm-12'>
            <label htmlFor="psw">Transaction Password</label>
            <input className='form-control' type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        </div>
        <div className= 'form-group col-sm-12'>
            <label htmlFor='email'>Email</label>
            <input className='form-control' type="text" value={form.email} id='email' name='email' pattern= "/^(([^<>()[\]\.,;:\s@\]+(\.[^<>()[\]\.,;:\s@\]+)*)|(\.+\))@(([^<>()[\]\.,;:\s@\]+\.)+[^<>()[\]\.,;:\s@\]{2,})$/i" onChange={handleInputChange} required />
       </div>
       <div className= 'form-group col-sm-12'>
            <label htmlFor='otp'>OTP</label>
            <input className='form-control' type="number" value={form.otp} id='otp' name='otp' onChange={handleInputChange} required />
       </div>
        <div className= 'form-group col-sm-12'>
             <label htmlFor='remark'>Transaction Remark</label>
             <textarea className='form-control' value={form.remark} id='remark' name='remark' onChange={handleInputChange} required></textarea>
        </div>
        <button className='btn btn-warning' style={{ marginRight: "10px" }} type='reset' onClick={handleReset}>Reset</button>
        <button className='btn btn-primary' type='submit'>Submit</button>
        
        
    </form>
  )
}
