import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserName } from '../redux/action';

const FrontPage = ({setFlag}) => {

    const [username, setUsername] = useState('')
    
    const dispatch = useDispatch()

    const handleUserNameInput = (e) => {
        setUsername(e.target.value)
    }

    const handleUserName = () => {
        if(username !== '') {
            dispatch(addUserName(username))
            setFlag(true)
        }
        else {
            alert('Field is empty! may be you are not aware what is going on here.')
        }
    }

    return (
        <div className="w-50 py-3 mx-auto">
            <div className="form">
                <div className="form-group text-center">
                    <input onChange={(e)=>handleUserNameInput(e)} type="text" placeholder="Your Name..." className="form-control text-center shadow-sm border-0" />
                    <div className="py-2"></div>
                    <button className="btn btn-primary shadow-sm" onClick={handleUserName}>Get in</button>
                </div>
            </div>
        </div>
    );
};

export default FrontPage;