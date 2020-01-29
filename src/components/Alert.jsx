import React from 'react'
import './Alert.css'

export default (props) => {

    if(props.errorSize === 'min'){
        return (
            <div className='alert'>It is too short!</div>
        )
    }

    if(props.errorSize === 'max'){
        return (
            <div className='alert'>It is too long!</div>
        )
    }

    if(props.required === 'true'){
        return (
            <div className='alert'>This information is necessary!</div>
        )
    }
}
