import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Register(){

    let[errors, setErrors] = useState({})
    const inputRef = useRef(null);
    let [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(()=> {
        inputRef.current.focus()
    }, [])
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    }
   
    const callValidation = (e) => {
        var validationErrors = {}
        if(formData.username.trim() === '')
            validationErrors.username = 'User name is required';

        if(formData.email.trim() === '')
            validationErrors.email = 'Email is required';
        else if (!/\S+@\S+.\S+/.test(formData.email))
            validationErrors.emailpattern = 'Invalid email!';

        if(formData.password.trim() === '')
            validationErrors.password = 'Password is required!';
        else if (formData.password.length < 6)
            validationErrors.passwordlength = 'Password must be min. 6 char.';

        if(formData.password !== formData.confirmPassword)
            validationErrors.confirmPassword = 'Mismatch confirm password!';

        setErrors(validationErrors);
       
    }
    function handleSubmit(event) {
        event.preventDefault();
        callValidation(event);
        console.log(formData);
        

        
        //console.log(credet);
    }

    return (
        <div className="container my-4">
            <div className="mx-auto col-md-6 shadow p-4 bg-white rounded">
                <h2>Register</h2>
                <hr></hr>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-4">
                        <input type="text"
                            ref={inputRef} 
                            name="username"
                            onChange={e => handleChange(e)}
                            className="form-control"  
                            placeholder="Enter User Name" />
                        <div className='validation-error'>
                            <span>{errors.username}</span>
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <input type="text" 
                            name="email"
                            onChange={e => handleChange(e)}
                            className="form-control"  
                            placeholder="Enter Email" />
                            <div className='validation-error'>
                                <span>{errors.email}</span>
                                <span>{errors.emailpattern}</span>
                            </div>
                    </div>
                    <div className="form-group mb-4">
                        <input type="text" 
                            name="password"
                            onChange={e => handleChange(e)}
                            className="form-control"  
                            placeholder="Enter Password" />
                            
                            <div className='validation-error'>
                                <span>{errors.password}</span>
                                <span>{errors.passwordlength}</span>
                            </div>
                    </div>
                    <div className="form-group mb-4">
                        <input type="text"
                            name="confirmPassword" 
                            onChange={e => handleChange(e)}
                            className="form-control"  
                            placeholder="Enter Confirm Password" />
                            <div className='validation-error'>
                                <span>{errors.confirmPassword}</span>
                            </div>
                    </div>

                    <button type="submit" 
                        className="btn btn-primary">Register</button>
                    <div className="mt-2">
                        Login if already have an account with us!
                    </div>
                </form>
            </div>
            <div>
                {formData.value}
            </div>
        </div>
    )


}