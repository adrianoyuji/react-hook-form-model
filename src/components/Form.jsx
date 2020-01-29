import React from 'react'
import Alert from './Alert'
import {useForm } from 'react-hook-form'
import './Form.css'

export default props => {
    
    const {register, handleSubmit, errors} = useForm()

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <h2>Personal Information</h2>
            <label>First Name:</label>
            <input type="text" name='firstName' placeholder='Insert first name...' ref={register({ required: true })}/>
                {errors.firstName && <Alert required='true' />}

            <label>Last Name:</label>
            <input type="text" name='lastName' placeholder='Insert last name...' ref={register({ required: true })}/>
                {errors.lastName && <Alert required='true' />}

            <label>Gender:</label>
            <select name="gender" ref={register({ required: true })}>
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other...</option>
            </select>
                {errors.gender && <Alert required='true' />}

            <label>Country:</label>
            <select name="country" ref={register({ required: true })}>
                <option value="">Select...</option>
                <option value="Australia">Australia</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="USA">United States</option>
            </select>
                {errors.country && <Alert required='true' />}

            <label>City:</label>
            <input type='text' name='city' ref={register({ required: true })} placeholder='Example Town' />  
                        {errors.city && <Alert required='true' />}

            <label>Address:</label>
            <input type='text' name='address' ref={register({ required: true })} placeholder='123 Example Street' />
                {errors.address && <Alert required='true' />}

            <label>Birth date (dd/mm/yyyy):</label>
            <input type='date' name='birthDate' ref={register({ required: true })}/>
                {errors.date && <Alert required='true' />}

            <label>Profession:</label>
            <input type="text" name='profession' placeholder='Insert your current profession...' ref={register({ required: true })}/>
                {errors.profession && <Alert required='true' />}


            <h2>Contact</h2>
            <label>Email:</label>
            <input type="text" name='email' ref={register({ required: true })} placeholder='e.g.:person@mail.com'/>
                {errors.email && <Alert required='true' />}

            <label>Phone Number:</label>
            <input type='text' name='phoneNumber' ref={register({ required: true })} placeholder='(99) 9 9999-9999' />
                {errors.phoneNumber && <Alert required='true' />}


            <h2>User information</h2>
            <label>Login:</label>
            <input type="text" name='login' ref={register({ required: true })} placeholder='Insert login'/>
                {errors.login && <Alert required='true' />}

            <label>Password:</label>
            <input type="password" name='password' ref={register({ required: true, minLength: 6, maxLength: 28 })} placeholder='Password'/>
                {errors.password && errors.password.type === "required" && (<Alert required='true' />)}
                {errors.password && errors.password.type === "minLength" && (<Alert errorSize='min' />)}
                {errors.password && errors.password.type === "maxLength" && (<Alert errorSize='max' />)}
                    
            <label>Username:</label>
            <input type="text" name='username' ref={register({required:true, minLength: 6, maxLength: 28 })} placeholder='Username' />
                {errors.username && errors.username.type === "required" && (<Alert required='true' />)}
                {errors.username && errors.username.type === "minLength" && (<Alert errorSize='min' />)}
                {errors.username && errors.username.type === "maxLength" && (<Alert errorSize='max' />)}

            <input type='submit' />
        </form>
    )
}
