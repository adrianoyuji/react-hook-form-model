import React, {useState }from 'react'
import Form from './Form'
import UserInfo from './userInfo'
import './App.css'

export default (props) => {
    let [condition, setCondition] = useState(false);
    let [userData, setUserdata] = useState('')
    const onSubmit = data =>{
        setCondition(true)
        setUserdata(data)
        console.log(data)
    }


    return(
        <div className='mainBody'>
            <Form onSubmit={onSubmit} />
            <UserInfo condition={condition} data={userData} />
        </div>
    )
}
