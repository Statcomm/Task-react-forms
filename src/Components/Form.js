import React from 'react'
import SideInfo from './SideInfo'


function Form() {

    return (
        <div className="form-page">

            <form>
           <input placeholder="First Name" inputid="name" onChange={handleChange}/>
           <input placeholder="Last Name" inputid="lastName" onChange={handleChange}/>
           <input placeholder="Phone Number" inputid="phoneNumber" onChange={handleChange}/>
           <input placeholder="Power" inputid="power" onChange={handleChange}/>
           <input placeholder="Email Address" inputid="emailAddress" onChange={handleChange}/>
           <button type="submit"> Submit </button>
            </form>
            <SideInfo />

        </div>
    )
}

export default Form
