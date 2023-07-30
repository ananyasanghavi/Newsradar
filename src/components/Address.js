import React from "react";
import "./Address.css";
import { useRef, useState } from "react";
const Address = () => {
  const [formData,setFormData] = useState({
    Name:'',email:'',address_line_2:'',address_line_1:'',state:'',code:''
  })
 
    return (
            <div className='register-page'>
                <div className="container">
                <h1 class="title">Your Profile</h1>
                 <div className='user-details'>
                    <form  className='register' style={{alignItems:'center'}} >
                    <input type="name" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email id" />
                    <input type="number" name="address-line-1" placeholder="Address" />
                    <input type="text" name="address-line-2" placeholder="address" />
                    <input type="text" name="state" placeholder="state"  />
                    <input type="number" name="pincode" placeholder="pincode" />
                    
                        </form>
                          </div>    
                
                </div>
                </div>
          )
}


export default Address;