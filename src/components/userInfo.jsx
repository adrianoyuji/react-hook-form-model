import React from 'react'
import './UserInfo.css'

export default props => {
    if(props.condition===true){
        return(
            <div className='userInfo'>
                <p>
                    <b>Personal Information</b><br/>
                    Full Name: {props.data.firstName} {props.data.lastName} <br/>
                    Gender: {props.data.gender} <br/>
                    Country: {props.data.country} 
                    City: {props.data.city}  Address: {props.data.address} <br/>
                    Birth date: {props.data.birthDate} <br/>
                    Profession: {props.data.profession} <br/>
                </p>
                <p>
                    <b>Contact</b> <br/>
                    Email: {props.data.email} <br/>
                    Phone Number{props.data.phoneNumber} <br/>
                </p>
                <p>
                    <b>User Information</b><br/>
                    Login: {props.data.login} <br/>
                    Password: {props.data.password} <br/>
                    Username: {props.data.username} <br/>
                </p>
                <p>Object:[firstName: {props.data.firstName},
                            lastName: {props.data.lastName},
                            gender: {props.data.gender},
                            country:  {props.data.country},
                            city: {props.data.city},
                            address:  {props.data.address},
                            birthDate:  {props.data.birthDate},
                            profession:  {props.data.profession},
                            email: {props.data.email},
                            phoneNumber:  {props.data.phoneNumber},
                            login: {props.data.login},
                            password: {props.data.password},
                            username: {props.data.username}]
</p>

            </div>
        )
    } else return(
        <div></div>
    )
    
}
