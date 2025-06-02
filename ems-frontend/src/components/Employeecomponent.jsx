import React, { useState } from 'react'

const Employeecomponent = () => {
  const [firstName, setFirstName]=useState('')
  const [lastName, setLastName]=useState('')
  const [email,setEmail]=useState('')

  function handleFirstName(e){
    setFirstName(e.target.value)
  }
  function handleLastName(e){
    setLastName(e.target.value)
  }
  function handleEmail(e){
    setEmail(e.target.value)
  }
  function saveEmployee(e){
    e.preventDefault();
    const employee={firstName,lastName,email}
    console.log(employee);
  }

    return (
    <div className='container'>
        <div className='row'>
            <div className='card'>
                <h2 className='text-center'>Add Employee</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Employee First Name</label>
                            <input
                            type="text"
                            placeholder='Emter Employee First Name:'
                            name='firstName'
                            value={firstName}
                            className='form-control'
                            onChange={handleFirstName}>
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Employee Last Name</label>
                            <input
                            type="text"
                            placeholder='Emter Employee Last Name:'
                            name='lastName'
                            value={lastName}
                            className='form-control'
                            onChange={handleLastName}>
                            </input>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Employee Email</label>
                            <input
                            type="email"
                            placeholder='Emter Employee Email:'
                            name='email'
                            value={email}
                            className='form-control'
                            onChange={handleEmail}>
                            </input>
                        </div>
                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employeecomponent