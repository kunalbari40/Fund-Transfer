import React, { useState } from 'react'
import "./HomePassword.css"

export default function ChangePassword() {

    
    const handleInputChange = (e) =>{
        const tempForm = {...form}
        tempForm[e.target.name] = e.target.value;
        setForm(tempForm);
        console.log(tempForm);
    }

    const [form, setForm] = useState({
        psw: '',
        npsw: '',
        cpsw: '',
        
    });
     
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const handleReset = () => {
        setForm({
            psw: '',
            npsw: '',
            cpsw: '',
           })
    }
    
  return (
     <form className='Password_Details' onSubmit={handleSubmit}>
        <h4>PASSWORD DETAILS </h4>
        <div className= 'form-group col-sm-12'>
           <label htmlFor="psw">Old Password</label>
           <input className='form-control' type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        </div>

        <div className= 'form-group col-sm-12'>
           <label htmlFor="npsw">New Password</label>
           <input className='form-control' type="password" id="npsw" name="npsw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        </div>

        <div className= 'form-group col-sm-12'>
           <label htmlFor="cpsw">Confirm Password</label>
           <input className='form-control' type="password" id="cpsw" name="cpsw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        </div>

        <button className='btn btn-warning' style={{ marginRight: "10px" }} type='reset' onClick={handleReset}>Reset</button>
        <button className='btn btn-primary' type='submit'>Submit</button>
        
        
    </form>
        )
  }